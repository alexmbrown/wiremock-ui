<template>
  <div class="mappings-page">
    <MappingList :mappings="mappings" class=""/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import { Mapping } from '~/types'
import WireMock from '~/api/wiremock'

@Component
export default class ServerItem extends Vue {
  
  mappings!: Mapping[]

  async asyncData({$wiremock, params}: {$wiremock: WireMock, params: {[key: string]: any}}) {
    return {
      mappings: await $wiremock.getMappings(params.serverId)
    }
  }
}
</script>

<style lang="scss" scoped>
 .mappings-page {
   display: flex;
 }
</style>