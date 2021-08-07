import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ServerStore from '~/store/servers'

let serverStore: ServerStore

function initialiseStores(store: Store<any>): void {
  serverStore = getModule(ServerStore, store)
}

export { initialiseStores, serverStore }