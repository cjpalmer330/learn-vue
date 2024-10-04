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
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Register the required components with Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

// X LABELS FOR THE GRAPH
let labelsArr = []
for(let i = 0; i < 31; i++){
  labelsArr.push(i)
}

//GET DATA FOR THE GRAPH
let dataArr = [50,40,50,30,20,70,70]


export default defineComponent({
  name: "LineChartComponent",
  components: {
    Line,
  },
  data() {
    return {
      chartData: {
        labels: labelsArr,
        datasets: [
          {
            label: "Expenses",
            backgroundColor: "rgb(22,163,74)",
            borderColor: "rgba(22, 163, 74)",
            data: dataArr,
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

