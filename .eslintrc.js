module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true,
            "spread": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "require=jsdoc": 0,
        "object-curly-spacing": ["error", "always"],
        "padded-blocks": ["warning", "always"],
        "react/jsx-uses-react": "error", "react/jsx-uses-vars": "error",
    }
};