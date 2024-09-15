import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
  { ignores : [ 'dist' ] },
  {
    extends : [ js.configs.recommended, ...tseslint.configs.recommended ],
    files : [ '**/*.{ts,tsx}' ],
    languageOptions : {
      ecmaVersion : 2020,
      globals : globals.browser,
    },
    plugins : {
      'react-hooks' : reactHooks,
      'react-refresh' : reactRefresh,
      '@stylistic' : stylistic
    },
    rules : {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components' : [
        'warn',
        { allowConstantExport : true },
      ],
      '@stylistic/array-bracket-spacing' : [ 'error', 'always' ],
      '@stylistic/arrow-spacing' : 'error',
      '@stylistic/block-spacing' : 'error',
      '@stylistic/brace-style' : 'error',
      '@stylistic/comma-spacing' : [ 'error', { 'before' : false, 'after' : true } ],
      '@stylistic/computed-property-spacing' : [ 'error', 'always' ],
      '@stylistic/eol-last' : [ 'error', 'always' ],
      '@stylistic/function-call-spacing' : [ 'error', 'never' ],
      '@stylistic/indent' : [ 'error', 2 ],
      '@stylistic/key-spacing' : [ 'error', { 'beforeColon' : false } ],
      '@stylistic/keyword-spacing' : [ 'error', { 'before' : true } ],
      '@stylistic/max-len' : [ 'error', { 'code' : 80 } ],
      '@stylistic/no-multi-spaces' : 'error',
      '@stylistic/no-multiple-empty-lines' : [ 'error', { 'max' : 1, 'maxEOF' : 0 } ],
      '@stylistic/semi' : 'error',
      '@stylistic/quotes' : [ 'error', 'single' ],
      '@stylistic/space-before-function-paren' : [ 'error', 'never' ],
      '@stylistic/space-in-parens' : [ 'error', 'always' ],
      '@stylistic/template-curly-spacing' : [ 'error', 'always' ],
      '@stylistic/jsx-curly-spacing' : [ 'error', {'when' : 'always', 'children' : true, 'attributes' : true } ]
    },
  }
);
