<script>
  // src/main.js
  import HeaderBox from '~/components/Header.component.vue'
  import '~/server/input.css'
  import { Column, Entity } from 'typeorm';
  export default {
    name: 'Expenses',
    components: { 
      HeaderBox
    }
  }

</script>
<template>
  <div class="h-16">
    <HeaderBox />
  </div>
  <div class="h-96 bg-gradient-to-t from-green-600 to-green-100">
    <h1 class="text-white text-6xl font-mono text-center p-32">EXPENSES</h1>
  </div>
  <div class="h-screen bg-green-600 scroll">

  </div>
</template>