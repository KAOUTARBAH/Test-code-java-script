var nom = 'Dupont' // Non, ici on utilise var
let prenom = 'Jean' // Préféré
const age = 23 // Le plus souvent

//age = 56 // Erreur ! J'ai une constante elle ne peux pas changer
prenom = 'Gerome' // Ça passe, je n'ai pas de constante
console.log(prenom)

// Plein de ligne de codes ....

nom + ' ' + prenom // "Dupont Jean"
console.log(nom + ' ' + prenom )
14 + age // 37

const notes = [12, 9, 17, 20]

// Plus tard dans le code ...
notes.length // 4
notes[2] // 17
notes[3] // 20
notes[notes.length - 1] // 20

console.log(notes[3])
console.log(notes[notes.length - 1] )

const eleve = {
  nom: 'Dupont',
  prenom: 'Jean',
  age: 32,
  notes: [12, 8, 16, 14],
  profPrincipal: {
    nom: 'Dupont',
    prenom: 'Jeanne',
    age: 52,
  },
}

// Plus tard dans le code

eleve.nom + ' ' + eleve.prenom // 'Dupont Jean'
eleve.notes[3] // 14
eleve.notes[eleve.notes.length - 1] // 14

eleve.profPrincipal.age // 52



const nomComplet = nom + ' ' + prenom // concatenation
const nomComplet2 = `${nom} ${prenom}` // interpolation !



console.log('Bonjour ' + nom + ' ' + prenom + ', vous avez ' + age + ' ans')

console.log(`Bonjour ${nom} ${prenom}, vous aves ${age} ans`) // interpolation