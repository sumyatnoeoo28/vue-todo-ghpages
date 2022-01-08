/**
 * Create App object
 * that will be used to create Vue app later
 */
const App = {
  // state/data of App component
  data() {
    return {
      showForm: true,
      formInput: '',
      todos: []
    }
  },
  // declare methods that will be used in App
  methods: {
    addItem() {
      if (this.formInput.length >0) {
        this.todos.push(this.formInput)
        this.formInput = ''
      } 
    },
    deleteItem(index) {
      this.todos.splice(index, 1)
    }
  },
}
Vue.createApp(App) // create Vue app
  .mount('#app') // mount Vue app into DOM
