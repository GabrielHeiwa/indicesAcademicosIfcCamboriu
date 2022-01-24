const { mattersSelected  } = require('./[4]matters');
const { inputInformation } = require('./[5]information');
const { inputSelectDiscipline } = require('./[3]disciplines');
const { yearsSelected } = require('./[6]years');
const { chart, chartConfig } = require('./[8]index');

const hashMap = require('./[2]hashMap');

const btnGenerateChart = document.querySelector(".btn-generate-chart");
const pTitleChart = document.querySelector('.title-chart');
const selectChartType = document.querySelector('#chart-type-option');

const stage5 = document.querySelector('.stage-5');

btnGenerateChart.addEventListener('change', () => {
    const discipline = inputSelectDiscipline.value;
    const matters = mattersSelected;
    const years = yearsSelected.sort();
    const information = inputInformation.getAttribute("data-value");

    const getOptions = {
        matters,
        years,
        information,
        discipline,
    };

    const result = hashMap.get(getOptions);
    pTitleChart.textContent = result.title;
    
    chartConfig.type = selectChartType.value;
    chartConfig.data = result.data
    chartConfig.options.scales.y = result.scale;
    chart.update();

    window.scrollTo(0, stage5.scrollHeight);
    console.log('oie')

    inputInformation.value = "Selecione uma informação";
});