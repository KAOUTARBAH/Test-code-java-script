/**
Avec la constante suivante :
*/
const notes = [12, 8, 9, 17, 6, 13, 20, 8];

/*
Créer une fonction nommé calculerMoyenne recevant un paramètre : un tableaux de number

Dans cette fonction utiliser la boucle de votre choix afin de calculer la moyenne,
La fonction doit retourner la moyenne.

Pour la calcule de moyenne :

addition de toutes les notes entre elles / par le nombre de notes
*/

/*
Utiliser console.log pour afficher la moyenne des notes
*/
total = 0;
function calculerMoyenne(notes) {
  for (let note of notes) {
    //console.log(note);
    total = total + note;
  }
  return total / (notes.length - 1 + 1);
  //notes.length - 1
}
//console.log(total);
const result = calculerMoyenne(notes);
console.log(result);

function calculerMoyenne2(notes) {
  let total = notes.reduce((acc, note) => acc + note, 0);

  return total / notes.length;
}
console.log(calculerMoyenne2(notes));

/*
Créer une constante `notesAugmentees` contenant le tableaux de notes ou chaque
note à augmenter d'1 points ! (attention, la note ne peut pas dépasser 20)

Il vous faudra utiliser `map`
*/

const notesAugmentees = notes.map((note) => {
  if (note + 1 > 20) {
    //return 20;
    return note;
  } else {
    return note + 1;
  }
});
console.log(notes);
console.log(notesAugmentees);

const notesAugmentees2 = notes.map((note) => Math.min(note + 1, 20));
console.log(notesAugmentees2);
/*
Utiliser console.log pour afficher les notesAugmentees
*/

/*
Créer une constante `notesFiltrees` contenant les notes du premier exercice uniquement au dessus de la moyenne 10

Il vous faudra utiliser `filter`
*/

/*
Utiliser console.log pour afficher les notesFiltrees
*/

const notesFiltrees = notes.filter((note) => note >= 10);
console.log(notesFiltrees);
