// monscript.js
const p = document.getElementByClassName('mon-paragraph')
// Attention document.getElementByClassName peut retourner null si
// aucun élément ne correspond
const t = document.getElementByClassName('existe-pas') // null

// Il suffit d'utiliser une condition afin de s'assurer que l'élément
// est bien présent :
if (t) {
  // J'ai un élément !
} else {
  // L'élément n'existe pas dans la page !
}

// Il est aussi possible de récupérer une liste d'éléments (array)
const paragraphs = document.getElementsByClassName('mon-paragraph')