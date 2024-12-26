// Séléctionner le bouton "Ajouter une tache"
const button = document.querySelector("button.add");
//const button = document.querySelector('button')

console.log("button : "+ button);
// Ajout d'une fonction (événement) lors du clique
button.addEventListener("click", () => {
  console.log("on a cliqué sur le button")
  // Récupération de l'input
  const input = document.querySelector("input.task");
  // Récupération de ce que contient l'input
  const value = input.value;

  // Je créer un élément li
  const li = document.createElement("li");

  // Je créer le bouton supprimer
  const btn = document.createElement("button");

  // On ajoute un événement lors click sur supprimer
  btn.addEventListener("click", () => li.remove());

  // On ajoute un « text » dans le bouton
  btn.innerText = "Supprimer";

  // On ajoute du contenu text à li
  li.innerText = value;

  // On ajoute le bouton au li
  li.append(btn);

  // Récupération de la liste ul
  const ul = document.querySelector("ul.list");

  // On ajoute le li à l'intérieur
  ul.prepend(li);
});
