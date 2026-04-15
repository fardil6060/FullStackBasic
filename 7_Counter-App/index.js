let count = 0;
let saveEL = document.getElementById("save-el");
let countEl = document.getElementById("count_el");
function increment(){
    count += 1;
    countEl.textContent = count;
}

function save() {
    let counting = count + " - ";
    saveEL.textContent += counting;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}