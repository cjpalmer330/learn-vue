<template>
  <Line
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { defineComponent } from "vue";
import { Line } from "vue-chartjs";
import {Chart as ChartJS,Title,Tooltip,Legend,LineElement,PointElement,CategoryScale,LinearScale,} from "chart.js";

// Register the required components with Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

export default defineComponent({
  name: "LineChartComponent",
  components: {
    Line,
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: "rgb(22,163,74)",
            borderColor: "rgba(22, 163, 74)",
            data: [65, 59, 80, 81, 56, 55],
            fill: true,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Cashflow this Month',
          },
        },
      },
    };
  },
});
</script>

