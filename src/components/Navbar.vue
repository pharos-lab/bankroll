<template>
  <header class="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white p-3 font-semibold">
    <div class="container mx-auto flex items-center gap-8">
      <div class="brand">BANKROLL</div>
      <nav class="grow"></nav>
      <div class="actions flex gap-2 items-center">
        <div class="action relative">
          <div class="avatr w-7 h-7 bg-red-500 rounded-full" @click="showDropdown = ! showDropdown">
            
          </div>
          <div class="dropdown absolute top-12 -right-2 bg-cyan-600 flex flex-col gap-2 px-2 py-2 rounded min-w-32 text-slate-100" v-show="showDropdown">
            <a href="ok" class="p-2 hover:bg-cyan-700 hover:text-white rounded">Profile</a>
            <a href="ok" class="p-2 hover:bg-cyan-700 hover:text-white rounded">Profile</a>
            <a href="ok" class="p-2 hover:bg-cyan-700 hover:text-white rounded">Profile</a>
            <a href="ok" class="p-2 hover:bg-cyan-700 hover:text-white rounded">Profile</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const showDropdown = ref(false)
</script>