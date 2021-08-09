<template>
  <span :class="statusClass">{{status}}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ResponseStatus extends Vue {
  @Prop(Number)
  status!: number

  get statusClass(): string {
    if (this.status < 300) {
      return 'success'
    } else if (this.status < 400) {
      return 'redirect'
    } else if (this.status < 500) {
      return 'client-error'
    } else {
      return 'server-error' 
    }

  }
}
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  font-weight: 700;
  font-size: 0.7rem;
  width: 35px;
  margin-right: 0.25rem;
}
.success {
  color: mediumseagreen;
}
.redirect {
  color: cornflowerblue;
}
.client-error {
  color: darkorange;
}
.server-error {
  color: indianred;
}
</style>