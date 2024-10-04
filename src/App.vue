<template>
  <Navbar/>
  <main class="grow flex text-cyan-800 h-full overflow-hidden">
    <Sidebar />
    <section class="grow h-full overflow-auto bg-slate-50 p-8">
      <h1 class="font-bold flex justify-between mb-6">
        <span class="text-2xl">POKER</span>

        <button class="px-2 py-1 border-2 border-cyan-600 bg-cyan-600 rounded hover:bg-white hover:text-cyan-600 transition-colors text-white flex items-center gap-2">
          <PlusIcon class="size-5"></PlusIcon>
          New
        </button>
      </h1>

      <div class="charts mb-8 grid grid-cols-4 gap-8">
        <div class="chart relative col-span-3 shadow rounded bg-white p-4">
         <Charts :data="data" no-grid class="max-h-56" title=""/>
        </div>

        <div class="chart relative shadow rounded bg-white p-4">
         <Charts :data="dataPie" type="doughnut" class="max-h-56" legend-position="bottom"/>
        </div>
      </div>

      <div class="stats grid grid-cols-4 gap-8 mb-12">
        <Stat label="Bankroll" stat="8 567" devise="$"/>
        <Stat label="Tournament" stat="6" />
        <Stat label="Games" stat="6" />
        <Stat label="Games" stat="6" />
      </div>

      <div class="stats mb-12">
        <h3 class="font-bold text-xl mb-8">Last 5 Cash Games</h3>

        <div class="flex gap-8">
          <div class="chart relative w-1/2 shadow rounded bg-white p-2 self-start">
            <Charts :data="databar" type="bar"  title="" no-grid no-ticks-y/>
          </div>

          <div class="list w-1/2 relative shadow rounded bg-white divide-y">
            <div class="item flex py-2 px-6 justify-between cursor-pointer hover:bg-slate-100" v-for="index in 5" :key="index">
              <div class="info">
                <p class=" font-bold">Cash Game - Julien</p>
                <p class="text-slate-500 text-sm">6 joueurs le 17/05</p>
              </div>

              <div class="status flex gap-4 items-center justify-center font-bold">
                <p class="px-4 py-1 border border-emerald-500 rounded-full text-emerald-500 text-sm">Gain</p>
                <ChevronRightIcon class="w-5 h-5"></ChevronRightIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="last">
        <h3>Last Games</h3>
        <Table />
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
import { ChevronRightIcon } from '@heroicons/vue/24/outline';

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
const databar = {
  labels: ['27/05', '2/06', '8/06', '14/7', '18/7'],
  datasets: [
    {
      label: 'Mise',
      data: [10, 10, 25, 15, 10]
    },
    {
      label: 'Gain',
      data: [24, 7, 32, 87, 4]
    }
  ]
}
</script>
