module.exports = {
  extends: ['semistandard', 'plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {
    'prefer-const': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never'
    }],
    'vue/html-self-closing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: 5 }],
    'vue/name-property-casing': ['error', 'kebab-case']
  }
};
