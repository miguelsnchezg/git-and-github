let btn = document.getElementById("btn");
btn.addEventListener("click", saludo);

function saludo() {
    document.getElementById("saludo").innerHTML = "Bienvenidos a Git and GitHub <br/> Les desea Miguel Sanchez";
}