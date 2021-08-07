<template>
  <div>
    <ServerAdd :visible.sync="dialogVisible" @closed="dialogVisible = false"/>
    <el-button type="primary" @click="dialogVisible = true">Add Server</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class WelcomePage extends Vue {
  dialogVisible = false
}
</script>