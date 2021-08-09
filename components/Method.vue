<template>
  <span :class="method">{{methodName}}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { Method } from 'types'

@Component
export default class RequestMethod extends Vue {
  @Prop(String)
  method!: Method

  get methodName() {
    switch (this.method) {
      case 'GET': case 'POST': case 'PUT': case 'HEAD':
        return this.method
      case 'DELETE':
        return 'DEL'
      case 'PATCH':
        return 'PTCH'
      case 'OPTIONS':
        return 'OPT'
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
.GET {
  color: rgb(125, 105, 203);
}
.POST {
  color: rgb(89, 162, 16);
}
.PATCH {
  color: rgb(208, 117, 2);
}
.PUT {
  color: rgb(174, 150, 2);
}
.DELETE {
  color: rgb(208, 68, 68);
}
.OPTIONS {
  color: rgb(28, 144, 180);
}
.HEAD {
  color: rgb(28, 144, 180);
}
</style>