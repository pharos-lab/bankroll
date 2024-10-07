<template>
    <table class="w-full rounded overflow-hidden shadow">
        <thead class="bg-slate-200">
            <tr class="rounded">
                <th v-for="(label, index) in (props.labels || Object.keys(props.data[0]))" class="px-6 py-3 text-left " :key="index">{{ label }}</th>
            </tr>
        </thead>

        <tbody class="divide-y">
            <tr v-for="(row,indexRow) in props.data" :key="indexRow" class="hover:bg-slate-100">
                <td v-for="(item, indexItem) in row" :key="indexItem" class="px-6 py-2">{{ item }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const props = defineProps({
    data: Array,
    labels: Array
})
</script>