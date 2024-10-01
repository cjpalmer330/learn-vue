<script>
  // ----------CASH CHARTS FOR NETWORTH AND BANK INFORMATION--------------------
  import Header from '~/components/Header.vue'
  import '~/server/input.css'
  import Chart from '~/components/CashChart.component.vue'
</script>
<template>
  <div class="h-16">
    <Header />
  </div>
  <div class="h-96 bg-gradient-to-t from-green-600 to-green-100">
    <h1 class="text-white text-6xl font-mono text-center p-32">CASH GRAPHS</h1>
  </div>
  <div class="h-screen bg-green-700">
    <Chart />
  </div>
</template>