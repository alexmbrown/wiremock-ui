import { Module, VuexModule, VuexMutation as Mutation } from 'nuxt-property-decorator'
import { Server } from '~/types'

const MAX_RECENT = 5

@Module({
  name: 'servers',
  stateFactory: true,
  namespaced: true,
})
export default class ServerStore extends VuexModule {
  
  servers: Server[] = []

  @Mutation
  add(server: Server) {
    this.servers.push(server)
  }

  @Mutation
  load(servers: Server[]) {
    this.servers = [...servers]
  }

  get list(): Server[] {
    return this.servers
  }

  get count(): number {
    return this.servers.length
  }

}