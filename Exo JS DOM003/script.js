/**
Exercice 1

Afficher la position de la souris

Lorsque je bouge la souris dans la div avec la class ".jeux"
alors je dois afficher dans le paragraph avec la class ".position"
les coordonnées de la souris (ex: x: XXX, y: XXX).

Pour cette exercice vous pouvez utiliser l'événement "mousemove".

Pour récupérer les coordonnées de la souris vous pouver utiliser
l'objet Event de la manière suivante :

event.offsetX (coordonnée horizontal)
event.offsetY (coordonnée vertical)
*/

// je sélectionne ma div avec la class .jeux
const div = document.querySelector("div.jeux");

// On ajoute l'événement "mousemove" sur la div
div.addEventListener("mousemove", (event) => {
  // Je récupére le paragraph "position"
  const p = document.querySelector("p.position");

  //je change le text du paragraph 
  p.innerText = `x: ${event.offsetX}, y: ${event.offsetY}`;

});


/*
Exercice 2

Changer la couleur de fond !.

Lors du clique sur la div avec la class ".jeux",
changer la couleur de fond en choisisant une couleur aléatoire
parmis les couleurs suivantes :

#95F2D9
#1CFEBA
#B8CDF8
#C1B6F6

Pour changer le style d'un élément vous pouvez utiliser : element.style.backgroundColor = '#FDKHF2';

Pour générer un nombre aléatoire entre "min" et "max" vous pouvez utiliser l'instruction suivante :

Math.floor(Math.random() * (max - min + 1) + min);

Il y a des liste (tableaux !)
*/
const colors = ['#95F2D9','#1CFEBA','#B8CDF8','#C1B6F6'];

// On attache un événement lors du clique 
div.addEventListener("click", () =>{
  // On initialise le minium et la maximum
  min = 0;
  max = colors.length - 1 ;
  // On génére le nombre aléatoire
  const number = Math.floor(Math.random() * (max - min + 1) + min);
   // On séléctionne une couleur aléatoire
   const newColor = colors[number];
   // On change la couleur de fond
  div.style.backgroundColor = newColor;
  console.log(newColor)

});

/*
Exercice 3

Lorsque j'appuie sur une touche de mon clavier alors la touche doit 
s'afficher dans la paragraph avec la class ".key".

Lorsque je relache une touche de mon clavier alors le paragraph
".key" doit se vider.

Vous aurez besoin d'attacher les événements suivant sur le document lui même !

"keydown" (appuie d'une touche)
"keyup" (relachement d'une touche)

Vous pouvez aussi utiliser l'objet Event de la manière suivante :

event.key (retourne la touche appuyée)
*/
// document.addEventListener

// Je séléctionne le paragraph avec la class .key
const keyP = document.querySelector(".key");

document.addEventListener("keydown", (event) => {
  event.preventDefault();

  keyP.innerText = event.key;
});

document.addEventListener("keyup", () => {
  keyP.innerText = "";
});