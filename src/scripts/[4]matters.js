
// Get selected matters
const selectMatters = document.querySelector(".select-matters");
const divSelectedMatters = document.querySelector(".div-selected-matter");
const btnNextStage = document.querySelector(".go-stage-3");
const mattersSelected = [];

// Put all matters in select
function loadMattersInSelect(matters) {

    // Clear select
    selectMatters.innerHTML = "";

    for (const matterName of matters.sort()) {
        const matter = document.createElement("p");
        matter.textContent = matterName;
        matter.className = "p-2 transition delay-50 hover:bg-green-200 hover:text-black hover:text-lg font-mono cursor-pointer";
        selectMatters.appendChild(matter);

        // Add click event to each option, for add in divMatters
        matter.addEventListener("click", () => addAndRemoveMatterToSelected(matterName));
    };
};

function addAndRemoveMatterToSelected(matterName) {
    if (!mattersSelected.includes(matterName)) {
        mattersSelected.push(matterName);
    } else {
        mattersSelected.splice(mattersSelected.indexOf(matterName), 1);
    };

    // Clear divSelectedMatters
    divSelectedMatters.innerHTML = "";

    // Add matter to divSelectedMatters
    for (const matter of mattersSelected) {
        const matterDiv = document.createElement("div");
        matterDiv.className = "flex items-center justify-between w-auto mr-2 my-2";

        const matterP = document.createElement("p");
        matterP.textContent = matter;
        matterP.className = "text-black text-lg font-mono mr-2";

        const matterButton = document.createElement("button");
        matterButton.textContent = "X";
        matterButton.className = "w-8 h-8 bg-red-500 hover:bg-red-700 text-white p-1 rounded";
        matterButton.addEventListener("click", () => addAndRemoveMatterToSelected(matter));


        matterDiv.appendChild(matterP);
        matterDiv.appendChild(matterButton);

        divSelectedMatters.appendChild(matterDiv);
    };


};

const buttonClearMattersSelected = document.querySelector("p.clear-matters-selected");
buttonClearMattersSelected.addEventListener("click", clearMattersSelected);

function clearMattersSelected() {
    mattersSelected.length = 0;
    divSelectedMatters.innerHTML = "";
};

// Debounce function for search matters in select
const inputSearchMatters = document.querySelector(".select-matter input");
inputSearchMatters.addEventListener("keyup", debounce(searchMattersInSelect, 500));

function searchMattersInSelect() {
    const matters = selectMatters.children;
    const inputSearchMattersValue = inputSearchMatters.value.toLowerCase();

    for (const matter of matters) {
        if (matter.textContent.toLowerCase().includes(inputSearchMattersValue)) {
            matter.style.display = "block";
        } else {
            matter.style.display = "none";
        };
    };
}

function debounce(func, delay) {
    let timer;

    return function (...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
};

btnNextStage.addEventListener("click", () => {
    if (mattersSelected.length === 0) {
        alert("Selecione pelo menos uma matéria");
    } else {
        const stage3 = document.querySelector(".stage-3");
        window.scrollTo(stage3.offsetLeft, stage3.offsetTop);
    };
});

module.exports = {
    mattersSelected,
    divSelectedMatters,
    loadMattersInSelect
};
