<template>
  <router-link :to="`/servers/${serverId}/requests/${requestId}`">
    {{request.request.method}}
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { RequestWrapper } from 'types'

@Component
export default class RequestItem extends Vue {
  @Prop(Object)
  request!: RequestWrapper

  get serverId() {
    return this.$route.params.serverId
  }

  get requestId() {
    return this.request.id
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 250px;
  padding: 0.5rem;
}
</style>