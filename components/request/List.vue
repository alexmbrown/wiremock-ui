<template>
  <ul>
    <RequestItem v-for="request in requests" :key="request.id" :request="request"/>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { RequestWrapper } from 'types'

@Component
export default class RequestList extends Vue {
  @Prop(Array)
  requests!: RequestWrapper[]
}
</script>