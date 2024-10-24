<template>
  <div class="ml-72 mr-72">
    <div class="border-2 rounded-2xl h-44 grid grid-rows-2 bg-white">
      <h1 class="m-4 text-center bg-green-400 rounded-xl shadow-lg text-4xl font-mono pt-1">Have an expense to add?</h1>
      <div class="mb-4 mr-4 ml-4 rounded-2xl bg-green-400 p-4">
        <div class="justify-items-center">
          <form action="../pages/expenses/index.vue">
            <label for="expenseAmount">Purchase Cost: $</label>
            <input type="number" id="expenseAmount" name="expenseAmount" value="0" class="bg-green-300 rounded-md p-2">
            &emsp;&emsp;&emsp;&emsp;
            <label for="pType">Purchase Type: </label>
            <input type="text" id="pType" name="pType" class="bg-green-300 rounded-md p-2">
            &emsp;
            <input type="submit" value="Submit" class="border rounded-md pt-1.5 pb-1.5 pl-8 pr-8 bg-green-500 hover:bg-green-600 hover:transition-all duration-150">
          </form>
        </div>
      </div>
    </div>


    <div class="border-2 rounded-2xl h-44 grid grid-rows-2 bg-white mt-16">
      <h1 class="m-4 text-center bg-green-400 rounded-xl  shadow-lg text-4xl font-mono pt-1">Have income to report?</h1>
      <div class="mb-4 mr-4 ml-4 rounded-2xl bg-green-400 p-4">
        <div class="justify-items-center">
          <form action="../pages/expenses/index.vue">
            <label for="incomeAmount">Income Amount: $</label>
            <input type="number" id="incomeAmount" name="incomeAmount" value="0.00" class="bg-green-300 rounded-md p-2">
            &emsp;&emsp;&emsp;&emsp;
            <label for="incomeType">Income Type (paycheck/gift): </label>
            <input type="text" id="incomeType" name="incomeType" class="bg-green-300 rounded-md p-2">
            &emsp;
            <input type="submit" value="Submit" class="border rounded-md pt-1.5 pb-1.5 pl-8 pr-8 bg-green-500 hover:bg-green-600 hover:transition-all duration-150">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import '~/server/input.css'
  
  export default {
    name: "ExpenseForum"
  }


</script>