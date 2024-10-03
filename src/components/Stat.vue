<template>
    <div class="stat grow flex flex-col gap-2 jusify-center items-center py-8 rounded border shadow font-semibold text-xl basis-1/4">
        <span class="text-cyan-600">{{ props.stat }}</span>
        <span>{{ props.label }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['label', 'stat'])

</script>