let result = 0, holderNum = 0, holderOp = "None"


//GET FIELD VALUE
function getInputValue() {
    const elem = document.getElementById("input")
    if(holderOp === "+"){
        elem.value = holderNum + Number(elem.value)
        holderNum = 0
        holderOp = "None"
    }
    if(holderOp === "-"){
        elem.value = holderNum - Number(elem.value)
        holderNum = 0
        holderOp = "None"
    }
    if(holderOp === "*"){
        elem.value = holderNum * Number(elem.value)
        holderNum = 0
        holderOp = "None"
    }
    if(holderOp === "/"){
        elem.value = holderNum / Number(elem.value)
        holderNum = 0
        holderOp = "None"
    }
}


//FIELD VALUE SET
function setInputValue(a) {
    const elem = document.getElementById("input")
    elem.value += Number(a)
}


//DELETE ONE
function clearOne() {
    const elem = document.getElementById("input")
    elem.value = Number(String(elem.value).slice(0, -1))
    if(elem.value == 0) {
        elem.value = ""
    }
}

//DELETE ALL
function clearAll() {
    const elem = document.getElementById("input")
    elem.value = ""
}

//MATH
function add(){
    const elem = document.getElementById("input")
    if(holderOp != "None"){
        getInputValue()
    }
    if(elem.value){
        holderNum = Number(elem.value)
        holderOp = "+"
        elem.value = ""
    }
}
function subtract(){
    const elem = document.getElementById("input")
    if(holderOp != "None"){
        getInputValue()
    }
    if(elem.value){
    holderNum = Number(elem.value)
    holderOp = "-"
    elem.value = ""
    }
}
function multiply(){
    const elem = document.getElementById("input")
    if(holderOp != "None"){
        getInputValue()
    }
    if(elem.value){
    holderNum = Number(elem.value)
    holderOp = "*"
    elem.value = ""
    }
}
function divide(){
    const elem = document.getElementById("input")
    if(holderOp != "None"){
        getInputValue()
    }
    if(elem.value){
    holderNum = Number(elem.value)
    holderOp = "/"
    elem.value = ""
    }
}






