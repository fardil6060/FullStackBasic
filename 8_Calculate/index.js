let num1 = document.getElementById("numberinput1")
let num2 = document.getElementById("numberinput2")

let result = document.getElementById("result")

function sumNum(){
    let ans =Number(num1.value)+Number(num2.value)
    result.textContent = "= " +ans
}

function subtractNum(){
    let ans= Number(num1.value)-Number(num2.value)
    result.textContent = "= " +ans
}

function multiplyNum(){
    let ans = Number(num1.value)*Number(num2.value)
    result.textContent = "= " + ans
}

function divideNum(){
    let ans = Number(num1.value)/Number(num2.value)
    result.textContent = "= "+ ans
}