
const hashMap = require('./[2]hashMap');
const { inputSelectDiscipline } = require('./[3]disciplines');
const { loadMattersInSelect } = require('./[4]matters');

let ctx = document.getElementById("chart");
const chartConfig =  {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "",
            data: [],
        }]
    },
    options: {
        plugins: {
            legend: {
                position: "bottom",
                align: "start",
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Dado do eixo Y",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Ano"
                }
            }
        }
    }
};
let chart = new Chart(ctx, chartConfig);

window.onload = () => {
    const discipline = inputSelectDiscipline.value;
    const matters = hashMap.filterByDiscipline(discipline);

    loadMattersInSelect(matters);

    window.scrollTo(0, 0);
};

module.exports = { chart, chartConfig };
