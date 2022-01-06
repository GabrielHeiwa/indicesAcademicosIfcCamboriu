
const hashMap = require('./[2]hashMap');
const { loadMattersInSelect, divSelectedMatters, mattersSelected } = require('./[4]matters');

// Get select disciplines
const selectDisciplines = document.querySelector('.select-cursor');
const selectOptions = document.querySelector('.select-options');
const inputSelectDiscipline = document.querySelector('.select-cursor input');

// Put all disciplines in select
for (const disciplines of hashMap.getDisciplines()) {
    const option = document.createElement('p');
    option.textContent = disciplines.toUpperCase();

    option.addEventListener('click', () => {

        inputSelectDiscipline.value = option.textContent;
        selectOptions.classList.add('sr-only');

        const matters = hashMap.filterByDiscipline(option.textContent);

        loadMattersInSelect(matters);

        window.scrollTo(0, document.getElementById('stage-2').scrollHeight);

        divSelectedMatters.innerHTML = "";
        mattersSelected.length = 0;
    });

    option.className = "p-2 font-mono transition delay-50 hover:text-black hover:bg-green-300 hover:text-lg cursor-pointer";

    selectOptions.appendChild(option);
};

inputSelectDiscipline.value = "Selecione uma disciplina";

// Add click event to hidden and show select of disciplines
selectDisciplines.addEventListener('click', (e) => {
    selectOptions.classList.toggle('sr-only');
});

module.exports = { inputSelectDiscipline };
