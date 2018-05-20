var persoInitialisation = function(){
    pixelLeft = 150;
    pixelTop = 150;
    positionSpriteAile = 0;
    positionSpriteAileBas = 600;
    animationEnCour = false;
    animationTirEnCour = false;
    widthSource = 580;
    heightSource = 400;
    imgPerso = new Image();
    imgPerso.src = "image/perso.png";
    heightSource = 400;
    widthSource = 580;
    ctx.drawImage(imgPerso, positionSpriteAileBas, 0, widthSource, heightSource, pixelLeft, pixelTop, 90, 50);
    
    compteurRight = 0;
    compteurLeft = 0;
    compteurTop = 0;
    compteurBottom = 0;

    imgCollisionTir = new Image();
    imgCollisionTir.src = "image/collision.png";
    
    imgCollisionTir2 = new Image();
    imgCollisionTir2.src = "image/collision.png";
    
    imgCollisionTir3 = new Image();
    imgCollisionTir3.src = "image/collision.png";
    
    pixelLeftTir = pixelLeft;
    pixelTopTir = pixelTop;
    tirPressed = false;
    collisionBirdTirActive = false;
    collisionBird2TirActive = false;
    collisionBird3TirActive = false;
    positionSpriteTirCollision = 0;
    compteurExplosionTir = 0;
}


var dessinPerso = function(){
    //tir
    if(tirPressed){
        ctx.drawImage(imgCollision, 0, 300, 250, 300, pixelLeftTir, pixelTopTir, 50, 50);
    }

    //collision tir avec l'oiseau 1 
    if(collisionBirdTirActive){
        ctx.drawImage(imgCollisionTir, positionSpriteTirCollision, 300, 250, 300, birdCollision.left, birdCollision.top, 200, 150);
        
    }
    //collision tir avec l'oiseau 2
    if(collisionBird2TirActive){
    ctx.drawImage(imgCollisionTir2, positionSpriteTirCollision, 300, 250, 300, bird2Collision.left, bird2Collision.top, 200, 150);
    }
    //collision tir avec l'oiseau 3
    if(collisionBird3TirActive){
    ctx.drawImage(imgCollisionTir3, positionSpriteTirCollision, 300, 250, 300, bird3Collision.left, bird3Collision.top, 200, 150);
    }

    //personnage
    ctx.drawImage(imgPerso, positionSpriteAileBas, 0, widthSource, heightSource, pixelLeft, pixelTop, 90, 50);
    
    requestAnimationFrame(dessinPerso);
}




             ///////////////////////ANIMATION A L'APPUIE DES TOUCHES///////////////////////////
var toucheClavier = function(){
    window.addEventListener('keydown', function direction(event){
    var code = event.keyCode;
            switch(code){
                //droite
                case 39:
                event.preventDefault();
                if(animationEnCour === false){
                        fleche = window.setInterval(function(){
                        //a chaque clique sur le touche droite on ajoute 1 au compteurRight si compteurRight est plus grand que 3 on le remet a 0 et on change la position du sprite pour afficher l'image avec des ailes en haut
                        compteurRight++;
                        if(compteurRight > 3){
                            compteurRight = 0;
                            positionSpriteAileBas = 0;
                        }else{
                            positionSpriteAileBas = 600;
                        }
                        //si la position Left est plus petit que le taille du canvas moins la taille de l'image alors on peut avancer 
                        if(pixelLeft < canvas.width - 90){
                            pixelLeft += 3;
                            
                            }else{
                                //la position Left est plus grande donc il n'avance plus pour ne pas sortir du canvas 
                            }
                        }, 20);
                        animationEnCour = true;
                }
                break;
                //gauche
                case 37:
                event.preventDefault();
                if(animationEnCour === false){
                    fleche = window.setInterval(function(){
                        //a chaque clique sur le touche droite on ajoute 1 au compteurRight si compteurRight est plus grand que 3 on le remet a 0 et on change la position du sprite pour afficher l'image avec des ailes en haut
                        compteurLeft++;
                        if(compteurLeft > 3){
                            compteurLeft = 0;
                            positionSpriteAileBas = 0;
                        }else{
                            positionSpriteAileBas = 600;
                        }
                    //si le left est plus petit que la largeur du fond (pour empecher de sortir du cadres)
                        if(pixelLeft > 0){
                            pixelLeft -= 3;
                            ctx.drawImage(imgPerso, positionSpriteAileBas, 0, widthSource, heightSource, pixelLeft, pixelTop, 90, 50);
                        }else{
                            ctx.drawImage(imgPerso, positionSpriteAileBas, 0, widthSource, heightSource, pixelLeft, pixelTop, 90, 50);
                        }
                    }, 20);
                    animationEnCour = true;
                }
                break;
                //haut
                case 38:
                event.preventDefault();
                if(animationEnCour === false){
                    
                    fleche = window.setInterval(function(){
                        //a chaque clique sur le touche droite on ajoute 1 au compteurRight si compteurRight est plus grand que 3 on le remet a 0 et on change la position du sprite pour afficher l'image avec des ailes en haut
                        compteurTop++;
                        if(compteurTop > 3){
                            compteurTop = 0;
                            positionSpriteAileBas = 0;
                        }else{
                            positionSpriteAileBas = 600;
                        }
                        //si le top est plus petit que la taille du fond (pour empecher de sortir du cadres)  
                        if(pixelTop > 0){
                            pixelTop -= 4;
                            ctx.drawImage(imgPerso, positionSpriteAileBas, 0, widthSource, heightSource, pixelLeft, pixelTop, 90, 50);
                            
                        }else{
                            ctx.drawImage(imgPerso, positionSpriteAileBas, 0, widthSource, heightSource, pixelLeft, pixelTop, 90, 50);
                        }
                    }, 20);
                    animationEnCour = true;
                }
                break;
                //bas
                case 40:
                event.preventDefault();                
                if(animationEnCour === false){
                    fleche = window.setInterval(function(){
                        //a chaque clique sur le touche droite on ajoute 1 au compteurRight si compteurRight est plus grand que 3 on le remet a 0 et on change la position du sprite pour afficher l'image avec des ailes en haut
                        compteurBottom++;
                        if(compteurBottom > 3){
                            compteurBottom = 0;
                            positionSpriteAileBas = 0;
                        }else{
                            positionSpriteAileBas = 600;
                        }
                        //si le top est plus petit que la taille du fond (pour empecher de sortir du cadres)
                        if(pixelTop < canvas.height - 50){
                            pixelTop += 4;
                            ctx.drawImage(imgPerso, positionSpriteAileBas, 0, widthSource, heightSource, pixelLeft, pixelTop, 90, 50);
                            
                        }else{
                            ctx.drawImage(imgPerso, positionSpriteAileBas, 0, widthSource, heightSource, pixelLeft, pixelTop, 90, 50);
                        }
                    }, 20);
                    animationEnCour = true;
                }
                break;

                case 13:
                event.preventDefault();                                
                alert('Pause');
                break;
                
                case 32:
                event.preventDefault();                          
                if(animationTirEnCour === false){
                    
                    //function de collision du tir 
                    birdCollision = new ConstruitCollisionTir(apparitionTopEnnemi, bird.pxHorizontal, tirDansBird, imgCollisionTir);
                    bird2Collision = new ConstruitCollisionTir(apparitionTopEnnemiBird2, bird2.anime, tirDansBird2, imgCollisionTir2);
                    bird3Collision = new ConstruitCollisionTir(apparitionTopEnnemiBird3, bird3.anime, tirDansBird3, imgCollisionTir3);
                    //redefini la taille de pixel top a chaque tir pour tirer horizontalement au perso
                    pixelTopTir = pixelTop;
                    //redefini la taille de pixel left pour demarrer l'animation du tir au niveau du bec du perso
                    pixelLeftTir = pixelLeft + 70;
                    //met true si le tir a été effectuer
                    tirPressed = true;
                    //met le compteur de l'animation de la collision du tir a 0
                    compteurExplosionTir = 0;
                    //tir du perso
                    function tir(){
                        pixelLeftTir += 1;
                        birdCollision.funcCollisionEnnemis();
                        bird2Collision.funcCollisionEnnemis();
                        bird3Collision.funcCollisionEnnemis();

                        if(birdCollision.bird == false){
                            //si le tir touche l'oiseau ennemie on met la valeur en false pour ne pas le redessiner dans la page ennemis.js
                            tirDansBird = false;
                            //met la valeur a true pour dessiner la collision de l'oiseau ennemi
                            collisionBirdTirActive = true;
        
                        }
                        if(bird2Collision.bird == false){
                            //si le tir touche l'oiseau ennemie on met la valeur en false pour ne pas le redessiner dans la page ennemis.js
                            tirDansBird2 = false;
                            //met la valeur a true pour dessiner la collision de l'oiseau ennemi
                            collisionBird2TirActive = true;
                            
                        }
                        if(bird3Collision.bird == false){
                            //si le tir touche l'oiseau ennemie on met la valeur en false pour ne pas le redessiner dans la page ennemis.js
                            tirDansBird3 = false;
                            //met la valeur a true pour dessiner la collision de l'oiseau ennemi
                            collisionBird3TirActive = true;
                        }
                        

                        //si le tir atteint 350 pixel de gauche on termine et on remet les valeurs a 0
                        if(pixelLeftTir === 350){
                            pixelLeftTir = pixelLeft;
                            pixelTopTir = pixelTop;
                            window.clearInterval(interval);
                            animationTirEnCour = false; 
                            tirPressed = false;   
                        }
                        else{
                            animationTirEnCour = true;
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
     animationEnCour = false;
     break;
     //gauche
     case 37:
     window.clearInterval(fleche);
     animationEnCour = false;
     break;
     //haut
     case 38:
     window.clearInterval(fleche);
     animationEnCour = false;
     break;
     //bas
     case 40:
     window.clearInterval(fleche);
     animationEnCour = false;
     break;
     //tir
     case 32:
     animationTirEnCour = false;
     break;
 }
    
});
}


var ConstruitCollisionTir = function(positionTop, positionLeft, nomBird, spriteCollision){
    this.bird = nomBird;
    this.top = positionTop;
    this.left = positionLeft;
    this.sprite = spriteCollision;
    this.funcCollisionEnnemis = function(){
    //collision bird
    // console.log('compteur' + compteurExplosionTir);
    // console.log('positionSprite' + positionSpriteTirCollision);
    // console.log('birdLeft' + this.left);
    // console.log('tirLeft' + pixelLeftTir);
    // console.log('tirTop' + pixelTopTir);
    if(this.top - 20 < pixelTopTir && this.top + 40 > pixelTopTir && this.left > pixelLeftTir - 90 && this.left < pixelLeftTir + 90){
        
    console.log('boom');
        
        //met la valeur a false pour ne pas redessiner l'oiseau ennemie dans la page ennemis.js
        this.bird = false;
        
        //redefini la taille de pixel left pour la position de la collision
        positionHorizontal = this.left;
        //redefini la taille de pixel top pour la position de la collision
        positionTop = this.top;
        //incremente 1 au compteur d'animation de la collision du tir
        compteurExplosionTir++;                                                                     
        if(compteurExplosionTir < 5){
            //dessine l'image de l'explosion 1
            positionSpriteTirCollision = 0;
        }else if (compteurExplosionTir < 9){
            //dessine l'image de l'explosion 2
            positionSpriteTirCollision = 170;
        }else if (compteurExplosionTir > 12){
            //dessine l'image de l'explosion 3
            positionSpriteTirCollision = 450;
        }else if(compteurExplosionTir < 20){
            // console.log('bird ' + imgCollisionTir);
            //detruit l'image de l'explosion 4
            this.sprite.src = '';
            
        }
    }

 


        //recupere et affiche l'image de la croix grace a son ID
        // var progression = document.getElementById('croix' + this.bonus);
        // progression.style.display = 'inline-block';                                                                          

    }
    // //collision bird2 marron
    // if(pixelTopTir <= apparitionTopEnnemiBird2 + 60 && pixelTopTir >= apparitionTopEnnemiBird2 - 20 && pixelLeftTir >= bird2.anime){
    //     //met la valeur a false pour ne pas redessiner l'oiseau ennemie
    //     tirDansBird2 = false;

    //     //active l'animation de la collision
    //     collisionTir = true;
    //     positionHorizontal = bird2.anime;
    //     positionTop = apparitionTopEnnemiBird2;                                
    //     compteurExplosionTir++;
    //     console.log('bird2 positionT ' + positionTop);                                
    //     console.log('bird2 positionH ' + positionHorizontal);        
    //     console.log('bird2 compteurT ' + compteurExplosionTir);        
    //     if(compteurExplosionTir < 5){
    //         //dessine l'image de l'explosion 1                                    
    //         positionSpriteTirCollision = 0;
    //     }else if (compteurExplosionTir < 9){
    //         //dessine l'image de l'explosion 2
    //         positionSpriteTirCollision = 170;
    //     }else if (compteurExplosionTir > 9){
    //         //dessine l'image de l'explosion 3
    //         positionSpriteTirCollision = 450;
    //     }else if(compteurExplosionTir < 13){
    //         //detruit l'image de l'explosion 4
    //         imgCollisionTir.src = '';

            
    //     }

    // }
    // //collision bird3 jaune
    // if(pixelTopTir <= apparitionTopEnnemiBird3 + 60 && pixelTopTir >= apparitionTopEnnemiBird3 - 20 && pixelLeftTir >= bird3.anime){
    //     //met la valeur a false pour ne pas redessiner l'oiseau ennemie
    //     tirDansBird3 = false;
    //     //active l'animation de la collision
    //     collisionTir = true;
    //     positionHorizontal = bird3.anime;
    //     positionTop = apparitionTopEnnemiBird3;
    //     compteurExplosionTir++;
    //     console.log('bird3 positionT ' + positionTop);                                
    //     console.log('bird3 positionH ' + positionHorizontal);
    //     console.log('bird3 compteurT ' + compteurExplosionTir);        
        
    //     if(compteurExplosionTir < 5){
    //         //dessine l'image de l'explosion 1                                    
    //         positionSpriteTirCollision = 0;
    //     }else if (compteurExplosionTir < 9){
    //         //dessine l'image de l'explosion 2
    //         positionSpriteTirCollision = 170;
    //     }else if (compteurExplosionTir > 9){
    //         //dessine l'image de l'explosion 3
    //         positionSpriteTirCollision = 450;
    //     }else{
    //         //detruit l'image de l'explosion 4
    //         imgCollisionTir.src = '';
            
            
    //     }

    // }

 }