<template>
  <router-link :to="`/servers/${serverId}/mappings/${mappingId}`">
    {{name}}<br/>
    {{mapping.request.method}}
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { Mapping } from 'types'

@Component
export default class MappingItem extends Vue {
  @Prop(Object)
  mapping!: Mapping

  get name() {
    const req = this.mapping.request
    return this.mapping.name || req.url || req.urlPath || req.urlPattern || req.urlPathPattern
  }

  get serverId() {
    return this.$route.params.serverId
  }

  get mappingId() {
    return this.mapping.id
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 250px;
  padding: 0.5rem;
}
</style>