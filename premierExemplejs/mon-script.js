// mon-script.js
console.log('coucou')
console.log('Coucou les amis')
console.log("J'ai 19 ans")
console.log(`Je suis aussi du texte`)
console.log(`
kaoutar
bahlouli`)

console.log('Coucou' + ' les amis') // 'Coucou les amis'
console.log('Coucou' + 'les amis') // "Coucou les amis"
console.log('Coucou' + ' ' + 'les amis') // 'Coucou les amis'

//array
console.log([10, 12, 9, 20])
console.log(['coucou', true, 123, 'les amis'])
console.log(['salut', true, 125454, 'les amis'])

console.log([10, 12, 9, 20][1])
console.log(['coucou', true, 123, 'les amis'][3])
console.log(['salut', true, 125454, 'les amis'][8])

console.log([10, 12, 9, 20].length)

console.log(
{
    nom: 'Dupont',
    prenom: 'Jean',
    age: 25,
    notes: [12, 8, 10, 8]
  }
)

console.log(
    {
        nom: 'Dupont',
        prenom: 'Jean',
        age: 25,
        notes: [12, 8, 10, 8]
      }.nom
    )

    console.log(
        {
            nom: 'Dupont',
            "prénom": 'Jean',
            age: 25,
            notes: [12, 8, 10, 8]
          }['prénom']
        )