var result = document.getElementById("result");
var codes = document.getElementById("codes");
var jems = document.getElementById("jems");
var divin = document.getElementById("divin");
divin.onclick = ()=> {
    // result.style.display = "block";
    // result.style.height = "auto";
    // result.style.width = "auto";
    result.innerHTML = codes.value;
    localStorage.setItem("Result" , codes.value);
}
jems.onclick = ()=> {
    // result.style.display = "none";
    result.innerHTML = "";
    localStorage.clear();
}
onload = ()=> {
    codes.value = localStorage.getItem("Result");
}