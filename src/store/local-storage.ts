import store from './store'

store.subscribe((mutation, state) => {
  localStorage.setItem('patrocles:store', JSON.stringify(state))
})
