<template>
  <el-form ref="form" :rules="rules" :model="server" label-width="120px" :before-close="handleClose">
    <el-dialog
      title="Add Server"
      :visible="visible"
      :before-close="handleClose">
        <el-form-item label="Server Name" prop="name">
          <el-input v-model="server.name"></el-input>
        </el-form-item>
        <el-col :span="16">
          <el-form-item label="Host" prop="host">
            <el-input v-model="server.host" placeholder="http://localhost" :rules="[{required: true, message: 'test'}]"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" class="port">
          <el-form-item label="Port" prop="port" label-width="60px">
            <el-input v-model="server.port" placeholder="8080"></el-input>
          </el-form-item>
        </el-col>
        <span slot="footer" class="dialog-footer">
          <el-button @click="close">Cancel</el-button>
          <el-button type="primary" @click="addServer">Add Server</el-button>
        </span>
    </el-dialog>
  </el-form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Ref } from 'nuxt-property-decorator'
import { v4 as uuid } from 'uuid'
import { Form, Server, Rule } from '../types'

@Component
export default class ServerAddDialog extends Vue {
  
  server: Server = {
    name: '',
    host: 'http://localhost',
    port: ''
  }

  rules: {[key: string]: Rule[]} = {
    name: [
      { required: true, message: 'Server name is required', trigger: 'blur' }
    ],
    host: [
      { required: true, message: 'Host is required', trigger: 'blur' }
    ],
    port: [
      { required: true, message: 'Server name is required', trigger: 'blur' }
    ]
  }

  @Prop(Boolean)
  visible!: boolean

  @Ref('form')
  form!: Form

  close() {
    this.$emit('closed')
    this.form.resetFields();
  }

  handleClose(done: Function) {
      this.close()
      done()
  }

  addServer() {
    this.form.validate((valid: boolean) => {
      if (valid) {
        const id = uuid()
        this.$store.commit('servers/add', Object.assign({id}, this.server))
        this.$emit('closed')
        this.close()
        this.$router.push(`/servers/${id}/mappings`)
      }
    })
  }
}
</script>