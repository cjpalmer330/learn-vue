<script>
  // --------- this is the home page for the whole website. below is the splash screen ---------
  import Header from '~/components/Header.vue'
  import '~/server/input.css'
  import { Photo } from '~/components/Expenses'

  //boiler plate shit i copied this from type-orm
  const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "admin",
    database: "test",
    entities: [Photo],
    synchronize: true,
    logging: false,
  })

  AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
</script>
<template>
  <div class="h-16">
    <Header />
  </div>
  <DIV class="absolute h-96 bg-gradient-to-t from-green-600 to-green-100 w-screen">
    <div class="bg-gradient-to-b from-white rounded-2xl mt-36 ml-72 mr-72 h-64">
      <h1 class="text-slate-700 text-6xl font-sans text-center p-16">WELCOME TO MY APP</h1>
    </div>
  </DIV>
  <!-- CONTENT AREA BELOW-->
  <div class="ABSOULUTE h-2000 bg-green-600 pt-96">
    <div class="grid grid-rows-3 p-16 gap-12">
      <div class="h-80 bg-green-700 p-4 rounded-3xl">
        <div class="text-center text-white font-mono text-2xl"> Track Your Monthly Expenses!</div>
        <div class="grid grid-cols-2 w-fit g-8">
          <div class="border border-4 rounded-md max-w-xl p-8 columns-auto m-4">
            <ul class="text-white font-mono text-lg">
              <li class="list-disc">Set a monthly budget and track how close you're following!</li>
              <li class="list-disc">Track your monthly spending compared to last month!</li>
            </ul>
          </div>
          <div class="border border-4 rounded-md max-w-xl col-auto m-4 p-8">PLACEHOLDER FOR AN IMAGE</div>
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