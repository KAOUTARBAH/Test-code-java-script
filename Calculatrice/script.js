/*
Exercice de la calculatrice
*/

/*
En utilisant des fonctions compilé, créer 4 fonctions accéptant 2 paramètre (x, y) :

- additionner : Additionne les 2 paramètres
- soustraire : Soustrait les 2 paramètres
- diviser : Divise les 2 paramètres
- multiplier : multiplie les 2 paramètres
*/
function additionner(x, y) {
  return x + y;
}

function soustraire(x, y) {
  return x - y;
}

function diviser(x, y) {
  return x / y;
}

function multiplier(x, y) {
  return x * y;
}

/*
En utilisant console.log et les fonctions plus haut, afficher le résultat des calcules
suivant :

10 + 5
11 - 4
65 / 2
20 * 10

11 * 2 - 10
64 - (54 * 2) + 10
*/
console.log(additionner(10, 5));
console.log(soustraire(11, 4));
console.log(diviser(11, 4));
console.log(multiplier(20, 10));

console.log(soustraire(multiplier(11, 2), 10));
console.log(additionner(soustraire(multiplier(54, 2), 64), 10));

/*
En utilisant des fonctions fléché (le plus contracté possible) accéptant 2 paramètre x et y, créer
les fonctions suivante :

- add : Additionne les 2 paramètres
- sub : Soustrait les 2 paramètres
- div : Divise les 2 paramètres
- mul : Multiple les 2 paramètres
*/
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const div = (x, y) => x / y;
const mul = (x, y) => x * y;

/*
En utilisant console.log et les fonctions fléché plus hait, afficher le résultat des calcules
suivant :

10 + 5
11 - 4
65 / 2
20 * 10

11 * 2 - 10
64 - (54 * 2) + 10
*/
console.log(add(10, 5));
console.log(sub(11, 4));
console.log(div(11, 4));
console.log(mul(20, 10));

console.log(sub(mul(11, 2), 10));
console.log(add(sub(mul(54, 2), 64), 10));
