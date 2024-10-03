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

      <div class="charts mb-16 gap-4 flex">
        <div class="chart grow">
         <Charts :data="data" no-grid class="max-h-56" title=""/>
        </div>
        <div class="chart basis-1/4">
         <Charts :data="dataPie" type="doughnut" class="max-h-56" legend-position="bottom"/>
        </div>
      </div>

      <div class="stats flex gap-8">
        <Stat label="Bankroll" stat="8 567" devise="$"/>
        <Stat label="Tournament" stat="6" />
        <Stat label="Games" stat="6" />
        <Stat label="Games" stat="6" />
      </div>

      

    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue'
import Stat from './components/Stat.vue';
import Charts from './components/Charts.vue';
import { PlusIcon } from '@heroicons/vue/24/solid'

const lineChart = ref()
const pieChart =ref()

const rawData = [
    { game: 2010, count: 100 },
    { game: 2011, count: 200 },
    { game: 2012, count: 180 },
    { game: 2013, count: 240 },
    { game: 2014, count: 290 },
    { game: 2015, count: 230 },
    { game: 2016, count: 310 },
]

const data = {
    labels: rawData.map(row => row.game),
    datasets: [
        {
            fill: 'origin',
            label: 'Money',
            data: rawData.map(row => row.count),
            backgroundColor: '#0891b2',
            tension: .2
        }
    ]
}

const dataPie = {
  labels: ['Gains', 'Perte'],
  datasets: [{
    data: [100, 50]
  }]
}
</script>
