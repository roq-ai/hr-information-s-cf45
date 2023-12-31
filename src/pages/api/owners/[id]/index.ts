import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { ownerValidationSchema } from 'validationSchema/owners';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.owner
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getOwnerById();
    case 'PUT':
      return updateOwnerById();
    case 'DELETE':
      return deleteOwnerById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getOwnerById() {
    const data = await prisma.owner.findFirst(convertQueryToPrismaUtil(req.query, 'owner'));
    return res.status(200).json(data);
  }

  async function updateOwnerById() {
    await ownerValidationSchema.validate(req.body);
    const data = await prisma.owner.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteOwnerById() {
    const data = await prisma.owner.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
