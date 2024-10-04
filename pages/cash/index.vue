<script>
  // ----------CASH CHARTS FOR NETWORTH AND BANK INFORMATION--------------------
  import Header from '~/components/Header.vue'
  import monthLine from '~/components/monthLine.component.vue'
  import '~/server/input.css'

  export default {
    name: 'Cash Tab',
    components: {
      monthLine,
    }
  }
</script>
<template>
  <div class="h-16">
    <Header />
  </div>
  <div class="h-96 bg-gradient-to-t from-green-600 to-green-100 w-full">
    <h1 class="text-white text-6xl font-mono text-center p-32">CASH GRAPHS</h1>
  </div>
  <!-- CONTENT AREA-->
  <div class="absolute h-screen w-full bg-green-600 scrollbar">
    <DIV class="bg-white h-96 w-full m-8 rounded-2xl grid grid-cols-2">
      <div class="w-full m-4 p-4 gap-4">
        <monthLine />
      </div>
      <div class="m-8">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsam minima omnis nam, cumque provident veniam accusamus animi incidunt? Vel nam quos, quo doloremque sequi voluptas totam modi earum sunt!</h1>
      </div>
    </DIV>
  </div>
</template>