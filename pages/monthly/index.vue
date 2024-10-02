<script>
  // src/main.js
  import Header from '~/components/Header.vue'
  import '~/server/input.css'

  import BarChart from '~/components/monthlyChart.component.vue'
  import currentMonth from '~/components/currentMonth.component.vue'

  export default {
    name: 'Month Tab',
    components: { 
      BarChart, 
      currentMonth
    }
  }  
</script>
<template>
  <div class="h-16">
    <Header />
  </div>
  <div class="h-96 bg-gradient-to-t from-green-600 to-green-100">
    <h1 class="text-white text-6xl font-mono text-center p-32">MONTHLY BUDGET</h1>
  </div>
  <div class="h-screen bg-green-600">
    <div class="grid grid-rows-3">
      <!-- this is the white bar chart area-->
      <div class="bg-white h-72 p-4 m-8 rounded-2xl shadow-xl" id="bar-chart">
        <BarChart />
      </div>
      <div>
        <currentMonth />
      </div>
    </div>
  </div>
</template>