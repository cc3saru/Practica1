// const lista = document.getElementById("lista-dinamica");

// // Creamos el <li>
// const li = document.createElement("li");

// // Agregamos texto al <li>
// li.textContent = "Mi <li> dinámico";

// // Finalmente incorporamos al <ul>
// lista.appendChild(li);

// const lista = document.getElementById("lista-dinamica");

// const arrayItem = ["item 1", "item 2", "item 3"];

// arrayItem.forEach((item) => {
//   const li = document.createElement("li");
//   li.textContent = item;
//   lista.appendChild(li);
// });

const lista = document.getElementById("lista-dinamica");

const arrayItem = ["item 1", "item 2", "item 3"];

arrayItem.forEach((item) => {
  lista.innerHTML += `
            <li>${item}</li>
          `;
});