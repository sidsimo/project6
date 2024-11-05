var result = document.getElementById("result");
var codes = document.getElementById("codes");
var btn = document.getElementById("btn");
var btnx = document.getElementById("btnx");
btnx.onclick = ()=> {
    result.innerHTML = codes.value;
    localStorage.setItem("Result" , codes.value);
}
btn.onclick = ()=> {
    result.innerHTML = "";
    localStorage.clear();
}