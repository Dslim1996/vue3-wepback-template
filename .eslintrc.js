module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        //vue 문법검사
        //'plugin:vue/vue3-essential', //LV 1
        'plugin:vue/vue3-strongly-recommended', //LV 2
        //'plugin:vue/vue3-recommended', //LV 3
        //js 문법검사
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        //extends 부분 규칙 변경시 사용
        //newline
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],

        //self
        "vue/html-self-closing": ["error", {
        "html": {
            "void": "always",
            "normal": "never",
            "component": "always"
        },
        "svg": "always",
        "math": "always"
        }]
    }
}