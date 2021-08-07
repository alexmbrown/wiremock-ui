import { Store } from 'vuex'
import { Mapping, Server } from 'types'

export default class WireMock {

  constructor(private readonly axios: any, private readonly store: Store<any>) {}

  private getServerUrl(serverId: string): string {
    const server: Server = this.store.getters['servers/list'].find((s: Server) => s.id === serverId)
    return `${server.host}:${server.port}`
  }

  async getMappings(serverId: string): Promise<Mapping[]> {
    const url = this.getServerUrl(serverId)
    // get server address
    // call mappings endpoint
    // merge with state
    const res = await this.axios.get(url + '/__admin/mappings')
    return res.data.mappings
  }

}