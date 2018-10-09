import Calculator from './src/components/'
var app = new Vue({
    el: '#calc',
    components: {
        Calculator
    },
    data: {
        message: 'Hello, Vue!'
    }
})
