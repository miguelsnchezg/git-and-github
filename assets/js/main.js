let btn = document.getElementById("btn");
btn.addEventListener("click", saludo);

function saludo() {
    document.getElementById("saludo").innerHTML = "Una cordial bienvenida a Git and GitHub <br/> les desea Miguel Sanchez";
}