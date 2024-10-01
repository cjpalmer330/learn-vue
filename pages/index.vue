<script>
  // --------- this is the home page for the whole website. below is the splash screen ---------
  import Header from '~/components/Header.vue'
  import '~/server/input.css'
</script>
<template>
  <div class="h-16">
    <Header />
  </div>
  <DIV class="h-96 bg-gradient-to-t from-green-600 to-green-100">
    <h1 class="text-white text-6xl font-mono text-center p-32">WELCOME TO MY APP</h1>
  </DIV>
  <div class="h-screen bg-green-600">
    <div class="grid grid-rows-3 p-16 gap-12">
      <div class="h-80 bg-green-700 p-4 rounded-3xl">
        <div class="text-center text-white font-mono text-2xl"> Track Your Monthly Expenses!</div>
        <div class="grid grid-cols-2 w-fit g-8">
          <div class="border border-4 rounded-md max-w-xl col-auto">With this app you are able to set monthly budgets that you can track with your expenses and income to ensure staying within budget</div>
          <div class="border border-4 rounded-md max-w-xl col-auto">PLACEHOLDER FOR AN IMAGE</div>
        </div>
      </div>
      <div class="h-80 bg-green-700 p-4 rounded-3xl">
        <div class="h-80 bg-green-700 p-4 rounded-3xl">
        <div class="text-center text-white font-mono text-2xl"> Track your Cash Liquidity</div>
        <div class="grid grid-cols-2 w-fit g-8">
          <div class="border border-4 rounded-md max-w-xl col-auto">With this app you are able to set monthly budgets that you can track with your expenses and income to ensure staying within budget</div>
          <div class="border border-4 rounded-md max-w-xl col-auto">PLACEHOLDER FOR AN IMAGE</div>
        </div>
      </div>
      </div>
      <div class="h-80 bg-green-700 p-4 rounded-3xl">
        <div class="h-80 bg-green-700 p-4 rounded-3xl">
        <div class="text-center text-white font-mono text-2xl">Track all your cashflow</div>
        <div class="grid grid-cols-2 w-fit g-8">
          <div class="border border-4 rounded-md max-w-xl col-auto">With this app you are able to set monthly budgets that you can track with your expenses and income to ensure staying within budget</div>
          <div class="border border-4 rounded-md max-w-xl col-auto">PLACEHOLDER FOR AN IMAGE</div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>