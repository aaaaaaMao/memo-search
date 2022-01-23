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
    ecmaVersion: 6,
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
    quotes: ['error', 'single']
  }
};
