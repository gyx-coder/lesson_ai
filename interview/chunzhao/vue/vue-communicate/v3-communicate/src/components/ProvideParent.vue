<template>
  <div>
    <Child/>
  </div>
</template>

<script setup>
import Child from './Child.vue'
import { provide } from 'vue'
provide("name","旅梦") // key value 

</script>

<style scoped>

</style>