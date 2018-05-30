var persoInitialisation = function(){
    personnage = {
        pixelLeft: 150,
        pixelTop: 150,
        positionSpriteAileBas: 600,
        animationEnCour: false,
        animationTirEnCour: false,
        widthSource: 580,
        heightSource: 400,
        compteurRight: 0,
        compteurLeft: 0,
        compteurTop: 0,
        compteurBottom: 0,

        tirPressed: false,
        collisionBirdTirActive: false,
        collisionBird2TirActive: false,
        collisionBird3TirActive: false,
        collisionBirdBossTirActive: false,
        positionSpriteTirCollision : 0
           

    }
    
    imgPerso = new Image();
    imgPerso.src = "image/perso.png";
    
    ctx.drawImage(imgPerso, personnage.positionSpriteAileBas, 0, personnage.widthSource, personnage.heightSource, personnage.pixelLeft, personnage.pixelTop, 90, 50);
    
    
    imgCollisionTir = new Image();
    imgCollisionTir.src = "image/collision.png";
    
    imgCollisionTir2 = new Image();
    imgCollisionTir2.src = "image/collision.png";
    
    imgCollisionTir3 = new Image();
    imgCollisionTir3.src = "image/collision.png";
    
    imgCollisionTir4 = new Image();
    imgCollisionTir4.src = "image/collision.png";
    
    pixelLeftTir = personnage.pixelLeft;
    pixelTopTir = personnage.pixelTop;

    compteurExplosionTir = 0;
    compteurExplosionTirBird2 = 0;
    compteurExplosionTirBird3 = 0;
    compteurExplosionTirBirdBoss = 0;

}


var dessinPerso = function(){
    //tir
    if(personnage.tirPressed){
        ctx.drawImage(imgCollision, 0, 300, 250, 300, pixelLeftTir, pixelTopTir, 50, 50);
    }

    //collision tir avec l'oiseau 1 
    if(personnage.collisionBirdTirActive){
        ctx.drawImage(imgCollisionTir, personnage.positionSpriteTirCollision, 300, 250, 300, birdCollision.left - birdCollision.tailleDroite, birdCollision.top, 200, 150);
        
    }
    //collision tir avec l'oiseau 2
    if(personnage.collisionBird2TirActive){
    ctx.drawImage(imgCollisionTir2, personnage.positionSpriteTirCollision, 300, 250, 300, bird2Collision.left - bird2Collision.tailleDroite, bird2Collision.top, 200, 150);
    }
    //collision tir avec l'oiseau 3
    if(personnage.collisionBird3TirActive){
    ctx.drawImage(imgCollisionTir3, personnage.positionSpriteTirCollision, 300, 250, 300, bird3Collision.left - bird3Collision.tailleDroite, bird3Collision.top, 200, 150);
    }
    
    //collision tir avec l'oiseau Boss
    if(personnage.collisionBirdBossTirActive){
    ctx.drawImage(imgCollisionTir4, personnage.positionSpriteTirCollision, 300, 250, 300, birdBossCollision.left - birdBossCollision.tailleDroite, birdBossCollision.top, 200, 150);
    }


    //personnage
     //sauvegarde le contexte d'avant pour en creer un nouveau sur bird3
     ctx.save();
     ctx.shadowOffsetX = 1;
     ctx.shadowOffsetY = 1;
     ctx.shadowColor = '#84D9F4';
     ctx.shadowBlur = 10;
    ctx.drawImage(imgPerso, personnage.positionSpriteAileBas, 0, personnage.widthSource, personnage.heightSource, personnage.pixelLeft, personnage.pixelTop, 90, 50);
    ctx.restore();
    
    requestAnimationFrame(dessinPerso);
}




             ///////////////////////ANIMATION A L'APPUIE DES TOUCHES///////////////////////////
var toucheClavier = function(){
    window.addEventListener('keydown', function direction(event){
    var code = event.keyCode;
    sonQuiAvance = document.getElementById("son-qui-avance");    
    sonQuiTir = document.getElementById("son-qui-tir");    
            switch(code){
                //droite
                case 39:
                event.preventDefault();
                if(personnage.animationEnCour === false){
                        //son
                        sonQuiAvance.play();           

                        fleche = window.setInterval(function(){
                        //a chaque clique sur le touche droite on ajoute 1 au compteurRight si compteurRight est plus grand que 3 on le remet a 0 et on change la position du sprite pour afficher l'image avec des ailes en haut
                        personnage.compteurRight++;
                        if(personnage.compteurRight > 3){
                            personnage.compteurRight = 0;
                            personnage.positionSpriteAileBas = 0;
                        }else{
                            personnage.positionSpriteAileBas = 600;
                        }
                        //si la position Left est plus petit que le taille du canvas moins la taille de l'image alors on peut avancer 
                        if(personnage.pixelLeft < tailleEcran - 90){
                            personnage.pixelLeft += 3;
                            
                        }else{
                                //la position Left est plus grande donc il n'avance plus pour ne pas sortir du canvas 
                            }
                        }, 20);
                        personnage.animationEnCour = true;
                }
                break;
                //gauche
                case 37:
                event.preventDefault();
                    if(personnage.animationEnCour === false){
                        //son
                        sonQuiAvance.play(); 

                        fleche = window.setInterval(function(){
                            //a chaque clique sur le touche droite on ajoute 1 au personnage.compteurLeft si personnage.compteurLeft est plus grand que 3 on le remet a 0 et on change la position du sprite pour afficher l'image avec des ailes en haut
                            personnage.compteurLeft++;
                            if(personnage.compteurLeft > 3){
                                personnage.compteurLeft = 0;
                                personnage.positionSpriteAileBas = 0;
                            }else{
                                personnage.positionSpriteAileBas = 600;
                            }
                        //si le left est plus petit que la largeur du fond (pour empecher de sortir du cadres)
                            if(personnage.pixelLeft > 0){
                                personnage.pixelLeft -= 3;
                                ctx.drawImage(imgPerso, personnage.positionSpriteAileBas, 0, personnage.widthSource, personnage.heightSource, personnage.pixelLeft, personnage.pixelTop, 90, 50);
                            }else{
                                ctx.drawImage(imgPerso, personnage.positionSpriteAileBas, 0, personnage.widthSource, personnage.heightSource, personnage.pixelLeft, personnage.pixelTop, 90, 50);
                            }
                        }, 20);
                        personnage.animationEnCour = true;
                    }
                break;
                //haut
                case 38:
                event.preventDefault();
                    if(personnage.animationEnCour === false){
                        //son
                        sonQuiAvance.play(); 

                        fleche = window.setInterval(function(){
                            //a chaque clique sur le touche droite on ajoute 1 au personnage.compteurTop si personnage.compteurTop est plus grand que 3 on le remet a 0 et on change la position du sprite pour afficher l'image avec des ailes en haut
                            personnage.compteurTop++;
                            if(personnage.compteurTop > 3){
                                personnage.compteurTop = 0;
                                personnage.positionSpriteAileBas = 0;
                            }else{
                                personnage.positionSpriteAileBas = 600;
                            }
                            //si le top est plus petit que la taille du fond (pour empecher de sortir du cadres)  
                            if(personnage.pixelTop > 0){
                                personnage.pixelTop -= 4;
                                ctx.drawImage(imgPerso, personnage.positionSpriteAileBas, 0, personnage.widthSource, personnage.heightSource, personnage.pixelLeft, personnage.pixelTop, 90, 50);
                                
                            }else{
                                ctx.drawImage(imgPerso, personnage.positionSpriteAileBas, 0, personnage.widthSource, personnage.heightSource, personnage.pixelLeft, personnage.pixelTop, 90, 50);
                            }
                        }, 20);
                        personnage.animationEnCour = true;
                    }
                break;
                //bas
                case 40:
                event.preventDefault();                
                    if(personnage.animationEnCour === false){
                        //son
                        sonQuiAvance.play(); 

                        fleche = window.setInterval(function(){
                            //a chaque clique sur le touche droite on ajoute 1 au personnage.compteurBottom si personnage.compteurBottom est plus grand que 3 on le remet a 0 et on change la position du sprite pour afficher l'image avec des ailes en haut
                            personnage.compteurBottom++;
                            if(personnage.compteurBottom > 3){
                                personnage.compteurBottom = 0;
                                personnage.positionSpriteAileBas = 0;
                            }else{
                                personnage.positionSpriteAileBas = 600;
                            }
                            //si le top est plus petit que la taille du fond (pour empecher de sortir du cadres)
                            if(personnage.pixelTop < canvas.height - 50){
                                personnage.pixelTop += 4;
                                ctx.drawImage(imgPerso, personnage.positionSpriteAileBas, 0, personnage.widthSource, personnage.heightSource, personnage.pixelLeft, personnage.pixelTop, 90, 50);
                                
                            }else{
                                ctx.drawImage(imgPerso, personnage.positionSpriteAileBas, 0, personnage.widthSource, personnage.heightSource, personnage.pixelLeft, personnage.pixelTop, 90, 50);
                            }
                        }, 20);
                        personnage.animationEnCour = true;
                    }
                break;

                case 13:
                event.preventDefault();                                
                alert('Pause');
                break;
                
                case 32:
                event.preventDefault();           
                console.log(personnage.tirPressed);
                console.log(pixelLeftTir);
                               
                if(personnage.animationTirEnCour === false){
                    //son
                    sonQuiTir.play();
                    
                    //function de collision du tir 
                    birdCollision = new ConstruitCollisionTir(apparitionTopEnnemi, bird.pxHorizontal, objetBird.tirDansBird, imgCollisionTir, objetBird.tailleHautBird, objetBird.tailleBasBird, objetBird.tailleDroiteBird, objetBird.tailleGaucheBird, objetBird.croixBird, compteurExplosionTir);
                    
                    //function de collision du tir                     
                    bird2Collision = new ConstruitCollisionTir(apparitionTopEnnemiBird2, bird2.anime, objetBird2.tirDansBird2, imgCollisionTir2, objetBird2.tailleHautBird2, objetBird2.tailleBasBird2, objetBird2.tailleDroiteBird2, objetBird2.tailleGaucheBird2, objetBird2.croixBird2, compteurExplosionTirBird2);
                    
                    //function de collision du tir 
                    bird3Collision = new ConstruitCollisionTir(apparitionTopEnnemiBird3, bird3.anime, objetBird3.tirDansBird3, imgCollisionTir3, objetBird3.tailleHautBird3, objetBird3.tailleBasBird3, objetBird3.tailleDroiteBird3, objetBird3.tailleGaucheBird3, objetBird3.croixBird3, compteurExplosionTirBird3);
                    
                    //function de collision du tir 
                    birdBossCollision = new ConstruitCollisionTir(apparitionTopEnnemiBoss, birdBoss.anime, boss.tirDansBirdBoss, imgCollisionTir4, boss.tailleHautBirdBoss, boss.tailleBasBirdBoss, boss.tailleDroiteBirdBoss, boss.tailleGaucheBirdBoss, objetBird3.croixBird3, compteurExplosionTirBirdBoss, boss.tirDeuxDansBirdBoss);

                    //redefini la taille de pixel top a chaque tir pour tirer horizontalement au perso
                    pixelTopTir = personnage.pixelTop;
                    //redefini la taille de pixel left pour demarrer l'animation du tir au niveau du bec du perso
                    pixelLeftTir = personnage.pixelLeft + 70;
                    //met true si le tir a été effectuer
                    personnage.tirPressed = true;
                    //met le compteur de l'animation de la collision du tir a 0
                    compteurExplosionTir = 0;
                    compteurExplosionTirBird2 = 0;
                    compteurExplosionTirBird3 = 0;
                    compteurExplosionTirBirdBoss = 0;
                    //tir du perso
                    function tir(){
                        pixelLeftTir += 1;
                        birdCollision.funcCollisionEnnemis();
                        bird2Collision.funcCollisionEnnemis();
                        bird3Collision.funcCollisionEnnemis();
                        birdBossCollision.funcCollisionEnnemis();

                        if(birdCollision.bird == false){
                            //si le tir touche l'oiseau ennemie on met la valeur en false pour ne pas le redessiner dans la page ennemis.js
                            objetBird.tirDansBird = false;
                            //met la position de l'oiseau ennemie toucher a 0                           
                            apparitionTopEnnemi = 0;
                            //arrete l'animation de droite a gauche                            
                            bird.pxHorizontal = 0;                            
                            //met la valeur a true pour dessiner la collision de l'oiseau ennemi
                            personnage.collisionBirdTirActive = true;
                            //si le compteur de l'animation de l'explosion est supérieur a 20
                            if(birdCollision.compteur > 20){
                                birdCollision.sprite.src = "";

                            }
                            //affiche la div formation 
                             var formation = document.getElementById('formation');
                             formation.style.display = "block";
                            //affiche la formation 1                              
                             var bac = document.getElementById('bac');
                             bac.style.display = "block";

        
                        }
                        if(bird2Collision.bird == false){
                            //si le tir touche l'oiseau ennemie on met la valeur en false pour ne pas le redessiner dans la page ennemis.js
                            objetBird2.tirDansBird2 = false;
                            //met la position de l'oiseau ennemie toucher a 0
                            apparitionTopEnnemiBird2 = 0;
                            //arrete l'animation de droite a gauche                            
                            bird2.anime = 0;                            
                            //met la valeur a true pour dessiner la collision de l'oiseau ennemi
                            personnage.collisionBird2TirActive = true;
                            //si le compteur de l'animation de l'explosion est supérieur a 20          
                            if(bird2Collision.compteur > 20){
                            bird2Collision.sprite.src = "";
                            }
                            //affiche la div formation 
                            var formation = document.getElementById('formation');
                            formation.style.display = "block";
                            //affiche la formation 2
                            var bts = document.getElementById('bts');
                            bts.style.display = "block";
                            
                        }
                        if(bird3Collision.bird == false){
                            //si le tir touche l'oiseau ennemie on met la valeur en false pour ne pas le redessiner dans la page ennemis.js
                            objetBird3.tirDansBird3 = false;
                            //met la position de l'oiseau ennemie toucher a 0                           
                            apparitionTopEnnemiBird3 = 0;
                            //arrete l'animation de droite a gauche                            
                            bird3.anime = 0;
                            //met la valeur a true pour dessiner la collision de l'oiseau ennemi
                            personnage.collisionBird3TirActive = true;
                            //si le compteur de l'animation de l'explosion est supérieur a 20
                            if(bird2Collision.compteur > 20){
                            bird3Collision.sprite.src = "";
                            }
                            //affiche la div formation 
                            var formation = document.getElementById('formation');
                            formation.style.display = "block";
                            //affiche la formation 2
                            var certification = document.getElementById('certification');
                            certification.style.display = "block";
                            
                        }
                        // console.log('base' + birdBossCollision.tirDeuxDansBird);
                        //si tout les ennemis on été tuer et toutes les compétences on été recuperer
                        if(birdCollision.bird == false && bird2Collision.bird == false && bird3Collision.bird == false){
                            //si le boss est tuer
                            if(birdBossCollision.tirDeuxDansBird <= 0){
                                //arrete les points
                                point = 0;
                                //arrete le scroll                                
                                vitesse = 0;
                                //si le tir touche l'oiseau ennemie on met la valeur en false pour ne pas le redessiner dans la page ennemis.js
                            boss.tirDansBirdBoss = false;
                            //met la position de l'oiseau ennemie toucher a 0                           
                            apparitionTopEnnemiBirdBoss = 0;
                            //arrete l'animation de droite a gauche
                            birdBoss.anime = 0;
                            //met la valeur a true pour dessiner la collision de l'oiseau ennemi
                            personnage.collisionBirdBossTirActive = true;
                            //si le compteur de l'animation de l'explosion est supérieur a 20
                            if(birdBossCollision.compteur > 20){
                                birdBossCollision.sprite.src = "";
                            }
                            //affiche la div experience 
                            var experience = document.getElementById('experience');
                            experience.style.display = "block";
                            //attent 1000 avant d'afficher "you win"
                            setTimeout(function(){
                                //afficher Gagner
                                var win = document.getElementById('win');
                                win.style.display = "block";
                                
                            }, 1000);
                            
                            }else{
                                boss.active = true;
                                //function qui active le compte a rebours du boss
                                animationCountDown();
                                //met animationCountDownActive a false pour ne pas ré activer l'animation 3 2 1
                                animationCountDownActive = false;
                            }
                            
                        }
                        
                        //si le tir atteint 350 pixel de gauche on termine et on remet les valeurs a 0
                        if(pixelLeftTir - personnage.pixelLeft > 200){
                            pixelLeftTir = personnage.pixelLeft;
                            pixelTopTir = personnage.pixelTop;
                            window.clearInterval(interval);
                            personnage.animationTirEnCour = false; 
                            personnage.tirPressed = false;   
                        }
                        else{
                            personnage.animationTirEnCour = true;
                        }
                    }
                    interval = setInterval(tir, 0);
                }
                        
                break;
            }

});


                //////////////////ARRETE L'ANIMATION QUAND LA TOUCHE EST RELEVER/////////////////
    addEventListener("keyup", function(event){
    var code = event.keyCode;
        switch(code){
            //droite
            case 39:
            window.clearInterval(fleche);
            personnage.animationEnCour = false;
            sonQuiAvance.pause();
            break;
            //gauche
            case 37:
            window.clearInterval(fleche);
            personnage.animationEnCour = false;
            sonQuiAvance.pause();
            break;
            //haut
            case 38:
            window.clearInterval(fleche);
            personnage.animationEnCour = false;
            sonQuiAvance.pause();
            break;
            //bas
            case 40:
            window.clearInterval(fleche);
            personnage.animationEnCour = false;
            sonQuiAvance.pause();
            break;
            //tir
            case 32:
            personnage.animationTirEnCour = false;
            sonQuiAvance.pause();
            break;
        }
        
    });
}


var ConstruitCollisionTir = function(positionTop, positionLeft, tirBird, spriteCollision, tailleHaut, tailleBas, tailleGauche, tailleDroite, divBird, compteurAnimationCollision, monTirDeuxDansBird){
    this.bird = tirBird;
    this.top = positionTop;
    this.left = positionLeft;
    this.sprite = spriteCollision;
    this.tailleHaut = tailleHaut;
    this.tailleBas = tailleBas;
    this.tailleGauche = tailleGauche;
    this.tailleDroite = tailleDroite;
    this.divBird = divBird;
    this.compteur = compteurAnimationCollision;
    this.tirDeuxDansBird = monTirDeuxDansBird;


    this.funcCollisionEnnemis = function(){
    //collision bird
        if(this.top - this.tailleHaut <= pixelTopTir && this.top + this.tailleBas >= pixelTopTir && this.left >= pixelLeftTir - this.tailleDroite && this.left <= pixelLeftTir + this.tailleGauche + 20){
        // console.log('boom');
        // console.log(this.divBird);
            //met la valeur a false pour ne pas redessiner le tir si l'oiseau est toucher    
        personnage.tirPressed = false;

            //recupere et affiche l'image de la croix sur l'oiseau grace a son ID
            var progression = document.getElementById(this.divBird);
            progression.style.display = 'inline-block';

            //met la valeur a false pour ne pas redessiner l'oiseau ennemie dans la page ennemis.js
            this.bird = false;
            //tir dans le boss
            this.tirDeuxDansBird -= 1;
            // console.log(this.tirDeuxDansBird);
            
            //redefini la taille de pixel left pour la position de la collision
            positionHorizontal = this.left;
            //redefini la taille de pixel top pour la position de la collision
            positionTop = this.top;
            //incremente 1 au compteur d'animation de la collision du tir
            this.compteur++;                                                                     
            if(this.compteur < 5){
                //dessine l'image de l'explosion 1
                personnage.positionSpriteTirCollision = 0;
            }else if (this.compteur < 9){
                //dessine l'image de l'explosion 2
                personnage.positionSpriteTirCollision = 170;
            }else if (this.compteur > 12){
                //dessine l'image de l'explosion 3
                personnage.positionSpriteTirCollision = 450;
            }else if(this.compteur < 20){
                //detruit l'image de l'explosion 
                this.sprite.src = '';
                
            }

        }

    }

}