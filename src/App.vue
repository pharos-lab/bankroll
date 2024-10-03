<template>
  <Navbar/>
  <main class="grow flex text-cyan-800">
    <Sidebar />
    <section class="grow h-full overflow-auto bg-slate-50 p-8">
      <h1 class="font-bold flex justify-between mb-8">
        <span class="text-2xl">POKER</span>
        <button class="px-2 py-1 border-2 border-cyan-600 bg-cyan-600 rounded hover:bg-white hover:text-cyan-600 transition-colors text-white flex items-center gap-2">
          <PlusIcon class="size-5"></PlusIcon>
          New
        </button>
      </h1>

      <div class="charts mb-16">
        <Chart :data="data" class="max-h-56" no-grid no-legend/>
      </div>

      <div class="stats flex gap-8">
        <Stat label="Games" stat="6" />
        <Stat label="Tournament" stat="6" />
        <Stat label="Games" stat="6" />
        <Stat label="Games" stat="6" />
      </div>

    </section>
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue'
import Chart from './components/Chart.vue'
import Stat from './components/Stat.vue';
import { PlusIcon } from '@heroicons/vue/24/solid'

const rawData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 60 },
    { year: 2013, count: 40 },
    { year: 2014, count: 80 },
    { year: 2015, count: 10 },
    { year: 2016, count: 90 },
]
const data = {
    labels: rawData.map(row => row.year),
    datasets: [
        {
            fill: 'origin',
            label: 'test 1',
            data: rawData.map(row => row.count),
            backgroundColor: '#0891b2',
            tension: 0.1
        }
    ]
}
</script>
