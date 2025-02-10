var result = document.getElementById("result");
var codes = document.getElementById("codes");
var jems = document.getElementById("jems");
var divin = document.getElementById("divin");
divin.onclick = ()=> {
    result.innerHTML = codes.value;
    localStorage.setItem("Result" , codes.value);
}
jems.onclick = ()=> {
    localStorage.clear();
}
onload = ()=> {
    // codes.value = localStorage.getItem("Result");
}