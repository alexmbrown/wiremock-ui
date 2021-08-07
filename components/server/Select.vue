<template>
  <div>
    <ServerAdd :visible.sync="dialogVisible" @closed="dialogVisible = false"/>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <ServerItem/> <ServerItem :server="selectedServer"/> <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <router-link v-for="server in servers" :key="server.id" :to="'/servers/' + server.id + '/mappings'">
          <ServerItem :server="server"/>
        </router-link>
        <el-dropdown-item divided>
          <div class="add-server" @click="dialogVisible = true">
            <div>
              <i class="el-icon-plus"></i> Add Server
            </div>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Getter } from 'nuxt-property-decorator'
import { Server } from 'types'

@Component
export default class ServerSelect extends Vue {
  
  dialogVisible = false

  @Getter('servers/list')
  servers!: Server[]

  get selectedServer(): Server {
    return this.servers.find(s => s.id === this.$route.params.serverId) as Server
  }
}
</script>

<style lang="scss" scoped>
  .el-dropdown-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;

    i {
      margin-left: 2rem;
    }
  }

  .add-server {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -14px;

    i {
      margin-right: 0;
    }
  }
</style>