module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  "globals": {
    "AMap": "off"
  },

  globals: {
    AMap: 'off'
  }
}
