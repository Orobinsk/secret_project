export default {
  '*.{js,jsx}': ['eslint --config eslint.config.mjs'],
  '*.{ts,tsx}': [
    () => 'tsc --noEmit --project tsconfig.json',
    'eslint --config eslint.config.mjs',
    'prettier --config .prettierrc --check',
  ],
};
