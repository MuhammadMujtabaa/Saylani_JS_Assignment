function getNumber(num) {
    var res = document.getElementById('result');
    res.value +=num
}
function less() {
    var res = document.getElementById('result');
    res.value = res.value.slice(0,-1);
}
function clea() {
    var res = document.getElementById('result');
    res.value="";
}
function calcu(){
    var res = document.getElementById('result');
    res.value= eval(result.value);
}