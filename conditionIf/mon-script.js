const age = 24

// Création d'une condition
if (age >= 50) {
  // Ici, tout ce qui se trouve dans ce block est ignoré
  // parce-que la condition n'est pas remplie
  console.log('Je suis senior')
} else if (age >= 18) {
  // ici c'est le bon block de code car la condition est remplie
  console.log('Je suis majeur')
} else {
  // ici le sinon n'est pas remplie, c'est toujours le premier qui gagne.
  console.log('Je suis mineur')
}


const classe = '6eme'

// Je demande à lancer des instructions en fonction de ce que
// contient la variable class
switch (classe) {
  // Dans le cas ou la variable contient 6eme :
  case '6eme':
    console.log('Je suis en 6eme, ro le débutant ...')
    // Le break permet de sortir du switch, si nous l'omettons
    // ça continue et du coup le cas par défaut sera aussi lancé !
    break

  case '5eme':
    console.log('Je suis en 5eme, ça ce complique')
    break

  case '4eme':
    console.log('Je suis en 4eme, ça devient sérieux')
    break

  default:
    console.log('me voici en 3eme, bientôt le lycée')
}


const isMajor = age >= 18 ? true : false

console.log(isMajor)
