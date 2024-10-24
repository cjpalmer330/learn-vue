<script>
  // src/main.js
  import HeaderBox from '~/components/Header.component.vue'
  import '~/server/input.css'

  import BarChart from '~/components/monthlyChart.component.vue'
  import currentMonth from '~/components/currentMonth.component.vue'
  import monthLine from '~/components/monthLine.component.vue'

  export default {
    name: 'Month Tab',
    components: { 
      BarChart, 
      currentMonth,
      monthLine,
      HeaderBox
    }
  }


</script>
<template>
  <div class="h-16">
    <HeaderBox />
  </div>
  <div class="h-96 bg-gradient-to-t from-green-600 to-green-100">
    <h1 class="text-white text-6xl font-mono text-center p-32">MONTHLY BUDGET</h1>
  </div>
  <!-- CONTENT AREA-->
  <div class="h-screen*2 bg-green-600 bg-scroll">
    <div class="grid grid-rows-3">
      <!-- this is the white bar chart area-->
      <div class="bg-white h-96 p-4 ml-24 mr-24 mb-8 mt-8 rounded-2xl shadow-xl w-128 grid grid-cols-2" id="bar-chart">
        <div class="h-96">
          <BarChart />
        </div>
        <div class="p-8">
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat doloribus natus enim aliquam, voluptatum culpa eaque maxime doloremque nemo quos numquam eius ipsum asperiores veritatis. Aut iste perferendis optio porro!</h1>
        </div>
      </div>
      <!-- current month budget chart-->
      <div class="bg-white h-96 p-4 ml-24 mr-24 mt-16 mb-8 rounded-2xl shadow-xl w-128 grid grid-cols-2">
        <div class="h-96">
          <currentMonth />
        </div>
        <div class="h-96">
          <monthLine />
        </div>
      </div>
    </div>
  </div>
</template>