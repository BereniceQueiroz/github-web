import * as Yup from 'yup';

const envSchema = Yup.object({
  VITE_API_URL: Yup.string().url(),
});

export const env = envSchema.validateSync(import.meta.env);
