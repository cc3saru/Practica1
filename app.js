const lista = document.getElementById("lista-dinamica");
const arrayItem = [
    { nombre: "item 1", descripcion: "descripción 1" },
    { nombre: "item 2", descripcion: "descripción 2" },
    { nombre: "item 3", descripcion: "descripción 3" },
];

const fragment = document.createDocumentFragment();
const template = document.querySelector("template");

arrayItem.forEach((item) => {
    template.content.querySelector("b").textContent = item.nombre;
    template.content.querySelector("span").textContent = item.descripcion;
    const clone = document.importNode(template.content, true);
    fragment.appendChild(clone);
});

lista.appendChild(fragment);