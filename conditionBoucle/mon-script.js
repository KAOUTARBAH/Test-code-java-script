let compteur = 0

// On utilise un boucle conditionnelle « while » (tant que) :
while (compteur < 10) {
  console.log(`Le compteur est inférieur à 10 car égale à : ${compteur}`)
  compteur += 1
}

//break
while (true) {
  console.log('Je tourne en boucle ....')
    // Nous pouvons manuellement quitter une boucle en utilisant break!

  break;
}

//continue
//Il existe aussi la possibilité de « sauter » une itération de boucle en utilisant e mot clef continue :
while (compteur < 50) {
  compteur += 1

  if (compteur % 2 === 0) {
    continue
  }

  console.log(`Compteur est impair : ${compteur}`)
}


//boucle for
const notes = [12, 8, 9, 18, 17]

// Boucle sur les positions du tableaux
for (let index in notes) {
  // Ici, index prendra à chaque tour de boucle
  // la position de l’élément du tableaux
  console.log(`La note n°${index} est ${notes[index]}`)
}

// Boucle sur les valeurs du tableaux
for (let note of notes) {
  // Ici, note prendra à chaque tour de boucle
  // la valeur de l'élément du tableaux
  console.log(`Note ${note}`)
}