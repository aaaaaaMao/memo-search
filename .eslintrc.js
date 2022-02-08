module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'template-curly-spacing': ['error', 'never'],
    'vue/html-quotes': ['error', 'single'],
    'vue/mustache-interpolation-spacing': ['error', 'always']
  }
};
