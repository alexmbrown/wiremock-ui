const WELCOME_PATH = '/welcome'
const SERVERS_PATH = '/servers'

export default function({ store, route, redirect }) {
  const count = store.getters['servers/count']
  const path = route.path

  if (path != WELCOME_PATH && count <= 0) {
    redirect(WELCOME_PATH)
  } else if (path === WELCOME_PATH && count > 0) {
    redirect('/')
  } else if (path.indexOf(SERVERS_PATH) >= 0) {
    // if server doesn't exist redirect to /
    // if mapping doesn't exist redirect to /server/id
  }
  
}