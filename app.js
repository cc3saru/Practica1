const resultado = document.getElementById("resultado");
const btnAgregar = document.querySelector(".btn-info");
const btnDisminuir = document.querySelector(".btn-danger");
let contador = 0;

btnAgregar.addEventListener("click", () => {
    console.log("diste click");
    contador++;
    pintarContador();
});

btnDisminuir.addEventListener("click", () => {
    console.log("diste click");
    contador--;
    pintarContador();
});

pintarContador = () => {
    resultado.textContent = contador;
};