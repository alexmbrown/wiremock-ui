import { Store } from 'vuex'
import { StubMapping, Server } from 'types'

export default class WireMock {

  constructor(private readonly axios: any, private readonly store: Store<any>) {}

  private getServerUrl(serverId: string): string {
    const server: Server = this.store.getters['servers/list'].find((s: Server) => s.id === serverId)
    return `${server.host}:${server.port}`
  }

  async getMappings(serverId: string): Promise<StubMapping[]> {
    const url = this.getServerUrl(serverId)
    const res = await this.axios.get(url + '/__admin/mappings')
    const mappings = res.data.mappings
    this.store.commit('mappings/load', mappings)
    return res.data.mappings
  }

  // async getMapping(serverId: string, mappingId: String): Promise<StubMapping[]> {
  //   const url = this.getServerUrl(serverId)
  //   const res = await this.axios.get(`${url}/__admin/mappings/${mappingId}`)
  //   return res.data
  // }

  async getRequests(serverId: string): Promise<Request[]> {
    const url = this.getServerUrl(serverId)
    const res = await this.axios.get(`${url}/__admin/requests`)
    const requests = res.data.requests
    this.store.commit('requests/load', requests)
    return res.data.requests
  }

  // async getRequest(serverId: string, requestId: string): Promise<Request> {
  //   const url = this.getServerUrl(serverId)
  //   const res = await this.axios.get(`${url}/__admin/requests/${requestId}}`)
  //   return res.data
  // }

}