/**
Exercice 1

Gérer les controlles de la bare de droite

Commencer par déclarer les variables suivantes :

let rightBarUp = false
let rightBarDown = false

Grace au événements "keyup" et "keydown" sur le document faire en sorte de : 
- lors de l'appuie sur la touche "ArrowUp" changer la variable rightBarUp à true et lors
de son relachement la changer à false
- Lors de l'appuie sur la touche "ArrowDown" changer la variable rightBarDown à true et
lors de son relachement le changer à false
*/

let rightBarControl = { up: "ArrowUp", down: "ArrowDown" };
let leftBarControl = { up: "z", down: "s" };
let rightBarUp = false;
let rightBarDown = false;
let leftBarUp = false;
let leftBarDown = false;
let rightBarSpeed = 2;
let leftBarSpeed = 2;
let ballUp = true;
let ballRight = false;
let ballSpeed = 4;

//Gérer les controlles de la bare de gauche
document.addEventListener("keydown", (event) => {
    if (event.key === rightBarControl.up) {
      rightBarUp = true;
    }
  
    if (event.key === rightBarControl.down) {
      rightBarDown = true;
    }
  
    if (event.key === leftBarControl.up) {
      leftBarUp = true;
    }
  
    if (event.key === leftBarControl.down) {
      leftBarDown = true;
    }
  });
  
  document.addEventListener("keyup", (event) => {
    if (event.key === rightBarControl.up) {
      rightBarUp = false;
    }
  
    if (event.key === rightBarControl.down) {
      rightBarDown = false;
    }
  
    if (event.key === leftBarControl.up) {
      leftBarUp = false;
    }
  
    if (event.key === leftBarControl.down) {
      leftBarDown = false;
    }
  });


  //Mettre en place une GameLoop (boucle de jeux)

  function gameLoop() {
    // On appel la fonction permettant de bouger la barre de droite
    moveBar(
      document.querySelector(".bar.right"),
      rightBarUp,
      rightBarDown,
      rightBarSpeed
    );
  
    // On appel la fonction permettant de bouger la barre de gauche
    moveBar(
      document.querySelector(".bar.left"),
      leftBarUp,
      leftBarDown,
      leftBarSpeed
    );

    // on bouge la balle
    moveBall();
    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);

/**
 * Fonction permettant de bouger la barre
 */
function moveBar(bar, up = false, down = false, speed = 2) {
    // La position horizontal (top) de la barre de droite
    const y = bar.offsetTop;
    // La hauteur de mon écran
    const screenHeight = document.documentElement.clientHeight;
    // La hauteur de ma barre
    const barHeight = bar.clientHeight;
    // Ma position mininum
    const min = 0;
    // Ma position maximum
    const max = screenHeight - barHeight;
  
    // Si la barre doit allez vers le haut
    if (up) {
      // Changer la position de la barre vertica
      bar.style.top = Math.max(y - speed, min) + "px";
    }
  
    // Si la barre doit allez vers le bas
    if (down) {
      // Changer le position de la barre vertical
      bar.style.top = Math.min(y + speed, max) + "px";
    }
  }

  /*
Fonction permettant de bouger le balle
*/
function moveBall() {
    // On récupére la balle
    const ball = document.querySelector(".ball");
    // On récupére la positition vertical de la balle
    const y = ball.offsetTop;
    // On récupére la position horizontal de la balle
    const x = ball.offsetLeft;
    console.log(x, y);
    // On récupére la hauteur de l'écran
    const screenHeight = document.documentElement.clientHeight;
    // On récupére la largeur de l'écran
    const screenWidth = document.documentElement.clientWidth;
    // La largeur de la balle
    const ballWidth = ball.clientWidth;
    // La hauteur de la balle
    const ballHeight = ball.clientHeight;
    // Position vertical minimum
    const minY = 0;
    // Position vertical maximum
    const maxY = screenHeight - ballHeight;
    // Position horizontal minimum
    const minX = 0;
    // Position horizontal maximum
    const maxX = screenWidth - ballWidth;
  
    if (isColliding(ball, document.querySelector(".bar.left"))) {
      ballRight = true;
    }
  
    if (isColliding(ball, document.querySelector(".bar.right"))) {
      ballRight = false;
    }
  
    // Si ma balle va vers le haut
    if (ballUp) {
      // On diminue sa position y
      ball.style.top = Math.max(minY, y - ballSpeed) + "px";
  
      // Si ma balle touche le mur en haut
      if (ball.offsetTop === minY) {
        ballUp = false;
      }
    } else {
      // Si ma balle va vers le bas
      // On augment sa position y
      ball.style.top = Math.min(maxY, y + ballSpeed) + "px";
  
      // Si ma balle touche le mur en base
      if (ball.offsetTop === maxY) {
        ballUp = true;
      }
    }
  
    // Si ma balle va vers la droite
    if (ballRight) {
      // On augmente sa position x (left)
      ball.style.left = Math.min(maxX, x + ballSpeed) + "px";
  
      // Si ma balle toucbe le mur à droite :
      if (ball.offsetLeft === maxX) {
        ballRight = false;
      }
    } else {
      // Si ma balle va vers la gauche
      // On diminue sa position x (left)
      ball.style.left = Math.max(minX, x - ballSpeed) + "px";
  
      // Si ma balle touche le mur de gauche
      if (ball.offsetLeft === minX) {
        ballRight = true;
      }
    }
  }
  
  /**
 * Fonction permettant de tester si une bar et une balle sont en collision.
 *
 * Cette fonction renvoie faux si ce n'est pas le cas et vrai si c'est le cas
 */
function isColliding(ball, bar) {
    // La position x et y de la balle
    const ballX = ball.offsetLeft;
    const ballY = ball.offsetTop;
    const maxBallX = ball.offsetLeft + ball.clientWidth;
    const maxBallY = ball.offsetTop + ball.clientHeight;
  
    // La position x et y de la bar
    const barX = bar.offsetLeft;
    const barY = bar.offsetTop;
    const maxBarX = bar.offsetLeft + bar.clientWidth;
    const maxBarY = bar.offsetTop + bar.clientHeight;
  
    // Si la position x de la balle est entre la position x de la barre et la position x maximum
    // de la barre
    if (ballX > maxBarX || maxBallX < barX) {
      return false;
    }
  
    if (ballY > maxBarY || maxBallY < barY) {
      return false;
    }
  
    return true;
  }

/**
Exercice 2

Gérer les controlles de la bare de gauche

Commencer par déclarer les variables suivantes :

let leftBarUp = false
let leftBarDown = false

Grace au événements "keyup" et "keydown" sur le document : 
- lors de l'appuie sur la touche "z" changer la variable leftBarUp à true et lors
de son relachement la changer à false
- Lors de l'appuie sur la touche "s" changer la variable leftBarDown à true et
lors de son relachement le changer à false
*/

/**
Exercice 3

Mettre en place une GameLoop (boucle de jeux)

Créer une fonction "gameLoop" et placer à l'intérieur :

console.log(rightBarUp, rightBarDown);
console.log(leftBarUp, leftBarDown);

Documentez-vous sur la fonction "requestAnimationFrame" et
faire en sorte que la fonction "gameLoop" se lance
undéfiniment !

Indice : Cette fonction permet de créer une boucle infinie
nous permettant de gérer un jeux videos !
*/

/*
Exercice 4

Bouger la bare de droite !

Créer une fonction "moveRightBar" et réalisez le code
suivant :

- Récupérer la div avec les class ".bar.right"
- Obtenez sa position vertical avec "element.offsetTop" (pixel)
- Obtenez sa taille en hauteur avec "element.clientHeight" (pixel)
- Obtenez la hauteur de l'écran avec "document.documentElement.clientHeight" (pixel)
- Si la variable "rightBarUp" est vrai, déplacer la bar vers le haut
  en calculant sa nouvelle position (attention la bar ne doit pas
  sortir de l'écran). Vous pouvez utiliser `element.style.top = 'XXXpx'` pour assigner
  sa nouvelle position !
- Si la variable "rightBarDown" est vrai, déplacer la bar vers le bas
  en calculant sa nouvelle position (attention la bar ne doit pas
  sortir de l'écran). Vous pouvez utiliser `element.style.top = 'XXXpx'`
- Lancer la fonction "moveRightBar" à l'intérieur de la fonction "gameLoop" :)
*/
const rightBar = document.querySelector('.bar.left');

// hauteur en pixel
rightBar.clientHeight

// Position vertical de la barre sur l'écran
rightBar.offsetTop;

// Changement de la position vertical
rightBar.style.top = '10px';

/*
Exercice 5

Bouger la bare de gauche !

Créer une fonction "moveLeftBar" et réalisez le code
suivant :

- Récupérer la div avec les class ".bar.left"
- Obtenez sa position vertical avec "element.offsetTop" (pixel)
- Obtenez sa taille en hauteur avec "element.clientHeight" (pixel)
- Obtenez la hauteur de l'écran avec "document.documentElement.clientHeight" (pixel)
- Si la variable "leftBarUp" est vrai, déplacer la bar vers le haut
  en calculant sa nouvelle position (attention la bar ne doit pas
  sortir de l'écran). Vous pouvez utiliser `element.style.top = 'XXXpx'`
- Si la variable "leftBarDown" est vrai, déplacer la bar vers le bas
  en calculant sa nouvelle position (attention la bar ne doit pas
  sortir de l'écran). Vous pouvez utiliser `element.style.top = 'XXXpx'`
- Lancer la fonction "moveLeftBar" à l'intérieur de la fonction "gameLoop" :)
*/

/*
Exercice 6

Bouger la balle !

Créer une fonction "moveBall", placé le code
de déplacement de la balle à l'intérieur (la balle rebondit sur
les murs et les barres) :)

Lancer cette fonction dans la fonction "gameLoop" :)
*/