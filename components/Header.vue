<script>
  // src/main.js
  import '~/server/input.css'
</script>

<template>
  <div class="absolute grid grid-cols-4 gap-4 w-screen h-16 bg-green-100">
    <a
      class="col-auto border m-4 text-center rounded-xl bg-green-700 text-white font-sans font-bold"
      href="/"
    >
      <h1 class="mt-0.5">Home</h1>
    </a>
    <a
      class="col-auto border m-4 text-center rounded-xl bg-green-700 text-white font-sans font-bold"
      href="/monthly"
    >
      <h1 class="mt-0.5">MONTHLY</h1>
    </a>
    <a
      class="col-auto border m-4 text-center rounded-xl bg-green-700 text-white font-sans font-bold"
      href="/expenses"
    >
      <h1 class="mt-0.5">EXPENSES</h1>
    </a>
    <a
      class="col-auto border m-4 text-center rounded-xl bg-green-700 text-white font-sans font-bold"
      href="/cash"
    >
      <h1 class="mt-0.5">CASH</h1>
    </a>
    
  </div>
</template>