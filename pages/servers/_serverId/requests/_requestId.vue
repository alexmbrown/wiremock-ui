<template>
  <div>
    {{getRequest($route.params.requestId)}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Getter } from 'nuxt-property-decorator'
import { RequestWrapper } from '~/types'

@Component
export default class MappingDetailsPage extends Vue {
  
  @Getter('requests/byId')
  getRequest!: (id: string) => RequestWrapper
  
}
</script>