<template>
  <ul>
    <MappingItem v-for="mapping in mappings" :key="mapping.id" :mapping="mapping"/>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { Mapping } from 'types'

@Component
export default class MappingList extends Vue {
  @Prop(Array)
  mappings!: Mapping[]
}
</script>