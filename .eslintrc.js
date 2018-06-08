module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8, //指定ECMAScript支持的版本，6为ES6，这里为了兼容async和await，设置为8
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: ['import', 'promise'],
  env: {
    'node': true
  },
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 0,
    "semi": [2, "always"],
    "eol-last": [2, "never"],
    "newline-before-return": 2,
  }
}