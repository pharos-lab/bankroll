<template>
  <Navbar/>
  <main class="grow bg-blue-500 flex">
    <section class="sidebar w-64 h-full overflow-auto bg-yellow-500"></section>
    <section class="grow h-full overflow-auto bg-orange-500"></section>
  </main>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>
