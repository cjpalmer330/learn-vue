<script>
  // ----------CASH CHARTS FOR NETWORTH AND BANK INFORMATION--------------------
  import HeaderBlock from '~/components/Header.component.vue'
  import monthLine from '~/components/monthLine.component.vue'
  import '~/server/input.css'

  export default {
    name: 'Cash Tab',
    components: {
      monthLine,
      HeaderBlock
    }
  }
</script>
<template>
  <div class="h-16">
    <HeaderBlock />
  </div>
  <div class="h-96 bg-gradient-to-t from-green-600 to-green-100 w-full">
    <h1 class="text-white text-6xl font-mono text-center p-32">Cash Flow</h1>
  </div>
  <!-- CONTENT AREA-->
  <div class="absolute h-screen w-full bg-green-600">
    <div class="bg-white h-96 m-16 rounded-2xl grid grid-cols-2 shadow-2xl">
      <div class="w-full m-4 p-4 gap-4 h-96 -translate-y-4">
        <monthLine />
      </div>
      <div class="m-8">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsam minima omnis nam, cumque provident veniam accusamus animi incidunt? Vel nam quos, quo doloremque sequi voluptas totam modi earum sunt!</h1>
      </div>
    </div>
  </div>
</template>