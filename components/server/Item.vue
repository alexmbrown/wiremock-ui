<template>
  <div v-if="server">
    <strong>{{server.name}}</strong><br>
    <small class="muted">{{server.host}}:{{server.port}}</small>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { Server } from 'types'

@Component
export default class ServerItem extends Vue {
  @Prop(Object)
  server!: Server
}
</script>

<style lang="scss" scoped>
  div {
    padding: 1rem;
    width: 150px;
    cursor: pointer;
  }
</style>