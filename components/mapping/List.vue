<template>
  <div class="mapping-list">
    <div class="flex align-center">
      <el-input placeholder="Filter" size="mini"></el-input>
      <el-dropdown>
        <i class="el-icon-view action"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-checkbox></el-checkbox> Hidden
          </el-dropdown-item>
          <el-dropdown-item>
            <el-checkbox></el-checkbox> Favorite
          </el-dropdown-item>
          <el-dropdown-item>
            <el-checkbox></el-checkbox> Folders
          </el-dropdown-item>
          <el-dropdown-item>
            <el-checkbox></el-checkbox> Other
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <i class="el-icon-d-caret action"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Name Ascending</el-dropdown-item>
          <el-dropdown-item>Name Descending</el-dropdown-item>
          <el-dropdown-item>Http Method</el-dropdown-item>
          <el-dropdown-item>Http Status</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <i class="el-icon-circle-plus action"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>New Request</el-dropdown-item>
          <el-dropdown-item>New Rolder</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <ul>
      <MappingItem v-for="mapping in mappings" :key="mapping.id" :mapping="mapping"/>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { StubMapping } from 'types'

@Component
export default class MappingList extends Vue {
  @Prop(Array)
  mappings!: StubMapping[]
}
</script>

<style lang="scss" scoped>
  .mapping-list {
    border-right: 1px solid #EBEEF5;
    height: 100%;
  }

  .flex {
    padding: 0.5rem;
  }

  .filter {
    margin-right: 0.5rem;
  }

  .action {
    display: inline-block;
    width: 30px;
    padding: 0.5rem 0;
    text-align: center;

    .el-icon-caret-bottom {
      margin-left: -5px;
    }
  }
</style>