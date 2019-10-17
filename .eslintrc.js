module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
    "rules": {
      "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
      "object-curly-newline": ["error", {
        "ObjectExpression": { "minProperties": 5, "multiline": true, "consistent": true },
        "ObjectPattern": { "minProperties": 5, "multiline": true, "consistent": true }
      }],
      "react/jsx-filename-extension": [1,{"extensions": [".js",".jsx"]}],
  }
};
