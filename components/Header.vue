<script>
  // src/main.js
  import '~/server/input.css'
</script>

<template>
  <div class="absolute grid grid-cols-4 gap-4 w-screen h-16 bg-green-100">
    <a
      class="col-auto border m-4 text-center rounded-xl bg-green-700 text-white shadow-md font-sans font-bold hover:transition hover:bg-green-800 transition hover:shadow-lg"
      href="/"
    >
      <h1 class="mt-1">Home</h1>
    </a>
    <a
      class="col-auto border m-4 text-center rounded-xl bg-green-700 text-white font-sans font-bold hover:transition hover:bg-green-800 transition shadow-md hover:shadow-lg"
      href="/monthly"
    >
      <h1 class="mt-1">Monthly</h1>
    </a>
    <a
      class="col-auto border m-4 text-center rounded-xl bg-green-700 text-white font-sans font-bold hover:transition hover:bg-green-800 transition shadow-md hover:shadow-lg"
      href="/expenses"
    >
      <h1 class="mt-1">Expenses</h1>
    </a>
    <a
      class="col-auto border m-4 text-center rounded-xl bg-green-700 text-white font-sans font-bold hover:transition hover:bg-green-800 transition shadow-md hover:shadow-lg"
      href="/cash"
    >
      <h1 class="mt-1">Cash</h1>
    </a>
    
  </div>
</template>