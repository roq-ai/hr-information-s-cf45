interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin', 'Employee', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['notifications', 'file upload', 'chat', 'file'],
};
