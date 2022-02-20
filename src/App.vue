<template>
 <!-- vite.config里面配置图片 直接/名称 + 剩下图片名就行 -->
  <!-- <img alt="Vue logo" src="/icon/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <demo  msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <el-card>
      <demo />
      <el-button>1212</el-button>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import demo from 'comp/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    demo
  },
  mounted() {
      console.log('12121')
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
