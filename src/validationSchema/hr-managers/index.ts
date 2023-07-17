import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
