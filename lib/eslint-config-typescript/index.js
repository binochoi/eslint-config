module.exports = {
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        "plugin:import/recommended",
    ],
    env: {
        "node": true,
        "browser": true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'quotes': [1, 'single'],
        'arrow-body-style': 'error',
        'indent': ['error', 2],
        'prefer-const': 'error',
        'for-direction': 'error',
        'no-var': 'error',
        'func-names': 'off',
        'no-class-assign': 'warn',
        'comma-spacing': ['error'],
        'max-len': 'off',
        'no-shadow': 'off',
        'import/newline-after-import': 'warn',
        'class-methods-use-this': 'off',
        'no-plusplus': 'warn',
        'consistent-return': ['warn', { treatUndefinedAsUnspecified: false }],
        'space-before-function-paren': ['error', { named: 'never', anonymous: 'never' }],

        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/no-undef": "off",
        'no-undef': 'off',
        'no-async-promise-executor': 'off',
        'no-useless-constructor': 'off',

        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        // ignore decorator indent
        'indent': ['error', 2, { 'ignoredNodes': ['PropertyDefinition'] }]
    }
};
