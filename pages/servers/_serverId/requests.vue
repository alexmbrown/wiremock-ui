<template>
  <div class="requests-page">
    <RequestList :requests="requests"/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import { AsyncContext, RequestWrapper } from '~/types'

@Component
export default class RequestPage extends Vue {
  
  requests!: RequestWrapper[]

  async asyncData(context: AsyncContext) {
    return {
      requests: await context.$wiremock.getRequests(context.params.serverId)
    }
  }
}
</script>

<style lang="scss" scoped>
 .requests-page {
   display: flex;
 }
</style>