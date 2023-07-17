const mapping: Record<string, string> = {
  companies: 'company',
  customers: 'customer',
  employees: 'employee',
  'hr-managers': 'hr_manager',
  owners: 'owner',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
