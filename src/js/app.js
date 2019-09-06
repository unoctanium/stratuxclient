// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';

// import store
import store from '../js/store.js'

// import stratux
import stratux from '../js/stratux.js'


//import ContactsListComponent from 'framework7/components/contacts-list/contacts-list';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
new Vue({
  el: '#app',
  
  render: (h) => h(App),
  
  store,

  created () {
    // Add event listeners for network status change
    window.addEventListener('offline', () => {
      store.dispatch('setConnected', false)
    })
    window.addEventListener('online', () => {
      store.dispatch('setConnected', true)
    })
  },


  mounted() {
    //stratux.startController(store)
    store.dispatch('stratux/startController')
  },

  // Register App Component
  components: {
    app: App
  },
});