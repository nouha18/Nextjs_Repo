import { createStore, action } from 'easy-peasy'

export default createStore({
    modals: {
      showModal: false,
      showLoginModal: false,
      showRegistrationModal: false,
      setShowModal: action((state) => {
        state.showModal = true
      }),
      setHideModal: action((state) => {
        state.showModal = false
      }),
      setShowModal: action((state) => {
        state.showModal = true
      }),
      setShowLoginModal: action((state) => {
        state.showModal = true
        state.showLoginModal = true
        state.showRegistrationModal = false
      }),
      setShowRegistrationModal: action((state) => {
        state.showModal = true
        state.showLoginModal = false
        state.showRegistrationModal = true
      })
    }
  })