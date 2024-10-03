<template>
    <canvas ref="charts"></canvas>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Chart from 'chart.js/auto';
import _merge from 'lodash/merge'
import { noLegend, noGrid, noTicks, isBlank, noGridX, noGridY, noTicksX, noTicksY, noRadialGrid, noRadialTicks, noTooltip, legendPosition } from './utils.js'

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    options: {
        type: Object,
    },
    plugins: Object,
    type: {
        type: String,
        default: 'line',
        validator(value, props) {
            return ['bar', 'bubble', 'doughnut', 'pie', 'line', 'polar', 'radar', 'scatter'].includes(value)
        }
    },
    noLegend: Boolean,
    noGrid: Boolean,
    noGridX: Boolean,
    noGridY: Boolean,
    noTicks: Boolean,
    noTicksX: Boolean,
    noTicksY: Boolean,
    blank: Boolean,
    noTooltip: Boolean,
    legendPosition: String
})

const charts = ref()
defineExpose({charts})


const finalOptions = computed(() => {
    let legend = props.noLegend == true ? noLegend : null
    let grid = props.noGrid == true ? noGrid: null
    let gridX = props.noGridX == true ? noGridX: null
    let gridY = props.noGridY == true ? noGridY: null
    let ticks = props.noTicks == true ? noTicks : null
    let ticksX = props.noTicksX == true ? noTicksX : null
    let ticksY = props.noTicksY == true ? noTicksY : null
    let blank = props.blank == true ? isBlank : null
    let tooltip = props.noTooltip == true ? noTooltip : null
    let positionLegend = props.legendPosition ? legendPosition(props.legendPosition) : null

    if ((props.type == "radar" || props.type == "polar" ) && props.noGrid == true) {
        grid = noRadialGrid
    }
    if ((props.type == "radar" || props.type == "polar" ) && props.noTicks == true) {
        ticks = noRadialTicks
    }

    return _merge(props.options, legend, grid, gridX, gridY, ticks, ticksX, ticksY, blank, tooltip, positionLegend)
})

onMounted(() => {
    new Chart(charts.value, {
        type: props.type,
        options: finalOptions.value,
        data: props.data,
        plugins: props.plugins
    })
})
</script>