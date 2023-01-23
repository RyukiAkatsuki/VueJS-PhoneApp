import { createStore } from 'vuex'

export default createStore({
  state: {
    contact: [
      { 
        name: 'Maya',
        phonenumber: '01 23 45 56 78'
      },
      {
        name: 'Denya',
        phonenumber: '02 34 56 67 89'
      }
    ]
  },
  getters: {
  },
  mutations: {
    addContact(state, contact) {
      state.contact.push(contact) 
    }
  },
  actions: {
  },
  modules: {
  }
})
