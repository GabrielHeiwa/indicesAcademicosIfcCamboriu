(self.webpackChunkIndices_Academicos=self.webpackChunkIndices_Academicos||[]).push([[179],{484:(t,e,a)=>{const r=a(75),n={matter_fs:"FS",matter_fi:"FI",matter_total:"Reprovação total",matter_24_and_00:"Notas de 2.4 a 0",matter_49_and_25:"Notas de 2.5 a 4.9",matter_74_and_50:"Notas de 5.0 a 7.4",matter_10_and_75:"Notas de 7.5 a 10.0",matter_approveds:"Aprovados",matter_students_active:"Número de aluno"},s=new class{#t=29;#e=new Array(29);#a=[];#r=[];hashing(t){let e,a=0,r=this.#t;for(let n=0;n<t.length;n++)e=t[n],a=(a<<5)+e.charCodeAt(0),a=(a&a)%r;return a}insert(t,e){let a=this.hashing(t);this.#a.includes(e.matter_cursor)||this.#a.push(e.matter_cursor),this.#r.includes(e.matter_year)||this.#r.push(e.matter_year);for(const[t,a]of Object.entries(e))a<0&&(e[t]=0);if(void 0!==this.#e[a]){let t=this.#e[a];if(t.value.matter_name===e.matter_name&&t.value.matter_year===e.matter_year&&t.value.matter_cursor===e.matter_cursor){let r=t.value.matter_students_active+e.matter_students_active;const n=t.value.matter_fs*t.value.matter_students_active,s=e.matter_fs*e.matter_students_active;t.value.matter_fs=(n+s)/r;const l=t.value.matter_fi*t.value.matter_students_active,o=e.matter_fi*e.matter_students_active;t.value.matter_fi=(l+o)/r;const c=t.value.matter_total*t.value.matter_students_active,u=e.matter_total*e.matter_students_active;t.value.matter_total=(c+u)/r;const _=t.value.matter_10_and_75*t.value.matter_students_active,i=e.matter_10_and_75*e.matter_students_active;t.value.matter_10_and_75=(_+i)/r;const m=t.value.matter_74_and_50*t.value.matter_students_active,d=e.matter_74_and_50*e.matter_students_active;t.value.matter_74_and_50=(m+d)/r;const v=t.value.matter_49_and_25*t.value.matter_students_active,p=e.matter_49_and_25*e.matter_students_active;t.value.matter_49_and_25=(v+p)/r;const f=t.value.matter_24_and_00*t.value.matter_students_active,h=e.matter_24_and_00*e.matter_students_active;t.value.matter_24_and_00=(f+h)/r;const y=t.value.matter_approveds*t.value.matter_students_active,g=e.matter_approveds*e.matter_students_active;return t.value.matter_approveds=(y+g)/r,t.value.matter_students_active=r,void(this.#e[a]=t)}{let t=this.#e[a];for(;null!=t.next;){if(t.value.matter_name===e.matter_name&&t.value.matter_year===e.matter_year&&t.value.matter_cursor===e.matter_cursor){let a=t.value.matter_students_active+e.matter_students_active;const r=t.value.matter_fs*t.value.matter_students_active,n=e.matter_fs*e.matter_students_active;t.value.matter_fs=(r+n)/a;const s=t.value.matter_fi*t.value.matter_students_active,l=e.matter_fi*e.matter_students_active;t.value.matter_fi=(s+l)/a;const o=t.value.matter_total*t.value.matter_students_active,c=e.matter_total*e.matter_students_active;t.value.matter_total=(o+c)/a;const u=t.value.matter_10_and_75*t.value.matter_students_active,_=e.matter_10_and_75*e.matter_students_active;t.value.matter_10_and_75=(u+_)/a;const i=t.value.matter_74_and_50*t.value.matter_students_active,m=e.matter_74_and_50*e.matter_students_active;t.value.matter_74_and_50=(i+m)/a;const d=t.value.matter_49_and_25*t.value.matter_students_active,v=e.matter_49_and_25*e.matter_students_active;t.value.matter_49_and_25=(d+v)/a;const p=t.value.matter_24_and_00*t.value.matter_students_active,f=e.matter_24_and_00*e.matter_students_active;t.value.matter_24_and_00=(p+f)/a;const h=t.value.matter_approveds*t.value.matter_students_active,y=e.matter_approveds*e.matter_students_active;return t.value.matter_approveds=(h+y)/a,void(t.value.matter_students_active=a)}t=t.next}if(t.value.matter_name===e.matter_name&&t.value.matter_year===e.matter_year&&t.value.matter_cursor===e.matter_cursor){let a=t.value.matter_students_active+e.matter_students_active;const r=t.value.matter_fs*t.value.matter_students_active,n=e.matter_fs*e.matter_students_active;t.value.matter_fs=(r+n)/a;const s=t.value.matter_fi*t.value.matter_students_active,l=e.matter_fi*e.matter_students_active;t.value.matter_fi=(s+l)/a;const o=t.value.matter_total*t.value.matter_students_active,c=e.matter_total*e.matter_students_active;t.value.matter_total=(o+c)/a;const u=t.value.matter_10_and_75*t.value.matter_students_active,_=e.matter_10_and_75*e.matter_students_active;t.value.matter_10_and_75=(u+_)/a;const i=t.value.matter_74_and_50*t.value.matter_students_active,m=e.matter_74_and_50*e.matter_students_active;t.value.matter_74_and_50=(i+m)/a;const d=t.value.matter_49_and_25*t.value.matter_students_active,v=e.matter_49_and_25*e.matter_students_active;t.value.matter_49_and_25=(d+v)/a;const p=t.value.matter_24_and_00*t.value.matter_students_active,f=e.matter_24_and_00*e.matter_students_active;t.value.matter_24_and_00=(p+f)/a;const h=t.value.matter_approveds*t.value.matter_students_active,y=e.matter_approveds*e.matter_students_active;return t.value.matter_approveds=(h+y)/a,void(t.value.matter_students_active=a)}return void(t.next={value:e,next:null})}}this.#e[a]={value:e,next:null}}print(){let t=0;for(;t<this.#t;t++){let e=[],a=this.#e[t];for(e.push(a.value);null!=a.next;)a=a.next,e.push(a.value);console.table(e,["matter_name"])}}getMattersNames(){const t=[];for(let e=0;e<this.#t;e++){let a=this.#e[e];for(t.push(a.value.matter_name);null!=a.next;)a=a.next,t.push(a.value.matter_name)}return t}getDisciplines(){return this.#a}getYears(){return this.#r}randomColors(){let t="rgba(";for(let e=0;e<2;e++)t+=Math.floor(255*Math.random())+",";return t+=Math.floor(255*Math.random())+", 0.5)",console.log,t}filterByDiscipline(t){const e=[];for(let a=0;a<this.#t;a++){let r=this.#e[a];for(r.value.matter_cursor.toUpperCase()!==t.toUpperCase()||e.includes(r.value.matter_name)||e.push(r.value.matter_name);null!=r.next;)r=r.next,r.value.matter_cursor.toUpperCase()!==t.toUpperCase()||e.includes(r.value.matter_name)||e.push(r.value.matter_name)}return e}get({matters:t,years:e,discipline:a,information:r}){const s=[];for(let e of t){const t=this.hashing(e);let a=this.#e[t];if(c(a.value.matter_name,e,a.value.matter_year,a.value.matter_cursor))s.push(a.value);else for(;null!==a.next;)a=a.next,c(a.value.matter_name,e,a.value.matter_year,a.value.matter_cursor)&&s.push(a.value)}const l=[],o=[];for(const a of s){const{matter_name:n}=a;let s=null,c=null;if(o.includes(n))c=o.indexOf(n),s=e.indexOf(a.matter_year),l[c].data[s]=a[r];else{const u=this.randomColors();o.push(n),l.push({label:n,data:new Array(e.length).fill(0,0,e.length),backgroundColor:u,borderColor:u,tension:.1}),s=e.indexOf(a.matter_year),c=t.indexOf(n),l[c].data[s]=a[r]}}return{data:{labels:e,datasets:l},title:`Gráfico sobre ${n[r]} dos anos ${e.join(", ")}`};function c(t,r,n,s){return t.toUpperCase()===r.toUpperCase()&&e.includes(n)&&s.toUpperCase()===a.toUpperCase()}}};for(const t of r)s.insert(t.matter_name,t);t.exports=s},550:(t,e,a)=>{const r=a(484),{loadMattersInSelect:n,divSelectedMatters:s,mattersSelected:l}=a(633),o=document.querySelector(".select-cursor"),c=document.querySelector(".select-options"),u=document.querySelector(".select-cursor input");for(const t of r.getDisciplines()){const e=document.createElement("p");e.textContent=t.toUpperCase(),e.addEventListener("click",(()=>{u.value=e.textContent,c.classList.add("sr-only");const t=r.filterByDiscipline(e.textContent);n(t),window.scrollTo(0,document.getElementById("stage-2").scrollHeight),s.innerHTML="",l.length=0})),e.className="p-2 font-mono transition delay-50 hover:text-black hover:bg-green-300 hover:text-lg cursor-pointer",c.appendChild(e)}u.value="Selecione uma disciplina",o.addEventListener("click",(t=>{c.classList.toggle("sr-only")})),t.exports={inputSelectDiscipline:u}},633:t=>{const e=document.querySelector(".select-matters"),a=document.querySelector(".div-selected-matter"),r=document.querySelector(".go-stage-3"),n=[];function s(t){n.includes(t)?n.splice(n.indexOf(t),1):n.push(t),a.innerHTML="";for(const t of n){const e=document.createElement("div");e.className="flex items-center justify-between w-auto mr-2 my-2";const r=document.createElement("p");r.textContent=t,r.className="text-black text-lg font-mono mr-2";const n=document.createElement("button");n.textContent="X",n.className="w-8 h-8 bg-red-500 hover:bg-red-700 text-white p-1 rounded",n.addEventListener("click",(()=>s(t))),e.appendChild(r),e.appendChild(n),a.appendChild(e)}}document.querySelector("p.clear-matters-selected").addEventListener("click",(function(){n.length=0,a.innerHTML=""}));const l=document.querySelector(".select-matter input");l.addEventListener("keyup",function(t,e){let a;return function(...e){a&&clearTimeout(a),a=setTimeout((()=>{t.apply(this,e)}),500)}}((function(){const t=e.children,a=l.value.toLowerCase();for(const e of t)e.textContent.toLowerCase().includes(a)?e.style.display="block":e.style.display="none"}))),r.addEventListener("click",(()=>{if(0===n.length)alert("Selecione pelo menos uma matéria");else{const t=document.querySelector(".stage-3");window.scrollTo(t.offsetLeft,t.offsetTop)}})),t.exports={mattersSelected:n,divSelectedMatters:a,loadMattersInSelect:function(t){e.innerHTML="";for(const a of t.sort()){const t=document.createElement("p");t.textContent=a,t.className="p-2 transition delay-50 hover:bg-green-200 hover:text-black hover:text-lg font-mono cursor-pointer",e.appendChild(t),t.addEventListener("click",(()=>s(a)))}}}},103:t=>{const e=document.querySelector(".select-options-information"),a=document.querySelector(".select-information input");a.value="Selecione uma informação",a.addEventListener("click",(()=>{e.classList.toggle("sr-only")})),[{key:"FS",value:"matter_fs"},{key:"FI",value:"matter_fi"},{key:"Reprovação total",value:"matter_total"},{key:"Notas de 2.4 a 0",value:"matter_24_and_00"},{key:"Notas de 2.5 a 4.9",value:"matter_49_and_25"},{key:"Notas de 5.0 a 7.4",value:"matter_74_and_50"},{key:"Notas de 7.5 a 10.0",value:"matter_10_and_75"},{key:"Aprovados",value:"matter_approveds"},{key:"Número de aluno",value:"matter_students_active"}].forEach(((t,r,n)=>{const s=document.createElement("p");s.textContent=t.key,s.className="p-2 transition delay-50 text-black hover:text-black hover:text-lg hover:bg-green-300 cursor-pointer",e.appendChild(s),s.addEventListener("click",(()=>function(t,r){a.value=r,e.classList.toggle("sr-only"),a.setAttribute("data-value",t);const n=document.querySelector(".stage-4");window.scrollTo(n.offsetLeft,n.offsetTop)}(t.value,t.key)))})),document.querySelector(".go-stage-4").addEventListener("click",(()=>{"Selecione uma informação"===a.value&&alert("Selecione uma informação")})),t.exports={inputInformation:a}},520:(t,e,a)=>{const r=a(484);document.querySelector(".select-years input").value="Selecione os dados de quais anos deseja comparar";const n=document.querySelector(".select-options-years"),s=document.querySelector(".selected-years"),l=[];for(const t of r.getYears().sort()){const e=document.createElement("p");e.textContent=t,e.className="p-2 transition delay-50 hover:text-lg hover:text-black hover:bg-green-300",n.appendChild(e),e.addEventListener("click",(()=>o(t)))}function o(t){l.includes(t)?l.splice(l.indexOf(t),1):l.push(t),s.innerHTML="";for(const t of l){const e=document.createElement("div");e.className="flex items-center justify-between pr-2 w-auto";const a=document.createElement("p");a.textContent=t,a.className="text-black pr-2";const r=document.createElement("button");r.textContent="X",r.className="w-8 h-8 bg-red-500 hover:bg-red-700 text-white p-1 rounded",r.addEventListener("click",(()=>o(matter))),e.appendChild(a),e.appendChild(r),s.appendChild(e)}}t.exports={yearsSelected:l}},478:(t,e,a)=>{const{mattersSelected:r}=a(633),{inputInformation:n}=a(103),{inputSelectDiscipline:s}=a(550),{yearsSelected:l}=a(520),{chart:o}=a(137),c=a(484),u=document.querySelector(".btn-generate-chart"),_=document.querySelector(".title-chart");u.addEventListener("click",(()=>{const t=s.value,e={matters:r,years:l.sort(),information:n.getAttribute("data-value"),discipline:t},a=c.get(e);o.data=a.data,_.textContent=a.title,o.update()}))},137:(t,e,a)=>{const r=a(484),{inputSelectDiscipline:n}=a(550),{loadMattersInSelect:s}=a(633);let l=document.getElementById("chart"),o=new Chart(l,{type:"line",data:{labels:[],datasets:[{label:"",data:[]}]},options:{plugins:{legend:{position:"bottom",align:"start"}},scale:{min:0,max:100}}});window.onload=()=>{const t=n.value,e=r.filterByDiscipline(t);s(e),window.scrollTo(0,0)},t.exports={chart:o}}},t=>{var e=e=>t(t.s=e);e(484),e(550),e(633),e(103),e(520),e(478),e(137)}]);