import store from './store'

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})
