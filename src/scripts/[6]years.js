
const hashMap = require('./[2]hashMap');

// Get input years
const inputYears = document.querySelector(".select-years input");
inputYears.value = "Selecione os dados de quais anos deseja comparar";

// Get select years
const selectYears = document.querySelector(".select-options-years");

// Get selected div years
const divSelectedYears = document.querySelector(".selected-years");

// Array of years selected
const yearsSelected = [];


// Put years in select
function loadYears(years) {
    for (const year of years) {
        const pYear = document.createElement("p");
        pYear.textContent = year;
        pYear.className = "p-2 transition delay-50 hover:text-lg hover:text-black hover:bg-green-300";
        selectYears.appendChild(pYear);
    
        // Add event to click in option years for add year in input
        pYear.addEventListener("click", () => addAndRemoveYearToSelected(year));
    };
};


// Function for add years in selectedyears div
function addAndRemoveYearToSelected(matterName) {
    if (!yearsSelected.includes(matterName)) {
        yearsSelected.push(matterName);
    } else {
        yearsSelected.splice(yearsSelected.indexOf(matterName), 1);
    };

    // Clear divSelectedMatters
    divSelectedYears.innerHTML = "";

    // Add matter to divSelectedMatters
    for (const year of yearsSelected) {
        const divYear = document.createElement("div");
        divYear.className = "flex items-center justify-between pr-2 w-auto";

        const pYear = document.createElement("p");
        pYear.textContent = year;
        pYear.className = "text-black pr-2";

        const buttonYear = document.createElement("button");
        buttonYear.textContent = "X";
        buttonYear.className = "w-8 h-8 bg-red-500 hover:bg-red-700 text-white p-1 rounded";
        buttonYear.addEventListener("click", () => addAndRemoveYearToSelected(year));

        divYear.appendChild(pYear);
        divYear.appendChild(buttonYear);

        divSelectedYears.appendChild(divYear);
    };
};

module.exports = { yearsSelected, loadYears };
