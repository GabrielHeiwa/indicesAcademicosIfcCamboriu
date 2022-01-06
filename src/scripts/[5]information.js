

const informations = [
    { key: "FS", value: "matter_fs" },
    { key: "FI", value: "matter_fi" },
    { key: "Reprovação total", value: "matter_total" },
    { key: "Notas de 2.4 a 0", value: "matter_24_and_00" },
    { key: "Notas de 2.5 a 4.9", value: "matter_49_and_25" },
    { key: "Notas de 5.0 a 7.4", value: "matter_74_and_50" },
    { key: "Notas de 7.5 a 10.0", value: "matter_10_and_75" },
    { key: "Aprovados", value: "matter_approveds" },
    { key: "Número de aluno", value: "matter_students_active" },
];

// Get select information
const selectInformation = document.querySelector(".select-options-information");

// Get input of information
const inputInformation = document.querySelector(".select-information input");
inputInformation.value = "Selecione uma informação";

// Add event to click in input information for show options
inputInformation.addEventListener("click", () => {
    selectInformation.classList.toggle("sr-only");
});

informations.forEach((item, index, arr) => {
    const pInformation = document.createElement("p");
    pInformation.textContent = item.key;
    pInformation.className = "p-2 transition delay-50 text-black hover:text-black hover:text-lg hover:bg-green-300 cursor-pointer";
    selectInformation.appendChild(pInformation);

    // Add click event to each option, for add in divMatters
    pInformation.addEventListener("click", () => selectedInformation(item.value, item.key));
});

// Function for change input value for information selected
function selectedInformation(value, key) {
    inputInformation.value = key;
    selectInformation.classList.toggle("sr-only");
    inputInformation.setAttribute("data-value", value);

    const stage4 = document.querySelector(".stage-4");
    window.scrollTo(stage4.offsetLeft, stage4.offsetTop);
};

// Get for go to stae 4
const btnGoStage4 = document.querySelector(".go-stage-4");
btnGoStage4.addEventListener("click", () => {
    if (inputInformation.value === "Selecione uma informação") {
        alert("Selecione uma informação");
    }
});

module.exports = { inputInformation };  
