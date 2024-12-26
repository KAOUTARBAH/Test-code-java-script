// Je séléctionne le premier élement correspondant à
// mon sélécteur css : la class mon-paragraph
const p = document.querySelector('.mon-paragraph')
console.log(p);
// Il exsiste la possibilité de récupérer TOUT les éléments
// correspondant à une sélécteur en utilisant :
// Ici on récupére une liste (array) de tout les paragraphes
const allParagraph = document.querySelectorAll('p')
console.log( allParagraph);