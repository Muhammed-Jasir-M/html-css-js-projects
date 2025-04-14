function btnClick(val){
    document.getElementById('screen').value += val
}
function clearBtn(){
    document.getElementById('screen').value = ""
}
function equalBtn(){
    document.getElementById('screen').value = eval(document.getElementById('screen').value)
}
function delBtn(){
    var result = document.getElementById('screen').value.slice(0,-1)
    document.getElementById('screen').value = result
}
