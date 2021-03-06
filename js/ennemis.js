var ennemisIniatialisation = function(){

    fleche = 0;
    
    imageBranche = new Image();
    imageBranche.src = "image/branche.png";
    
    imgCollision = new Image();
    imgCollision.src = "image/collision.png";
    
    imgBird = new Image();
    imgBird.src = "image/bird_attaque.png";
    
    imgBird2 = new Image();
    imgBird2.src = "image/collagebird2.png";
    
    imgBird3 = new Image();
    imgBird3.src = "image/collagebird3.png";

    imgBoss = new Image();
    imgBoss.src = "image/flappyDragon/collageBirdBoss.png";

    objetBranche = {
        tailleHautBranche: 100,
        tailleBasBranche: 70,
        tailleGaucheBranche: 71,
        tailleDroiteBranche: -100
    }
    
    objetBird = {
        tailleHautBird: 20,
        tailleBasBird: 90,
        tailleGaucheBird: 100,
        tailleDroiteBird: 90,
        croixBird : 'croixBird',
        tirDansBird: true,
        compteurExplosion: 0,
        animationEnnemiHorizontal: tailleEcran,
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
        animationEnnemiHorizontalBird2: tailleEcran,
        animationEnnemiAileBird2: 0,
        positionLeftInitialeBird2: 0, 
        positionLeftAileBasBird2: 520, 
        vitesse: 6,      
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
        animationEnnemiHorizontalBird3: tailleEcran,
        animationEnnemiAileBird3: 0,
        positionLeftInitialeBird3: 0,
        positionLeftAileBasBird3: 580,         
        vitesse: 6,              
        //function aleatoire pour definir le temp d'apparition d'un oiseau ennemi
        entierAleatoire: function (min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }


    boss = {
        tailleHautBirdBoss: 0,
        tailleBasBirdBoss: 150,
        tailleGaucheBirdBoss: 90,
        tailleDroiteBirdBoss: 90,
        tailleWidth: 450,
        tailleHeight: 300,
        animationEnnemiHorizontalBoss: tailleEcran + 2000,
        animationEnnemiAileBoss: 0,
        tirDansBirdBoss: true,                        
        tirDeuxDansBirdBoss: 500,                        
        active: false,
        positionLeftInitialeBirdBoss: 0,
        positionLeftAileBasBirdBoss: 480, 
        vitesse: 10,              
        //function aleatoire pour definir le temp d'apparition d'un oiseau ennemi
        entierAleatoire: function (min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    //met animationCountDownActive a true pour activer l'animation 3 2 1
    animationCountDownActive = true;

    
    CompteurAnimationLose = 0;

    tempApparition = objetBird.entierAleatoire(70, 101);
    apparitionTopEnnemi = objetBird.entierAleatoire(40, 351);

    tempApparitionBird2 = objetBird2.entierAleatoire(101, 401);
    apparitionTopEnnemiBird2 = objetBird2.entierAleatoire(10, 401);

    tempApparitionBird3 = objetBird3.entierAleatoire(101, 401);
    apparitionTopEnnemiBird3 = objetBird3.entierAleatoire(10, 401);

    tempApparitionBoss = boss.entierAleatoire(70, 101);
    apparitionTopEnnemiBoss = boss.entierAleatoire(10, 351);


    //bird corbeau
    // envoie les parametres dans la fonction pour animer l'oiseau ennemi    
    bird = new construireAnimationCorbeau(tempApparition, objetBird.animationEnnemiHorizontal, objetBird.compteurAnimationEnnemiBouche);
    
    //bird2 marron
    // envoie les parametres dans la fonction pour animer l'oiseau ennemi
    bird2 = new ConstruireAnimationBird(tempApparitionBird2, objetBird2.animationEnnemiHorizontalBird2, objetBird2.animationEnnemiAileBird2, objetBird2.vitesse, objetBird2.positionLeftInitialeBird2, objetBird2.positionLeftAileBasBird2);
    
    //bird3 jaune
    // envoie les parametres dans la fonction pour animer l'oiseau ennemi
    bird3 = new ConstruireAnimationBird(tempApparitionBird3, objetBird3.animationEnnemiHorizontalBird3, objetBird3.animationEnnemiAileBird3, objetBird3.vitesse, objetBird3.positionLeftInitialeBird3, objetBird3.positionLeftAileBasBird3);
       
    //bird Boss
    // envoie les parametres dans la fonction pour animer l'oiseau ennemi    
    birdBoss = new ConstruireAnimationBird(tempApparitionBoss, boss.animationEnnemiHorizontalBoss, boss.animationEnnemiAileBoss, boss.vitesse, boss.positionLeftInitialeBirdBoss, boss.positionLeftAileBasBirdBoss, apparitionTopEnnemiBoss);
    
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
        ctx.drawImage(imgBird, objetBird.positionLeftInitiale, 0, 100, 80, bird.pxHorizontal, apparitionTopEnnemi, 130, 120);
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
        ctx.drawImage(imgBird2, bird2.leftSprite, 0, 500, 500, bird2.anime, apparitionTopEnnemiBird2, 150, 150); 
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
    ctx.drawImage(imgBird3, bird3.leftSprite, 0, 500, 500, bird3.anime, apparitionTopEnnemiBird3, 180, 180);
    ctx.restore(); 
    ColisionBird(apparitionTopEnnemiBird3, personnage.pixelLeft, bird3.anime, objetBird3.tailleHautBird3, objetBird3.tailleBasBird3, objetBird3.tailleDroiteBird3, objetBird3.tailleGaucheBird3);
    //execute la function d'animation a chaque passage de dessinEnnemi dans le setInterval 
    bird3.funcAnimation();
    

    }

    if(boss.active){
        if(boss.tirDansBirdBoss){
            ctx.drawImage(imgBoss, birdBoss.leftSprite, 0, boss.tailleWidth, boss.tailleHeight, birdBoss.anime, birdBoss.randomTopBoss, 200, 200);
            // vitesse = 3;
                ColisionBird(birdBoss.randomTopBoss, personnage.pixelLeft, birdBoss.anime, boss.tailleHautBirdBoss, boss.tailleBasBirdBoss, boss.tailleDroiteBirdBoss, boss.tailleGaucheBirdBoss);
                birdBoss.funcAnimation();
            
        }
    }
     
    dessineLesEnnemis = requestAnimationFrame(dessinEnnemi);
    
}

//affiche 3 2 1 Boss si tout les oiseau ennemis sont tuer
var animationCountDown = function(){
    var countDownDate = "3";
    if(animationCountDownActive){
        var x = setInterval(function() {
            var result = countDownDate--;
            document.getElementById("countDown").innerHTML = result;
            if (result === 0) {
                document.getElementById("countDown").innerHTML = "Boss !!";
            }
            if (result < 0) {
                clearInterval(x);
                document.getElementById("countDown").innerHTML = "";
            }
        }, 1000);

    }
}


                        ////////////////ANIMATION DU SPRITE//////////////
var ConstruireAnimationBird = function(montempApparition, monanimationEnnemiHorizontal, monAnimationEnnemiAile, vitesse, leftInitialeSpriteBird, positionLeftAileBasBird2, topBoss){
    this.anime = monanimationEnnemiHorizontal;
    this.aile = monAnimationEnnemiAile;
    this.temp = montempApparition;
    this.vitesse = vitesse;
    this.leftSprite = leftInitialeSpriteBird;
    this.leftAileBasSprite = positionLeftAileBasBird2;
    this.randomTopBoss = topBoss;
    this.funcAnimation = function(){
// reduit le temp d'apparition
this.temp--;
//si le temp d'apparition est inferieur a 0 on affiche l'oiseau ennemis et on lui retire 6 a chaque passage pour le decaler ver la gauche
if(this.temp < 0){
    //enleve les px au compteur de droite a gauche
     this.anime =  this.anime - this.vitesse;
    this.aile++;
    if(this.aile > 20){
            this.aile = 0;
        }else if(this.aile > 10){
            this.leftSprite = this.leftAileBasSprite;
        }else{
            this.leftSprite = 0;
                    
        }
    }

    //si l'animationEnnemi est inferieur a -54 (pour disparaitre de l'ecran) on ajoute un nouveau temp d'apparition au prochain oiseau ennemi et on remet l'animation a droite (750px)
    if( this.anime <-54){
        this.temp = objetBird.entierAleatoire(251, 600);
        this.randomTopBoss = boss.entierAleatoire(0, 351);
         this.anime = tailleEcran;            
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
                    this.pxHorizontal = tailleEcran;            
                }
        }

    }
                
}


        /////////////////////////////COLISION DE LA BRANCHE//////////////////////////////
var ColisionBranche = function(){
                if(personnage.pixelTop > objetBranche.tailleHautBranche && (positionInitialedeux + objetBranche.tailleGaucheBranche) - personnage.pixelLeft <= 10 && objetBranche.tailleDroiteBranche < (positionInitialedeux + objetBranche.tailleGaucheBranche) - personnage.pixelLeft && positionInitialedeux > 100 || personnage.pixelTop > objetBranche.tailleHautBranche && (positionInitialedeux + objetBranche.tailleGaucheBranche) - personnage.pixelLeft <= 10 && objetBranche.tailleDroiteBranche < (positionInitialedeux + objetBranche.tailleGaucheBranche) - personnage.pixelLeft && positionInitialedeux < 100){
                    // son
                    sonCollision.play();
                    
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

                    //attent 1000 avant d'afficher "you lose"
                    setTimeout(function(){
                        sonCollision.src = 'son/Silence.mp3';                                   
                        cancelAnimationFrame(dessineLesEnnemis);                                  
                        //affiche la div lose
                        var lose = document.getElementById('lose');
                        lose.style.display = "block";
                        //animation pour l'affichage de l'image lose
                        if(CompteurAnimationLose < 10){
                            CompteurAnimationLose = CompteurAnimationLose + 0.10;
                            lose.style.opacity = CompteurAnimationLose;
                        }
                        //affiche le boutton restart
                        var restart = document.getElementById('restart');
                        restart.style.display = "block";
                    }, 1000);
                    
                    
                }
        
        
            }   


            /////////////////////////////COLISION DES OISEAUX ENNEMIE//////////////////////////////  
function ColisionBird (apparitionTopEnnemi, pixelLeft, animationEnnemiHorizontal, tailleHaut, tailleBas, tailleDroite, tailleGauche){
    if (apparitionTopEnnemi - tailleHaut < personnage.pixelTop && apparitionTopEnnemi + tailleBas > personnage.pixelTop && animationEnnemiHorizontal > pixelLeft - tailleDroite && animationEnnemiHorizontal < pixelLeft + tailleGauche){
    // son
    sonCollision.play();

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
     //attent 1000 avant d'afficher "you lose"
     setTimeout(function(){
        sonCollision.src = 'son/Silence.mp3';      
        cancelAnimationFrame(dessineLesEnnemis);              
        //affiche la div lose
        var lose = document.getElementById('lose');
        lose.style.display = "block";
        //animation pour l'affichage de l'image lose
        if(CompteurAnimationLose < 10){
            CompteurAnimationLose = CompteurAnimationLose + 0.10;
            lose.style.opacity = CompteurAnimationLose;
        }
        //affiche le boutton restart
        var restart = document.getElementById('restart');
        restart.style.display = "block";
    }, 1000);
 }
}