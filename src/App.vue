<template>
  <Navbar/>
  <main class="grow flex">
    <Sidebar />
    <section class="grow h-full overflow-auto bg-slate-50"></section>
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue'
</script>
