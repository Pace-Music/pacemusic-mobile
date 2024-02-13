import { createStore } from 'vuex'

export const store = createStore({
  state () {
      return {
          token: (localStorage.getItem("token")) ? localStorage.getItem("token") : 'not_access',
          name: '',
          login: '',
          password: '',
      }
  },
})
