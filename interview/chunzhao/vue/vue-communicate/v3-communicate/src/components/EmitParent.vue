<template>
  <div>
    <EmitParent @myClick="onMyClick"/>
  </div>
</template>

<script setup>
import EmitParent from './EmitParent.vue'
const onMyClick = (msg)=>{
  console.log(msg)
}
</script>

<style scoped>

</style>