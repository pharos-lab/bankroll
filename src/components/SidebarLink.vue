<template>
    <a href="a" class="p-3 flex gap-4 hover:text-white hover:bg-cyan-800 rounded transition-colors" :title="props.label">
        <span class="shrink-0">
            <slot></slot>
        </span>
        <span :class="isExpended" class="transition-[opacity] duration-1000 whitespace-nowrap">
            {{ props.label }}
        </span>
    </a>
</template>
<script setup>
import { inject, computed } from 'vue';

const props = defineProps({
    label: String
})

const isOpen = inject('isOpen')

const isExpended = computed(() => {
  return isOpen.value ? 'opacity-100' : 'opacity-0';
});
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s ease 0.5s;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>