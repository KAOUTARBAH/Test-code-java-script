/*
Exercice 1

À l'aide des fonctions vue cette arpès midi,
changer le contenu text de la balise h1
par "Bienvenue"
*/

// On récupére la balise h1 de notre page
const h = document.querySelector('h1')

console.log(h.innerText) // Affiche le text à l'intérieur du paragraph

// Change le contenue textuel
h.innerText = 'Bienvenue'


/*
Exercice 2

Ajouter la class css "super-titre"
à la balise h1
*/
h.classList.add('super-titre')

/*
Exercice 3

Créer une balise p avec le contenue text
suivant "Comment allez-vous ?".



Ajouter cette balise p à la suite de la balise h1
(dans la balise body)
*/

const p = document.createElement('p');
p.innerText = 'Comment allez-vous ?';
//h.append(p);
//h.prepend(p);
h.insertAdjacentElement("afterend",p);

/*
Exercice 4

Créer une balise img avec l'attribut
src suivant : https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lMmoCJ4KmcG7hN3nsIEz3AAAAA%26pid%3DApi&f=1

Ajouter cette balise image entre la h1 et la balise p
*/

const img = document.createElement('img')

// On ajoute un attribut src
img.setAttribute('src', ' https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lMmoCJ4KmcG7hN3nsIEz3AAAAA%26pid%3DApi&f=1')

//h.append(img)
p.insertAdjacentElement('beforebegin', img) // Juste avant
//h.insertAdjacentElement("afterend", img);