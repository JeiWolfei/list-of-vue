module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
  {
    "extends": [
      "eslint:recommended",
      "plugin:vue/essential"
    ],
    "parserOptions": {
      "parser": "babel-eslint",
      "ecmaVersion": 8,
      "sourceType": "module"
    },
    "env": {
      "browser": true,
      "es6": true
    },
    "rules": {
      "eqeqeq": ["error", "always"],
      "no-console": "off",
      "indent": ["error", 4, { "SwitchCase": 1 }],
      "quotes": ["warn", "single"],
      "no-multi-spaces": ["error",
        {
            "ignoreEOLComments": true
        }
      ],
      "no-trailing-spaces": "off",
      "new-cap": "error",
      "no-redeclare": [
        "error",
        {
          "builtinGlobals": true
        }
      ],
      "semi": ["error", "always"],
      "space-in-parens": ["error"],
      "space-infix-ops": "error",
      "object-curly-spacing": ["error", "always"],
      "comma-spacing": "error",
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": [
        "error", 
        { 
          "before": true, 
          "after": true,
          "overrides": {
            "if": { "after": false },
            "for": { "after": false },
            "while": { "after": false },
            "do": { "after": false },
            "switch": { "after": false },
            "catch": { "after": false }
          } 
        }
      ],
      "array-bracket-spacing": "error"
    }
  }
}
