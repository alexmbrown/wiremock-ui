<template>
  <header>
    <ServerSelect/>
    <el-menu class="el-menu-demo" mode="horizontal" :default-active="defaultIndex" ref="menu" :router="true">
      <el-menu-item :index="`/servers/${serverId}/mappings`">Mappings</el-menu-item>
      <el-menu-item :index="`/servers/${serverId}/requests`">Requests</el-menu-item>
      <el-menu-item :index="`/servers/${serverId}/misses`">Misses</el-menu-item>
      <el-menu-item :index="`/servers/${serverId}/scenarios`">Scenarios</el-menu-item>
      <el-menu-item :index="`/servers/${serverId}/settings`">Settings</el-menu-item>
    </el-menu>
    <div class="actions">
      <i class="el-icon-setting"></i>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

const PAGES = [
  'mappings',
  'requests',
  'misses',
  'scenarios',
  'settings'
]

@Component
export default class ServerItem extends Vue {
  
  defaultIndex: string = 'mappings';
  
  created() {
    const index = this.$route.path.lastIndexOf('/')
    const path = this.$route.path.substring(index + 1)
    if (PAGES.indexOf(path) >= 0) {
      this.defaultIndex = `/servers/${this.serverId}/${path}`
    }
  }

  get serverId() {
    return this.$route.params.serverId
  }

}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    border-bottom: solid 1px #e6e6e6;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 61px;
  }

  .el-menu {
    margin-bottom: -1px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  .actions {
    width: 200px;
    display: flex;
    justify-content: flex-end;
    margin-left: 14px;
  }

  i {
    padding: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>