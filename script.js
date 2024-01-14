 let btn = document.getElementById("btn");
 
 function changeTxt(){
    btn.innerHTML = "Ooops";
    btn.style.color = "red";

 }


 document.getElementById("btn").addEventListener("click", changeTxt)