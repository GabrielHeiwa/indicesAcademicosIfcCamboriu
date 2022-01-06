// const indices = require("../../src/data/indice.js"); // data for tests

const indices = require('../data/[1]indice.js');

const HASH_MAP_SIZE = 29;
const informaion_relations = {
    "matter_fs": "FS",
    "matter_fi": "FI",
    "matter_total": "Reprovação total",
    "matter_24_and_00": "Notas de 2.4 a 0",
    "matter_49_and_25": "Notas de 2.5 a 4.9",
    "matter_74_and_50": "Notas de 5.0 a 7.4",
    "matter_10_and_75": "Notas de 7.5 a 10.0",
    "matter_approveds": "Aprovados",
    "matter_students_active": "Número de aluno",

};

class HashMap {
    #size = HASH_MAP_SIZE;
    #table = new Array(HASH_MAP_SIZE)
    #disciplines = [];
    #years = [];

    hashing(key) {
        let hash = 0;
        let size = this.#size;
        let letter;

        for (let i = 0; i < key.length; i++) {
            letter = key[i];
            hash = (hash << 5) + letter.charCodeAt(0);
            hash = (hash & hash) % size;
        }

        return hash
    };

    insert(key, value) {

        let index = this.hashing(key);

        if (!this.#disciplines.includes(value.matter_cursor))
            this.#disciplines.push(value.matter_cursor);

        if (!this.#years.includes(value.matter_year))
            this.#years.push(value.matter_year);

        // Tratament of negative values in the values of keys, because is the error fo aproximation
        for (const [key, data] of Object.entries(value))
            if (data < 0) value[key] = 0;

        if (this.#table[index] !== undefined) {
            let current = this.#table[index]

            if (current.value.matter_name === value.matter_name && current.value.matter_year === value.matter_year && current.value.matter_cursor === value.matter_cursor) {

                let total_de_alunos = current.value.matter_students_active + value.matter_students_active;

                // Calculate matter FS
                const currentFs = current.value.matter_fs * current.value.matter_students_active;
                const valueFs = value.matter_fs * value.matter_students_active;
                current.value.matter_fs = (currentFs + valueFs) / total_de_alunos;


                // Calculate matter FI
                const matterFi1 = current.value.matter_fi * current.value.matter_students_active;
                const matterFi2 = value.matter_fi * value.matter_students_active;
                current.value.matter_fi = (matterFi1 + matterFi2) / total_de_alunos;

                // Calculate matter total
                const currentTotal1 = current.value.matter_total * current.value.matter_students_active;
                const valueTotal2 = value.matter_total * value.matter_students_active;
                current.value.matter_total = (currentTotal1 + valueTotal2) / total_de_alunos;

                // Calculate matter with notes between 10.0 and 7.5
                const current10and75 = current.value.matter_10_and_75 * current.value.matter_students_active;
                const value10and75 = value.matter_10_and_75 * value.matter_students_active;
                current.value.matter_10_and_75 = (current10and75 + value10and75) / total_de_alunos;

                // Calculate matter with notes between 7.4 and 5.0
                const current74and50 = current.value.matter_74_and_50 * current.value.matter_students_active;
                const value74and50 = value.matter_74_and_50 * value.matter_students_active;
                current.value.matter_74_and_50 = (current74and50 + value74and50) / total_de_alunos;

                // Calculate matter with notes between 4.9 and 2.5
                const current49and25 = current.value.matter_49_and_25 * current.value.matter_students_active;
                const value49and25 = value.matter_49_and_25 * value.matter_students_active;
                current.value.matter_49_and_25 = (current49and25 + value49and25) / total_de_alunos;

                // Calculate matter with notes between 2.4 and 0.0
                const current24and0 = current.value.matter_24_and_00 * current.value.matter_students_active;
                const value24and0 = value.matter_24_and_00 * value.matter_students_active;
                current.value.matter_24_and_00 = (current24and0 + value24and0) / total_de_alunos;

                // Calculate matter approveds
                const currentApproveds = current.value.matter_approveds * current.value.matter_students_active;
                const valueApproveds = value.matter_approveds * value.matter_students_active;
                current.value.matter_approveds = (currentApproveds + valueApproveds) / total_de_alunos;

                current.value.matter_students_active = total_de_alunos;
                this.#table[index] = current;

                return;
            } else {
                let current = this.#table[index];

                while (current.next != null) {
                    if (current.value.matter_name === value.matter_name && current.value.matter_year === value.matter_year && current.value.matter_cursor === value.matter_cursor) {
                        let total_de_alunos = current.value.matter_students_active + value.matter_students_active;

                        // Calculate matter FS
                        const currentFs = current.value.matter_fs * current.value.matter_students_active;
                        const valueFs = value.matter_fs * value.matter_students_active;
                        current.value.matter_fs = (currentFs + valueFs) / total_de_alunos;

                        // Calculate matter FI
                        const matterFi1 = current.value.matter_fi * current.value.matter_students_active;
                        const matterFi2 = value.matter_fi * value.matter_students_active;
                        current.value.matter_fi = (matterFi1 + matterFi2) / total_de_alunos;

                        // Calculate matter total
                        const currentTotal1 = current.value.matter_total * current.value.matter_students_active;
                        const valueTotal2 = value.matter_total * value.matter_students_active;
                        current.value.matter_total = (currentTotal1 + valueTotal2) / total_de_alunos;

                        // Calculate matter with notes between 10.0 and 7.5
                        const current10and75 = current.value.matter_10_and_75 * current.value.matter_students_active;
                        const value10and75 = value.matter_10_and_75 * value.matter_students_active;
                        current.value.matter_10_and_75 = (current10and75 + value10and75) / total_de_alunos;

                        // Calculate matter with notes between 7.4 and 5.0
                        const current74and50 = current.value.matter_74_and_50 * current.value.matter_students_active;
                        const value74and50 = value.matter_74_and_50 * value.matter_students_active;
                        current.value.matter_74_and_50 = (current74and50 + value74and50) / total_de_alunos;

                        // Calculate matter with notes between 4.9 and 2.5
                        const current49and25 = current.value.matter_49_and_25 * current.value.matter_students_active;
                        const value49and25 = value.matter_49_and_25 * value.matter_students_active;
                        current.value.matter_49_and_25 = (current49and25 + value49and25) / total_de_alunos;

                        // Calculate matter with notes between 2.4 and 0.0
                        const current24and0 = current.value.matter_24_and_00 * current.value.matter_students_active;
                        const value24and0 = value.matter_24_and_00 * value.matter_students_active;
                        current.value.matter_24_and_00 = (current24and0 + value24and0) / total_de_alunos;

                        // Calculate matter approveds
                        const currentApproveds = current.value.matter_approveds * current.value.matter_students_active;
                        const valueApproveds = value.matter_approveds * value.matter_students_active;
                        current.value.matter_approveds = (currentApproveds + valueApproveds) / total_de_alunos;

                        current.value.matter_students_active = total_de_alunos;

                        return;
                    } else {
                        current = current.next;
                    }
                };

                if (current.value.matter_name === value.matter_name && current.value.matter_year === value.matter_year && current.value.matter_cursor === value.matter_cursor) {
                    let total_de_alunos = current.value.matter_students_active + value.matter_students_active;

                    // Calculate matter FS
                    const currentFs = current.value.matter_fs * current.value.matter_students_active;
                    const valueFs = value.matter_fs * value.matter_students_active;
                    current.value.matter_fs = (currentFs + valueFs) / total_de_alunos;

                    // Calculate matter FI
                    const matterFi1 = current.value.matter_fi * current.value.matter_students_active;
                    const matterFi2 = value.matter_fi * value.matter_students_active;
                    current.value.matter_fi = (matterFi1 + matterFi2) / total_de_alunos;

                    // Calculate matter total
                    const currentTotal1 = current.value.matter_total * current.value.matter_students_active;
                    const valueTotal2 = value.matter_total * value.matter_students_active;
                    current.value.matter_total = (currentTotal1 + valueTotal2) / total_de_alunos;

                    // Calculate matter with notes between 10.0 and 7.5
                    const current10and75 = current.value.matter_10_and_75 * current.value.matter_students_active;
                    const value10and75 = value.matter_10_and_75 * value.matter_students_active;
                    current.value.matter_10_and_75 = (current10and75 + value10and75) / total_de_alunos;

                    // Calculate matter with notes between 7.4 and 5.0
                    const current74and50 = current.value.matter_74_and_50 * current.value.matter_students_active;
                    const value74and50 = value.matter_74_and_50 * value.matter_students_active;
                    current.value.matter_74_and_50 = (current74and50 + value74and50) / total_de_alunos;

                    // Calculate matter with notes between 4.9 and 2.5
                    const current49and25 = current.value.matter_49_and_25 * current.value.matter_students_active;
                    const value49and25 = value.matter_49_and_25 * value.matter_students_active;
                    current.value.matter_49_and_25 = (current49and25 + value49and25) / total_de_alunos;

                    // Calculate matter with notes between 2.4 and 0.0
                    const current24and0 = current.value.matter_24_and_00 * current.value.matter_students_active;
                    const value24and0 = value.matter_24_and_00 * value.matter_students_active;
                    current.value.matter_24_and_00 = (current24and0 + value24and0) / total_de_alunos;

                    // Calculate matter approveds
                    const currentApproveds = current.value.matter_approveds * current.value.matter_students_active;
                    const valueApproveds = value.matter_approveds * value.matter_students_active;
                    current.value.matter_approveds = (currentApproveds + valueApproveds) / total_de_alunos;

                    current.value.matter_students_active = total_de_alunos;

                    return;
                };

                current.next = {
                    value,
                    next: null
                };
                return;
            };

        } else {
            this.#table[index] = {
                value,
                next: null,
            };
        };
    };

    print() {
        let index = 0;

        for (; index < this.#size; index++) {
            let table = []
            let current = this.#table[index];

            table.push(current.value);

            while (current.next != null) {
                current = current.next;
                table.push(current.value);
            };

            console.table(table, ["matter_name"]);
        };

    };

    getMattersNames() {
        const mattersNames = [];

        for (let index = 0; index < this.#size; index++) {
            let current = this.#table[index];

            mattersNames.push(current.value.matter_name);

            while (current.next != null) {
                current = current.next;
                mattersNames.push(current.value.matter_name);
            };
        };

        return mattersNames;
    };

    getDisciplines() {
        return this.#disciplines;
    };

    getYears() {
        return this.#years;
    };

    randomColors() {
        let color = "rgba(";
        for (let index = 0; index < 2; index++) {
            color += Math.floor(Math.random() * 255) + ",";

        };
        color += Math.floor(Math.random() * 255) + ", 0.5)";     
        console.log   
        return color;
    };

    filterByDiscipline(discipline) {
        const matters = [];

        for (let index = 0; index < this.#size; index++) {
            let current = this.#table[index];

            if (current.value.matter_cursor.toUpperCase() === discipline.toUpperCase() && !matters.includes(current.value.matter_name))
                matters.push(current.value.matter_name);

            while (current.next != null) {
                current = current.next;

                if (current.value.matter_cursor.toUpperCase() === discipline.toUpperCase() && !matters.includes(current.value.matter_name))
                    matters.push(current.value.matter_name);
            };
        };

        return matters;
    };

    get({ matters, years, discipline, information }) {
        const dataInformtions = [];

        for (let matter of matters) {
            const index = this.hashing(matter);
            let current = this.#table[index];

            if (compare(current.value.matter_name, matter, current.value.matter_year, current.value.matter_cursor)) {
                dataInformtions.push(current.value);

            } else {
                while (current.next !== null) {
                    current = current.next;

                    if (compare(current.value.matter_name, matter, current.value.matter_year, current.value.matter_cursor)) {
                        dataInformtions.push(current.value);
                    }
                }
            }
        }

        const datasets = [];
        const mattersDatasets = [];
        for (const value of dataInformtions) {
            const { matter_name } = value;
            let yearPosition = null, matterPosition = null;

            if (mattersDatasets.includes(matter_name)) {
                matterPosition = mattersDatasets.indexOf(matter_name);
                yearPosition = years.indexOf(value.matter_year);

                datasets[matterPosition].data[yearPosition] = value[information];

            } else {
                const color = this.randomColors();
                mattersDatasets.push(matter_name);
                datasets.push({
                    label: matter_name,
                    data: new Array(years.length).fill(0, 0, years.length),
                    backgroundColor: color,
                    borderColor: color,
                    tension: 0.1
                });

                yearPosition = years.indexOf(value.matter_year);
                matterPosition = matters.indexOf(matter_name);

                datasets[matterPosition].data[yearPosition] = value[information];
            }
        }

        const data = {
            labels: years,
            datasets,
        };

        const title =  `Gráfico sobre ${informaion_relations[information]} dos anos ${years.join(", ")}`;

        return {
            data, 
            title
        };

        function compare(matter, mattername, year, cursor) {
            return matter.toUpperCase() === mattername.toUpperCase() && years.includes(year) && cursor.toUpperCase() === discipline.toUpperCase();
        };
    }
};

const hashMap = new HashMap();

// Inserting all data in the hashmap
for (const data of indices) hashMap.insert(data.matter_name, data);

// print hashmap data
// hashMap.print();

// search by specify matter
// const searchOptions = {
//     matterName: "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES I",
//     year: 2019,
//     information: "matter_students_active"
// };

// const searchMatter = hashMap.searchOne(searchOptions);
// console.log(searchMatter);

// search by multiples matters
// const searchManyOptions = {
//     mattersNames: ["BANCO DE DADOS I", "BANCO DE DADOS II"],
//     years: [2020, 2019, 2018],
//     informations: ["matter_students_active", "matter_fs"]
// };

// const searchManyMatters = hashMap.searchMany(searchManyOptions);

/**
 * Compare one information between two matters
 */

// const compareOptions = {
//     matters: ["ALGORITMOS E PROGRAMACAO DE COMPUTADORES II"],
//     years: [2020, 2019],
//     information: "matter_fs",
//     discipline: "Bacharelado em Sistemas de Informacao".toUpperCase()
// };


// const result = hashMap.get(compareOptions);
// console.table(result.data.datasets);

module.exports = hashMap;