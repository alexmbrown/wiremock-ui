import { Module, VuexModule, VuexMutation as Mutation } from 'nuxt-property-decorator'
import { StubMapping } from '~/types'

@Module({
  name: 'mappings',
  stateFactory: true,
  namespaced: true,
})
export default class MapingStore extends VuexModule {
  
  mappings: StubMapping[] = []

  @Mutation
  load(mappings: StubMapping[]) {
    this.mappings = [...mappings]
  }

  get list(): StubMapping[] {
    return this.mappings
  }

  get byId() {
    return (id: string) => this.mappings.find(m => m.id === id)
  }

}