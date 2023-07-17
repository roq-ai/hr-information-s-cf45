import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
