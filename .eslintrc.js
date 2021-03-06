module.exports = {
  "extends": ["eslint-config-egg", "standard", "plugin:prettier/recommended"],
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",

    "ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION": true,
    "page": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": [1, "single"],
    "semi": ["error", "always"],
    "no-unused-vars": [0, 1]
  }
};
