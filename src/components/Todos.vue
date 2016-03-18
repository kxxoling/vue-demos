<template lang="jade">
section.todoapp
  header.header
    h1 todos
    input.new-todo(autofocus='', autocomplete='off', placeholder='What needs to be done?', v-model='newTodo', @keyup.enter='addTodo')
  section.main(v-show='todos.length', v-cloak='')
    input.toggle-all(type='checkbox', v-model='allDone')
    ul.todo-list
      li.todo(v-for='todo in filteredTodos', :class='{completed: todo.completed, editing: todo == editedTodo}')
        .view
          input.toggle(type='checkbox', v-model='todo.completed')
          label(@dblclick='editTodo(todo)') {{todo.title}}
          button.destroy(@click='removeTodo(todo)')
        input.edit(type='text', v-model='todo.title', v-todo-focus='todo == editedTodo', @blur='doneEdit(todo)', @keyup.enter='doneEdit(todo)', @keyup.esc='cancelEdit(todo)')
  footer.footer(v-show='todos.length', v-cloak='')
    span.todo-count
      strong(v-text='remaining')
      |  {{remaining | pluralize 'item'}} left
    ul.filters
      li
        a(href='#/all', :class="{selected: visibility == 'all'}") All
      li
        a(href='#/active', :class="{selected: visibility == 'active'}") Active
      li
        a(href='#/completed', :class="{selected: visibility == 'completed'}") Completed
    button.clear-completed(@click='removeCompleted', v-show='todos.length > remaining')
      | Clear completed
</template>

<script>
var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

const STORAGE_KEY = 'todos-vuejs'
var todoStorage = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default {
  // app initial state
  data () {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      editedTodo: null,
      visibility: 'all'
    }
  },
  // watch todos change for localStorage persistence
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos)
    },
    remaining: function () {
      return filters.active(this.todos).length
    },
    allDone: {
      get: function () {
        return this.remaining === 0
      },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({ title: value, completed: false })
      this.newTodo = ''
    },

    removeTodo: function (todo) {
      this.todos.$remove(todo)
    },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit: function (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },

    removeCompleted: function () {
      this.todos = filters.active(this.todos)
    }
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus': function (value) {
      if (!value) {
        return
      }
      var el = this.$el
      this.nextTick(function () {
        el.focus()
      })
    }
  }
}

</script>

<style lang="scss">
@import "~todomvc-app-css/index.css";
body {
  max-width: 100%;
}
.todoapp {
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}
</style>