//initialisation du document
var fondInitialisation = function(){
    positionInitiale = 0;
    positionInitialedeux = 900;
    vitesse = 3;
    compteurDePoint = 0;
    point = 1;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    img = new Image();
    img.src = "image/fond.png";
    ctx.drawImage(img, positionInitiale, 0);
    ctx.drawImage(img, positionInitialedeux, 0);
    
}
////////////DESSIN DES IMAGES/////////////
var dessinImage = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    positionInitiale = ScrollImage(img, positionInitiale, vitesse);
    positionInitialedeux = ScrollImage(img, positionInitialedeux, vitesse);
    
requestAnimationFrame(dessinImage);
    
}
                    ////////////////FONCTION CONSTRUCTEUR/////////////////
var ScrollImage = function(img, positionScrollX, vitesse) {
    //compteur et affiche score
    compteurDePoint = compteurDePoint + point;
    document.getElementById('score').innerHTML = "Score : " + compteurDePoint;
    //decale l'image grace a "vitesse"
    positionScrollX -= vitesse;
    //si la position est plus petite que la taille de l'image
    if (positionScrollX < -img.width) {
     positionScrollX = img.width - vitesse;
    }
    ctx.drawImage(img, positionScrollX, 0);
    return positionScrollX;
    
   }
   
