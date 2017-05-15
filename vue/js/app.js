new Vue({
    el: '#box',
    data: {
        message: 'hello vue.js.'
    }
});
new Vue({
    el: '#btn',
    methods: {
        doSomething: function() {
            console.log(1)
        }
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '当前时间： ' + new Date()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }

})
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: '学习 JavaScript'
        }, {
            text: '学习 Vue'
        }, {
            text: '整个牛项目'
        }]
    }
})
var app5 = new Vue({
    el: '#app-5',
    data: {
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
        books: [{
            id: 1,
            author: '曹雪芹',
            name: '红楼梦',
            price: 32.0
        }, {
            id: 2,
            author: '施耐庵',
            name: '水浒传',
            price: 30.0
        }, {
            id: '3',
            author: '罗贯中',
            name: '三国演义',
            price: 24.0
        }, {
            id: 4,
            author: '吴承恩',
            name: '西游记',
            price: 20.0
        }]
    }


})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
var app8=new Vue({
  // ...
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})