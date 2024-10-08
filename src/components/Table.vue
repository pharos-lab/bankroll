<template>
    <div class="table w-full">
        <p v-if="props.data.length === 0">Aucune donnée disponible</p>
        <table class="w-full rounded overflow-hidden shadow" v-else>
            <thead class="bg-slate-200">
                <tr class="rounded">
                    <th v-for="(label, index) in (props.labels || Object.keys(props.data[0]))" class="px-6 py-3 text-left" :key="index">
                        <div class="flex gap-2 items-center">
                            <span>{{ label }}</span> <span><ChevronDownIcon class="size-4"/></span>
                        </div>
                    </th>
                </tr>
            </thead>
            
            <tbody class="divide-y">
                <tr v-for="(row,indexRow) in props.data" :key="indexRow" class="hover:bg-slate-100">
                    <td v-for="(item, indexItem) in row" :key="indexItem" class="px-6 py-2">{{ item }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    data: {
        type: Array,
        default: []
    },
    labels: Array,
    search: String
})
</script>