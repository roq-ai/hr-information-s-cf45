import axios from 'axios';
import queryString from 'query-string';
import { OwnerInterface, OwnerGetQueryInterface } from 'interfaces/owner';
import { GetQueryInterface } from '../../interfaces';

export const getOwners = async (query?: OwnerGetQueryInterface) => {
  const response = await axios.get(`/api/owners${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createOwner = async (owner: OwnerInterface) => {
  const response = await axios.post('/api/owners', owner);
  return response.data;
};

export const updateOwnerById = async (id: string, owner: OwnerInterface) => {
  const response = await axios.put(`/api/owners/${id}`, owner);
  return response.data;
};

export const getOwnerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/owners/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOwnerById = async (id: string) => {
  const response = await axios.delete(`/api/owners/${id}`);
  return response.data;
};
