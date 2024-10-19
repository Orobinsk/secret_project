export default {
  '*.{js,jsx}': ['eslint'],
  '*.{ts,tsx}': [
    () =>
      'git diff --cached --name-only --diff-filter=AM | grep "\\.ts$\\|\\.tsx$" | xargs tsc --noEmit --project tsconfig.json',
    'eslint',
    'prettier --check',
  ],
};
