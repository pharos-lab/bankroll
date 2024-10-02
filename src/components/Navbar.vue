<template>
  <header class="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white p-3 font-semibold">
    <div class="container mx-auto flex items-center gap-8">
      <div class="brand">BANKROLL</div>
      <nav class="grow"></nav>
      <div class="actions flex gap-2 items-center">
        <div class="action relative cursor-pointer">
          <div class="avatar rounded-full border-2 hover:border-white p-1 group" @click="showDropdown = ! showDropdown">
            <UserIcon class="w-6 h-6 stroke-2 text-slate-200 group-hover:text-white fill-slate-200 group-hover:fill-white"></UserIcon>
          </div>
          <div class="dropdown absolute top-14 -right-2 bg-cyan-600 flex flex-col gap-2 px-2 py-2 rounded min-w-32 text-slate-100" v-show="showDropdown">
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
import { UserIcon } from '@heroicons/vue/24/outline'

const showDropdown = ref(false)
</script>