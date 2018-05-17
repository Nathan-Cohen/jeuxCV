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
    
    pixelLeftTir = pixelLeft;
    pixelTopTir = pixelTop;
    tirPressed = false;
    collisionTir = false;
    positionSpriteTirCollision = 0;
    compteurExplosionTir = 0;
}


var dessinPerso = function(){
    //tir
    if(tirPressed){
        ctx.drawImage(imgCollision, 0, 300, 250, 300, pixelLeftTir, pixelTopTir, 50, 50);
    }

    //collision tir
    if(collisionTir){
        ctx.drawImage(imgCollisionTir, positionSpriteTirCollision, 300, 250, 300, positionHorizontal, positionTop, 200, 150);
        
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
                    pixelTopTir = pixelTop;
                    tirPressed = true;
                    compteurExplosionTir = 0;
                    //tir du perso
                    function tir(){
                        pixelLeftTir += 1;
                        //function de collision du tir 
                        // var CollisionTir = function(){
                            //collision bird
                            if(pixelTopTir <= apparitionTopEnnemi + 60 && pixelTopTir >= apparitionTopEnnemi - 20 && pixelLeftTir >= bird.pxHorizontal){
                                //met la valeur a false pour ne pas redessiner l'oiseau ennemie
                                tirDansBird = false;
                                //active l'animation de la collision
                                collisionTir = true;
                                positionHorizontal = bird.pxHorizontal;
                                positionTop = apparitionTopEnnemi;
                                compteurExplosionTir++;
                                console.log('bird positionT ' + positionTop);                                
                                console.log('bird positionH ' + positionHorizontal);  
                                console.log('bird compteurT ' + compteurExplosionTir);                                                                      
                                if(compteurExplosionTir < 5){
                                    imgCollisionTir.src = "image/collision.png";
                                    //dessine l'image de l'explosion 1
                                    positionSpriteTirCollision = 0;
                                }else if (compteurExplosionTir < 9){
                                    //dessine l'image de l'explosion 2
                                    positionSpriteTirCollision = 170;
                                }else if (compteurExplosionTir > 9){
                                    //dessine l'image de l'explosion 3
                                    positionSpriteTirCollision = 450;
                                }else if(compteurExplosionTir < 13){
                                    // console.log('bird ' + imgCollisionTir);
                                    //detruit l'image de l'explosion 4
                                    imgCollisionTir.src = '';

                                    
                                }
                    
                    
                                //recupere et affiche l'image de la croix grace a son ID
                                // var progression = document.getElementById('croix' + this.bonus);
                                // progression.style.display = 'inline-block';                                                                          
    
                            }
                            //collision bird2 marron
                            if(pixelTopTir <= apparitionTopEnnemiBird2 + 60 && pixelTopTir >= apparitionTopEnnemiBird2 - 20 && pixelLeftTir >= bird2.anime){
                                //met la valeur a false pour ne pas redessiner l'oiseau ennemie
                                tirDansBird2 = false;

                                //active l'animation de la collision
                                collisionTir = true;
                                positionHorizontal = bird2.anime;
                                positionTop = apparitionTopEnnemiBird2;                                
                                compteurExplosionTir++;
                                console.log('bird2 positionT ' + positionTop);                                
                                console.log('bird2 positionH ' + positionHorizontal);        
                                console.log('bird2 compteurT ' + compteurExplosionTir);        
                                if(compteurExplosionTir < 5){
                                    //dessine l'image de l'explosion 1
                                    positionSpriteTirCollision = 0;
                                }else if (compteurExplosionTir < 9){
                                    //dessine l'image de l'explosion 2
                                    positionSpriteTirCollision = 170;
                                }else if (compteurExplosionTir > 9){
                                    //dessine l'image de l'explosion 3
                                    positionSpriteTirCollision = 450;
                                }else if(compteurExplosionTir < 13){
                                    //detruit l'image de l'explosion 4
                                    imgCollisionTir.src = '';

                                    
                                }
    
                            }
                            //collision bird3 jaune
                            if(pixelTopTir <= apparitionTopEnnemiBird3 + 60 && pixelTopTir >= apparitionTopEnnemiBird3 - 20 && pixelLeftTir >= bird3.anime){
                                //met la valeur a false pour ne pas redessiner l'oiseau ennemie
                                tirDansBird3 = false;
                                //active l'animation de la collision
                                collisionTir = true;
                                positionHorizontal = bird3.anime;
                                positionTop = apparitionTopEnnemiBird3;
                                compteurExplosionTir++;
                                console.log('bird3 positionT ' + positionTop);                                
                                console.log('bird3 positionH ' + positionHorizontal);
                                console.log('bird3 compteurT ' + compteurExplosionTir);        
                                
                                if(compteurExplosionTir < 5){
                                    //dessine l'image de l'explosion 1
                                    positionSpriteTirCollision = 0;
                                }else if (compteurExplosionTir < 9){
                                    //dessine l'image de l'explosion 2
                                    positionSpriteTirCollision = 170;
                                }else if (compteurExplosionTir > 9){
                                    //dessine l'image de l'explosion 3
                                    positionSpriteTirCollision = 450;
                                }else{
                                    //detruit l'image de l'explosion 4
                                    imgCollisionTir.src = '';
                                    
                                    
                                }
    
                            }

                        // }


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
    
})
}