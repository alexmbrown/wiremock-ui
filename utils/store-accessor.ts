import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MapingStore from '~/store/mappings'
import ServerStore from '~/store/servers'

let serverStore: ServerStore
let mappingStore: MapingStore

function initialiseStores(store: Store<any>): void {
  serverStore = getModule(ServerStore, store)
  mappingStore = getModule(MapingStore, store)
}

export { initialiseStores, serverStore, mappingStore }