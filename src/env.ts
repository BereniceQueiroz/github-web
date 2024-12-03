import * as Yup from 'yup';

const envSchema = Yup.object({
  VITE_API_BASE_URL: Yup.string().url(),
  VITE_GITHUB_TOKEN: Yup.string(),
});

export const env = envSchema.validateSync(import.meta.env);
