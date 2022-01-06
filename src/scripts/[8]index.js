
const hashMap = require('./[2]hashMap');
const { inputSelectDiscipline } = require('./[3]disciplines');
const { loadMattersInSelect } = require('./[4]matters');

let ctx = document.getElementById("chart");
let chart = new Chart(ctx, {
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
});

window.onload = () => {
    const discipline = inputSelectDiscipline.value;
    const matters = hashMap.filterByDiscipline(discipline);

    loadMattersInSelect(matters);

    window.scrollTo(0, 0);
};

module.exports = { chart };

// const compareOptions = {
//     matters: ["BANCO DE DADOS I", "BANCO DE DADOS II"],
//     years: [2019, 2018],
//     information: "matter_total",
//     discipline: "Bacharel em Sistemas de Informação",
// };

