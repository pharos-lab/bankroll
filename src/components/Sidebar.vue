<template>
    <section class="sidebar max-h-full overflow-hidden shrink-0 bg-cyan-900 text-slate-300 font-semibold w-18 pt-8 p-3 relative transition-[width] duration-1000"
        :class="{ 'w-56': isOpen }">
        <nav class="flex flex-col gap-2">
            <SidebarLink label="Dashboard" active>
                <HomeIcon class="w-6 h-6 stroke-2"></HomeIcon>
            </SidebarLink>
            <SidebarLink label="Tournament">
                <TrophyIcon class="w-6 h-6 stroke-2"></TrophyIcon>
            </SidebarLink>
            <SidebarLink label="Games">
                <FireIcon class="w-6 h-6 stroke-2"></FireIcon>
            </SidebarLink>
            <SidebarLink label="Settings">
                <Cog6ToothIcon class="w-6 h-6 stroke-2"></Cog6ToothIcon>
            </SidebarLink>
        </nav>

        <button class="p-3 flex hover:text-white hover:bg-cyan-700 bg-cyan-800 rounded absolute bottom-12 left-3" @click="isOpen = !isOpen" :title="isOpen ? 'Close' : 'Open'">
        <transition name="quickFade" mode="out-in">
          <component
            :is="isOpen ? ChevronLeftIcon : ChevronRightIcon"
            class="h-6 w-6 stroke-2"
          ></component>
        </transition>
      </button>
    </section>
</template>

<script setup>
import { ref, provide } from 'vue';
import SidebarLink from './SidebarLink.vue';
import { HomeIcon, ChevronLeftIcon, ChevronRightIcon, Cog6ToothIcon, TrophyIcon, FireIcon } from '@heroicons/vue/24/solid'

const isOpen = ref(true)
provide('isOpen', isOpen);

</script>

<style scoped>
.quickFade-enter-active,
.quickFade-leave-active {
  transition: opacity 0.5s ease;
}

.quickFade-enter-from,
.quickFade-leave-to {
  opacity: 0;
}
</style>