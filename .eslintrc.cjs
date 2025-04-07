module.exports = {
    root: true,
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:astro/recommended',
      'prettier'
    ],
    plugins: ['react', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    settings: {
      react: {
        version: 'detect'
      }
    },
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro']
        }
      }
    ]
  }