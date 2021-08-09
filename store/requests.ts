import { Module, VuexModule, VuexMutation as Mutation } from 'nuxt-property-decorator'
import { RequestWrapper } from '~/types'

@Module({
  name: 'requests',
  stateFactory: true,
  namespaced: true,
})
export default class RequestStore extends VuexModule {
  
  requests: RequestWrapper[] = []

  @Mutation
  load(requests: RequestWrapper[]) {
    this.requests = [...requests]
  }

  get list(): RequestWrapper[] {
    return this.requests
  }

  get byId() {
    return (id: string) => this.requests.find(r => r.id === id)
  }

}