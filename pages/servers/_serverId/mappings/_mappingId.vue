<template>
  <div class="mapping-page">
    <MappingHeader />
    {{getMapping($route.params.mappingId)}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Getter } from 'nuxt-property-decorator'
import { StubMapping } from '~/types'

@Component
export default class MappingDetailsPage extends Vue {
  
  @Getter('mappings/byId')
  getMapping!: (id: string) => StubMapping
  
}
</script>

<style lang="scss" scoped>
  .mapping-page {
    padding: 0.5rem;
  }
</style>