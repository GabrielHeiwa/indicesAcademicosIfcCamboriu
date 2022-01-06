const { mattersSelected  } = require('./[4]matters');
const { inputInformation } = require('./[5]information');
const { inputSelectDiscipline } = require('./[3]disciplines');
const { yearsSelected } = require('./[6]years');
const { chart } = require('./[8]index');

const hashMap = require('./[2]hashMap');

const btnGenerateChart = document.querySelector(".btn-generate-chart");
const pTitleChart = document.querySelector('.title-chart');

btnGenerateChart.addEventListener('click', () => {
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
    chart.data = result.data;
    chart.options.scales.y = result.scale;
    pTitleChart.textContent = result.title;

    chart.update();
});