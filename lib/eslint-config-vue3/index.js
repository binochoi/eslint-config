module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/multi-word-component-names': ['error', {
      'ignores': ['index']
    }],
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-child-content': 'error',
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-setup-props-destructure': 'warn',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'warn',
    'vue/no-textarea-mustache': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    // its useless if u using ts
    'vue/no-use-computed-property-like-method': 'warn',
    'vue/no-use-v-if-with-v-for': 'warn',
    'vue/no-useless-template-attributes': 'warn',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/require-component-is': 'error',

    'vue/require-default-prop': 'off',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'warn',
    'vue/return-in-computed-property': ['warn', {
      treatUndefinedAsUnspecified: true,
    }],
    'vue/use-v-on-exact': 'warn',
    'vue/valid-define-emits': 'warn',
    'vue/valid-define-props': 'warn',
    'vue/valid-next-tick': 'warn',
    'vue/valid-template-root': 'warn',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'warn',
    'vue/valid-v-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-for': 'warn',
    'vue/valid-v-html': 'error',
    'vue/valid-v-text': 'warn',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'warn',
    'vue/valid-v-once': 'warn',
    'vue/valid-v-pre': 'warn',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'warn',

    /**
       * disable most of compatible options with Vue 2.
       * There is a many bad practices.
       * from the first place, developer should to abstinence ancient badly codes.
       */
    'vue/no-deprecated-data-object-declaration': 'off',
    'vue/no-deprecated-destroyed-lifecycle': 'off',
    'vue/no-deprecated-dollar-listeners-api': 'off',
    'vue/no-deprecated-dollar-scopedslots-api': 'off',
    'vue/no-deprecated-events-api': 'off',
    /** u dont need to worry this if u using ts */
    'vue/no-deprecated-filter': 'off',
    'vue/no-deprecated-functional-template': 'off',
    'vue/no-deprecated-html-element-is': 'off',
    'vue/no-deprecated-inline-template': 'off',
    'vue/no-deprecated-props-default-this': 'off',
    'vue/no-deprecated-router-link-tag-prop': 'off',
    'vue/no-deprecated-scope-attribute': 'off',
    'vue/no-deprecated-slot-attribute': 'warn',
    'vue/no-deprecated-slot-scope-attribute': 'warn',
    'vue/no-deprecated-v-bind-sync': 'off',
    'vue/no-deprecated-v-is': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'warn',
    'vue/no-deprecated-v-on-number-modifiers': 'warn',
    'vue/no-deprecated-vue-config-keycodes': 'off',
    'vue/no-lifecycle-after-await': 'warn',
    'vue/no-v-for-template-key-on-child': 'warn',
    'vue/no-watch-after-await': 'warn',
    'vue/prefer-import-from-vue': 'warn',
    'vue/require-slots-as-functions': 'off',
    'vue/require-toggle-inside-transition': 'warn',
    'vue/valid-v-is': 'off',
    'vue/valid-v-memo': 'warn',

    /**
       * Markup Language 관점에서는 좋은 관행이지만,
       * hyphenation을 고집하는 건 변수와의 연결성을 다소 깨뜨리는 것 같다는 판단.
       */
    'vue/attribute-hyphenation': ['off'],
    'vue/component-definition-name-casing': ['warn', 'PascalCase'],
    'vue/first-attribute-linebreak': ['warn'],
    'vue/html-closing-bracket-newline': ['warn'],
    'vue/html-closing-bracket-spacing': ['warn'],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['warn', 2, {
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      baseIndent: 1,
    }],
    'vue/html-quotes': ['error', 'double', {
      avoidEscape: false,
    }],

    /**
       * For only Option APIs
       */
    'vue/require-valid-default-prop': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/return-in-emits-validator': 'off',

    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
  },
}