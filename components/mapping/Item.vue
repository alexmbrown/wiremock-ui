<template>
  <router-link :to="`/servers/${serverId}/mappings/${mappingId}`" :class="{active: isActive}">
    <div class="flex align-center text-left">
      <div>
        <Method :method="mapping.request.method"/><br/>
        <Status :status="mapping.response.status"/>
      </div>
      <div class="name">
        {{name}}
      </div>
      <el-dropdown>
        <i class="el-icon-caret-bottom action"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Duplicate</el-dropdown-item>
          <el-dropdown-item>Move</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { StubMapping } from 'types'

@Component
export default class MappingItem extends Vue {
  @Prop(Object)
  mapping!: StubMapping

  get name() {
    const req = this.mapping.request
    return this.mapping.name || req.url || req.urlPath || req.urlPattern || req.urlPathPattern
  }

  get serverId() {
    return this.$route.params.serverId
  }

  get mappingId() {
    return this.mapping.uuid
  }

  get isActive(): boolean {
    return this.$route.path.indexOf('/mappings/' + this.mapping.uuid) >= 0
  }
}
</script>

<style lang="scss" scoped>
.action {
  display: none;
}

.flex {
  width: 250px;
  padding: 0.2rem 0.5rem;
  border-left: 4px solid transparent;

  &:hover {
    background: whitesmoke;

    .action {
      display: inline-block;
    }
  }
}

.name {
  color: grey;
  flex-grow: 1;
}

.active {

  .name {
    font-weight: 600;
  }
  
  .flex {
    border-color: #409EFF;
    background: whitesmoke;
  }
}
</style>