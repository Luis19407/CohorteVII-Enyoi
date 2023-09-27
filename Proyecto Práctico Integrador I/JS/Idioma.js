var check=document.querySelector(".check");
check.addEventListener("click",idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="../Español/Es_Luis Londoño.html";
    }else{
        location.href="../Proyecto Práctico Integrador I/Luis Londoño.html";
    }
}

