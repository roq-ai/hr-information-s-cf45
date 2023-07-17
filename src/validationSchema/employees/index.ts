import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  vacation_days: yup.number().integer().required(),
  payroll: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
