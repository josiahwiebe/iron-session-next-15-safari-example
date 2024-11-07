import type { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [formsPlugin],
};
export default config;
