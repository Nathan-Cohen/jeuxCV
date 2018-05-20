var ennemisIniatialisation = function(){

    fleche = 0;
    
    imageBranche = new Image();
    imageBranche.src = "image/branche.png";
    
    imgCollision = new Image();
    imgCollision.src = "image/collision.png";
    
    imgBird = new Image();
    imgBird.src = "image/bird_attaque.png";
    
    imgBird2 = new Image();
    imgBird2.src = "image/bird2.png";
    
    imgBird3 = new Image();
    imgBird3.src = "image/bird3.png";
    
    objetBird = {
        tailleHautBird: 20,
        tailleBasBird: 70,
        tailleGaucheBird: 100,
        tailleDroiteBird: 90,
        croixBird : 'croixBird',
        tirDansBird: true,
        compteurExplosion: 0,
        animationEnnemiHorizontal: 700,
        compteurAnimationEnnemiBouche: 0,
        positionLeftInitiale: 100,
        //function aleatoire pour definir le temp d'apparition d'un oiseau ennemi
        entierAleatoire: function (min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    objetBird2 = {
        tailleHautBird2: 30,
        tailleBasBird2: 75,
        tailleGaucheBird2: 70,
        tailleDroiteBird2: 90,
        croixBird2 : 'croixBird2',
        tirDansBird2: true,        
        animationEnnemiHorizontalBird2: 700,
        animationEnnemiAileBird2: 0,
        imgBird2: "image/bird2.png",
        imgBird2AileBas: "image/bird2ailesbas.png",
        sourceBird2: imgBird2,
        positionLeftInitialeBird2: 0,        
        //function aleatoire pour definir le temp d'apparition d'un oiseau ennemi
        entierAleatoire: function (min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }

    objetBird3 = {
        tailleHautBird3: 20,
        tailleBasBird3: 100,
        tailleGaucheBird3: 90,
        tailleDroiteBird3: 90,
        croixBird3 : 'croixBird3',
        tirDansBird3: true,                
        animationEnnemiHorizontalBird3: 700,
        animationEnnemiAileBird3: 0,
        imgBird3: "image/bird3.png",
        imgBird3AileBas: "image/bird3ailesbas.png",
        sourceBird3: imgBird3,
        positionLeftInitialeBird3: 0,
        //function aleatoire pour definir le temp d'apparition d'un oiseau ennemi
        entierAleatoire: function (min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    tempApparition = objetBird.entierAleatoire(70, 101);
    apparitionTopEnnemi = objetBird.entierAleatoire(40, 351);

    tempApparitionBird2 = objetBird2.entierAleatoire(101, 401);
    apparitionTopEnnemiBird2 = objetBird2.entierAleatoire(10, 401);

    tempApparitionBird3 = objetBird3.entierAleatoire(101, 401);
    apparitionTopEnnemiBird3 = objetBird3.entierAleatoire(10, 401);

    //bird corbeau
    // envoie les parametres dans la fonction pour animer l'oiseau ennemi    
    bird = new construireAnimationCorbeau(tempApparition, objetBird.animationEnnemiHorizontal, objetBird.compteurAnimationEnnemiBouche);
    
    //bird2 marron
    // envoie les parametres dans la fonction pour animer l'oiseau ennemi
    bird2 = new ConstruireAnimationBird(tempApparitionBird2, objetBird2.animationEnnemiHorizontalBird2, objetBird2.animationEnnemiAileBird2, objetBird2.imgBird2, objetBird2.imgBird2AileBas, objetBird2.sourceBird2);
    
    //bird3 jaune
    // envoie les parametres dans la fonction pour animer l'oiseau ennemi
    bird3 = new ConstruireAnimationBird(tempApparitionBird3, objetBird3.animationEnnemiHorizontalBird3, objetBird3.animationEnnemiAileBird3, objetBird3.imgBird3, objetBird3.imgBird3AileBas, objetBird3.sourceBird3);
}



var dessinEnnemi = function(){
    //affiche la branche
       //sauvegarde le contexte d'avant pour en creer un nouveau sur la branche
       ctx.save();
       ctx.shadowOffsetX = 1;
       ctx.shadowOffsetY = 1;
       ctx.shadowColor = '#FF0000';
       ctx.shadowBlur = 5;
       branche = ctx.drawImage(imageBranche, positionInitialedeux, 20, 400, 500);
       ctx.restore();
       //collision de la branche
       ColisionBranche();
    
    //si aucune collision a eu lieux tirDansBird est egal true et dessine l'image
    if(objetBird.tirDansBird){
        //bird corbeau
        //sauvegarde le contexte d'avant pour en creer un nouveau sur le corbeau
       ctx.save();
       ctx.shadowOffsetX = 1;
       ctx.shadowOffsetY = 1;
       ctx.shadowColor = '#FF0000';
       ctx.shadowBlur = 5;
        ctx.drawImage(imgBird, objetBird.positionLeftInitiale, 0, 100, 100, bird.pxHorizontal, apparitionTopEnnemi, 130, 120);
        ctx.restore();
        ColisionBird(apparitionTopEnnemi, personnage.pixelLeft, bird.pxHorizontal, objetBird.tailleHautBird, objetBird.tailleBasBird, objetBird.tailleDroiteBird, objetBird.tailleGaucheBird);
        //execute la function d'animation a chaque passage de dessinEnnemi dans le setInterval      
        bird.funcAnimationCorbeau();
    }

    //si aucune collision a eu lieux tirDansBird2 est egal true et dessine l'imag    
    if(objetBird2.tirDansBird2){
        // bird2 marron
        //sauvegarde le contexte d'avant pour en creer un nouveau sur bird2
       ctx.save();
       ctx.shadowOffsetX = 1;
       ctx.shadowOffsetY = 1;
       ctx.shadowColor = '#FF0000';
       ctx.shadowBlur = 5;
        ctx.drawImage(imgBird2, objetBird2.positionLeftInitialeBird2, 0, 700, 700, bird2.anime, apparitionTopEnnemiBird2, 100, 100); 
        ctx.restore();
        ColisionBird(apparitionTopEnnemiBird2, personnage.pixelLeft, bird2.anime, objetBird2.tailleHautBird2, objetBird2.tailleBasBird2, objetBird2.tailleDroiteBird2, objetBird2.tailleGaucheBird2);
        //execute la function d'animation a chaque passage de dessinEnnemi dans le setInterval 
        bird2.funcAnimation();

    }
    
    //si aucune collision a eu lieux tirDansBird3 est egal true et dessine l'image       
    if(objetBird3.tirDansBird3){
     // bird3 jaune
     //sauvegarde le contexte d'avant pour en creer un nouveau sur bird3
     ctx.save();
     ctx.shadowOffsetX = 1;
     ctx.shadowOffsetY = 1;
     ctx.shadowColor = '#FF0000';
     ctx.shadowBlur = 5;
    ctx.drawImage(imgBird3, objetBird3.positionLeftInitialeBird3, 0, 600, 600, bird3.anime, apparitionTopEnnemiBird3, 140, 140);
    ctx.restore(); 
    ColisionBird(apparitionTopEnnemiBird3, personnage.pixelLeft, bird3.anime, objetBird3.tailleHautBird3, objetBird3.tailleBasBird3, objetBird3.tailleDroiteBird3, objetBird3.tailleGaucheBird3);
    //execute la function d'animation a chaque passage de dessinEnnemi dans le setInterval 
    bird3.funcAnimation();

    }
     
    requestAnimationFrame(dessinEnnemi);
    
    }

                        ////////////////ANIMATION DU SPRITE//////////////
var ConstruireAnimationBird = function(montempApparition, monanimationEnnemiHorizontal, monAnimationEnnemiAile, imgbird, imgbirdailebas, source){
    this.img = imgbird;
    this.imgailebas = imgbirdailebas;
    this.imgsource = source;
    this.temp = montempApparition;
    this.anime = monanimationEnnemiHorizontal;
    this.aile = monAnimationEnnemiAile;
    this.funcAnimation = function(){
        // console.log(this.anime);
// bird2 
this.temp--;
//si le temp d'apparition est inferieur a 0 on affiche l'oiseau ennemis et on lui retire 6 a chaque passage pour le decaler ver la gauche
if(this.temp < 0){
    //enleve -6 au compteur de droite a gauche
     this.anime =  this.anime - 6;
    this.aile++;
        if(this.aile > 20){
            this.aile = 0;
        }else if(this.aile > 10){
            this.imgsource.src = this.img;
        }else{
            this.imgsource.src = this.imgailebas;//probleme de source            
        }
    }

    //si l'animationEnnemi est inferieur a -54 (pour disparaitre de l'ecran) on ajoute un nouveau temp d'apparition au prochain oiseau ennemi et on remet l'animation au droite (750px)
    if( this.anime <-54){
        this.temp = objetBird.entierAleatoire(251, 600);
         this.anime = 750;            
    }

    }

    
}                  
                        
                        
                        
                        ////////////////ANIMATION DU SPRITE//////////////
var construireAnimationCorbeau = function(montempApparition, monanimationEnnemiHorizontal, monanimationEnnemiBouche){
    this.temp = montempApparition;
    this.pxHorizontal = monanimationEnnemiHorizontal;
    this.compteurAnimation = monanimationEnnemiBouche;
    this.funcAnimationCorbeau = function(){
        // bird1
        this.temp--;
        //si le temp d'apparition est inferieur a 0 on affiche l'oiseau ennemis et on lui retire 6 a chaque passage pour le decaler ver la gauche
        if(this.temp < 0){
            //enleve -6 au compteur de droite a gauche
            this.pxHorizontal = this.pxHorizontal - 6;

                //animer l'oiseau ennemi
                if(this.compteurAnimation > 25){
                    objetBird.positionLeftInitiale = 100;
                }
                else if(this.compteurAnimation > 20){
                    objetBird.positionLeftInitiale = 200;
                }
                else if(this.compteurAnimation > 15){
                    objetBird.positionLeftInitiale = 300;
                }
                else if(this.temp > 7){
                    objetBird.positionLeftInitiale = 400;
                }
                else {
                    objetBird.positionLeftInitiale = 500;
                }

                this.compteurAnimation++;

                if(this.compteurAnimation > 30){
                    this.compteurAnimation = 0;
                }
                //si l'animationEnnemi est inferieur a -54 (pour disparaitre de l'ecran) on ajoute un nouveau temp d'apparition au prochain oiseau ennemi et on remet l'animation au droite (750px)
                if(this.pxHorizontal <-54){
                    this.temp = objetBird.entierAleatoire(251, 600);
                    this.pxHorizontal = 750;            
                }
        }

    }
                
}


        /////////////////////////////COLISION DE LA BRANCHE//////////////////////////////
var ColisionBranche = function(){
            /*
            si le top est superieur a 100px et la position de la branche moin la taille de la branche moin le nombre de marge a gauche de l'oiseau doit etre inferieur ou egal a 10 et la position initiale est plus grandre que 100 OU si le top est superieur a 100px et la position de la branche moin la taille de la branche moin le nombre de marge a gauche de l'oiseau est egal a 0 et la position initiale est plus petite que 100
            */        
                if(personnage.pixelTop > 100 && (positionInitialedeux + 71) - personnage.pixelLeft <= 10 && positionInitialedeux > 100 || personnage.pixelTop > 100 && (positionInitialedeux + 51) - personnage.pixelLeft === 0 && positionInitialedeux < 100){
                    // console.log("boom");
                    objetBird.compteurExplosion++;
                    //stop le defilement et les points
                    vitesse = 0;
                    point = 0;
                    //supprimer l'image de l'oiseau
                    imgPerso.src = "";
                    
                    if(objetBird.compteurExplosion < 5){
                        //dessine l'image de l'explosion 1
                        ctx.drawImage(imgCollision, 0, 300, 250, 300, personnage.pixelLeft -30, personnage.pixelTop-35, 200, 150);
                        
                    }else if (objetBird.compteurExplosion < 9){
                        //dessine l'image de l'explosion 2
                        ctx.drawImage(imgCollision, 170, 300, 300, 300, personnage.pixelLeft -30, personnage.pixelTop-35, 200, 150);
                        
                    }else if (objetBird.compteurExplosion > 9){
                        //dessine l'image de l'explosion 3
                        ctx.drawImage(imgCollision, 450, 300, 300, 300, personnage.pixelLeft -30, personnage.pixelTop-35, 200, 150);
                        
                    }        
                    //arrete l'ecoute des touche
                    window.clearInterval(fleche);
                    
                }
        
        
            }   


            /////////////////////////////COLISION DES OISEAUX ENNEMIE//////////////////////////////  
function ColisionBird (apparitionTopEnnemi, pixelLeft, animationEnnemiHorizontal, tailleHaut, tailleBas, tailleDroite, tailleGauche){
             //top minimum et maximum pour la collision et la position de l'animation est plus grande que la position (pixelLeft) du perso moins sa taille et la position de l'animation est plus petite que la position (pixelLeft) du perso pluss sa taille
    if (apparitionTopEnnemi - tailleHaut < personnage.pixelTop && apparitionTopEnnemi + tailleBas > personnage.pixelTop && animationEnnemiHorizontal > pixelLeft - tailleDroite && animationEnnemiHorizontal < pixelLeft + tailleGauche){
    objetBird.compteurExplosion++;
     tempApparition = "annule le compteur d'oiseau ennemie";
     tempApparitionBird2 = "annule le compteur d'oiseau ennemie";
     tempApparitionBird3 = "annule le compteur d'oiseau ennemie";
     //stop le defilement et les points
     vitesse = 0;
     point = 0;
     //supprimer l'image de l'oiseau
     imgPerso.src = "";
     
     //image de la collision avec le perso et l'oiseau ennemis
     if(objetBird.compteurExplosion < 5){
         //dessine l'image de l'explosion 1
         ctx.drawImage(imgCollision, 0, 300, 250, 300, pixelLeft -30, personnage.pixelTop-35, 200, 150);
         
     }else if (objetBird.compteurExplosion < 9){
         //dessine l'image de l'explosion 2
         ctx.drawImage(imgCollision, 170, 300, 300, 300, pixelLeft -30, personnage.pixelTop-35, 200, 150);
         
     }else if (objetBird.compteurExplosion > 9){
         //dessine l'image de l'explosion 3
         ctx.drawImage(imgCollision, 450, 300, 300, 300, pixelLeft -30, personnage.pixelTop-35, 200, 150);
         
     }
     //arrete l'ecoute des touche
     window.clearInterval(fleche);
 }
}