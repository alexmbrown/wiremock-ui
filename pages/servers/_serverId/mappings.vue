<template>
  <div class="mappings-page">
    <MappingList :mappings="mappings"/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import { AsyncContext, StubMapping } from '~/types'

@Component
export default class MappingsPage extends Vue {
  
  mappings!: StubMapping[]

  async asyncData(context: AsyncContext) {
    return {
      mappings: await context.$wiremock.getMappings(context.params.serverId)
    }
  }
}
</script>

<style lang="scss" scoped>
 .mappings-page {
   display: flex;
   height: 100%;
   overflow: hidden;
 }
</style>