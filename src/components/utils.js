import { scales } from "chart.js"

const noLegend = {
    plugins: {
        legend: {
            display: false
        }
    }
}

const noGrid = {  
    scales: {
        x: {
            grid: {
                display: false
            },
        },
        y: {
            grid: {
                display: false
            },
        },
    }
}

const noRadialGrid = {
    scales: {
        r: {
            grid: {
                display: false
            }
        }
    }
}

const noGridX = {  
    scales: {
        x: {
            grid: {
                display: false
            },
        },
    }
}

const noGridY = {  
    scales: {
        y: {
            grid: {
                display: false
            },
        }
    }
}

const noTicks = {
    scales: {
        x: {
            ticks: {
                display: false
            }
        },
        y: {
            ticks: {
                display: false
            }
        }
    }
}

const noRadialTicks = {
    scales: {
        r: {
            ticks: {
                display: false
            },
            pointLabels: {
                display: false
            }
        }
    }
}

const noTicksX = {
    scales: {
        x: {
            ticks: {
                display: false
            }
        },
    }
}

const noTicksY = {
    scales: {
        y: {
            ticks: {
                display: false
            }
        }
    }
}

const isBlank =  {
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        }
    }
}
    
const noTooltip = {
    plugins: {
        tooltip: {
            enabled: false
        }
    }
}
export {noLegend, noGrid, noGridX, noGridY, noRadialGrid, noTicks, noTicksX, noTicksY, noRadialTicks, isBlank, noTooltip }