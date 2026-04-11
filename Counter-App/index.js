let count = 0;
let countEl = document.getElementById("count_el");
function increment(){
    count = count+1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}