<template>
  <div class="landing-page">
    <ServerAdd :visible.sync="dialogVisible" @closed="dialogVisible = false"/>
    <el-card class="box-card">
      <div slot="header">
        <strong>Servers</strong>
      </div>
      <div class="body">
        <router-link v-for="server in servers" :key="server.id" :to="'/servers/' + server.id">
          <server-item class="server" :server="server"/>
        </router-link>
      </div>
      <div class="footer muted" @click="dialogVisible = true">
        <i class="el-icon-plus"></i> Add Server
      </div>
      <!-- add server -->
    </el-card>
    
    <!-- wiremock docks -->
    <!-- github link -->
    <!-- settings? -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Getter } from 'nuxt-property-decorator'
import { Server } from 'types'

@Component
export default class LandingPage extends Vue {

  dialogVisible = false

  @Getter('servers/list')
  servers!: Server[]
}
</script>

<style lang="scss" scoped>
  .landing-page {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  div {
    width: 50%;
    margin: auto;
  }

  .body {
    width: 100%;
    padding: 0;
  }

  .server {
    padding: 18px 20px;
    box-sizing: border-box;
    width: 100%;
  }

  .footer {
    text-align: center;
    cursor: pointer;
  }
</style>

