module.exports = {
    parser: '@typescript-eslint/parser',
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
        'no-async-promise-executor': 'warn',
        'no-undef': 'error',
        'no-class-assign': 'warn',
        'comma-spacing': ['error'],
        
        'space-before-function-paren': ['error', {named: 'never', anonymous: 'never'}],
        
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    }
};