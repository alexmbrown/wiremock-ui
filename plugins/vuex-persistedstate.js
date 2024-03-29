import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'wiremock_ui',
    paths: ['servers']
  })(store)
}