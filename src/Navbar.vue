<template>
    <header class="bg-sky-500 text-slate-50 p-2 font-semibold">
    <div class="container mx-auto flex gap-8">
      <div class="brand">BANKROLL</div>
      <nav class="grow"></nav>
      <div class="actions flex gap-2 items-center">
        <div class="action relative">

          <div class="avatr w-7 h-7 bg-red-500 rounded-full" @click="showDropdown = ! showDropdown">
            
          </div>
          <div class="dropdown absolute top-10 right-0 bg-sky-500 flex flex-col gap-2 px-2 py-2 rounded min-w-32" v-show="showDropdown">
            <a href="ok" class="p-2 hover:bg-sky-600 rounded">Profile</a>
            <a href="ok" class="p-2 hover:bg-sky-600 rounded">Profile</a>
            <a href="ok" class="p-2 hover:bg-sky-600 rounded">Profile</a>
            <a href="ok" class="p-2 hover:bg-sky-600 rounded">Profile</a>
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