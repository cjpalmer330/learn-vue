<template>
  <currentMonth
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// Register the necessary components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: {
    Bar
  },
  data() {
    return {
      // Define your data for the stacked bar chart
      chartData: {
        labels: ['Car', 'Insurance', 'Groceries'],
        datasets: [
          {
            label: 'Expenses',
            backgroundColor: '#ff4d4d',
            data: [40, 20, 30, 50, 70, 60, 80]
          },
        ]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            stacked: true,
            beginAtZero: true
          },
          x: {
            stacked: true
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Stacked Bar Chart Example'
          }
        }
      }
    }
  }
}
</script>