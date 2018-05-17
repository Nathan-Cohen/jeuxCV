
var dessinEnnemi = function(tempApparition, animationEnnemiBouche, imgBird, animationEnnemiHorizontal, apparitionTopEnnemi){


    if(apparitionTopEnnemi - 20 < pixelTop && apparitionTopEnnemi + 40 > pixelTop && animationEnnemiHorizontal > pixelLeft - 90 && animationEnnemiHorizontal < pixelLeft + 90){
        compteurExplosion++;
            tempApparition = "annule le compteur d'oiseau ennemie";
            //stop le defilement et les points
            vitesse = 0;
            point = 0;
            //supprimer l'image de l'oiseau
            imgPerso.src = "";
            //image de la collision avec le perso et l'oiseau ennemis
            if(compteurExplosion < 5){
                //dessine l'image de l'explosion 1
                ctx.drawImage(imgCollision, 0, 300, 250, 300, pixelLeft -30, pixelTop-35, 200, 150);
                
            }else if (compteurExplosion < 9){
                //dessine l'image de l'explosion 2
                ctx.drawImage(imgCollision, 170, 300, 300, 300, pixelLeft -30, pixelTop-35, 200, 150);
                
            }else if (compteurExplosion > 9){
                //dessine l'image de l'explosion 3
                ctx.drawImage(imgCollision, 450, 300, 300, 300, pixelLeft -30, pixelTop-35, 200, 150);
                
            }
            //arrete l'ecoute des touche
            window.clearInterval(fleche);
    }
}

/*


//////////////////////BIRD 2///////////////////
    tempApparitionBird2--;
    //si le temp d'apparition est inferieur a 0 on affiche l'oiseau ennemis et on lui retire 6 a chaque passage pour le decaler ver la gauche
    if(tempApparitionBird2 < 0){
        animationEnnemiAileBird2++;
        
            //anime un autre oiseau
            if(animationEnnemiAileBird2 > 30){
                animationEnnemiAileBird2 = 0;
            }
            else if(animationEnnemiAileBird2 > 25){
        ctx.drawImage(imgBird2, 0, 0, 700, 700, animationEnnemiHorizontalBird2, apparitionTopEnnemiBird2, 100, 100);    
                
            }
            else if(animationEnnemiAileBird2 > 20){
        ctx.drawImage(imgBird2, 0, 0, 700, 700, animationEnnemiHorizontalBird2, apparitionTopEnnemiBird2, 100, 100);    
                
            }
            else if(animationEnnemiAileBird2 > 15){
        ctx.drawImage(imgBird2ailebas, 0, 0, 700, 700, animationEnnemiHorizontalBird2, apparitionTopEnnemiBird2, 100, 100);    
               
            }
            else if(animationEnnemiAileBird2 > 7){
                ctx.drawImage(imgBird2, 0, 0, 700, 700, animationEnnemiHorizontalBird2, apparitionTopEnnemiBird2, 100, 100);    
    
            }
            else {
                ctx.drawImage(imgBird2ailebas, 0, 0, 700, 700, animationEnnemiHorizontalBird2, apparitionTopEnnemiBird2, 100, 100);    
          }
                  //enleve -6 au compteur de droite a gauche
        animationEnnemiHorizontalBird2 = animationEnnemiHorizontalBird2 - 6;

        //si l'animationEnnemi est inferieur a -54 (pour disparaitre de l'ecran) on ajoute un nouveau temp d'apparition au prochain oiseau ennemi et on remet l'animation au droite (750px)
        if(animationEnnemiHorizontalBird2 <-54){
            
            tempApparitionBird2 = entierAleatoire(251, 600);
            animationEnnemiHorizontalBird2 = 750;            
        }
    }
          

          //////////////////////BIRD 3///////////////////
    tempApparitionBird3--;
    //si le temp d'apparition est inferieur a 0 on affiche l'oiseau ennemis et on lui retire 6 a chaque passage pour le decaler ver la gauche
    if(tempApparitionBird3 < 0){
        animationEnnemiAileBird3++;
        
            //anime un autre oiseau
            if(animationEnnemiAileBird3 > 30){
                animationEnnemiAileBird3 = 0;
            }
            else if(animationEnnemiAileBird3 > 25){
        ctx.drawImage(imgBird3, 0, 0, 700, 700, animationEnnemiHorizontalBird3, apparitionTopEnnemiBird3, 100, 100);    
                
            }
            else if(animationEnnemiAileBird3 > 20){
        ctx.drawImage(imgBird3, 0, 0, 700, 700, animationEnnemiHorizontalBird3, apparitionTopEnnemiBird3, 100, 100);    
                
            }
            else if(animationEnnemiAileBird3 > 15){
        ctx.drawImage(imgBird3ailebas, 0, 0, 700, 700, animationEnnemiHorizontalBird3, apparitionTopEnnemiBird3, 100, 100);    
               
            }
            else if(animationEnnemiAileBird3 > 7){
                ctx.drawImage(imgBird3, 0, 0, 700, 700, animationEnnemiHorizontalBird3, apparitionTopEnnemiBird3, 100, 100);    
    
            }
            else {
                ctx.drawImage(imgBird3ailebas, 0, 0, 700, 700, animationEnnemiHorizontalBird3, apparitionTopEnnemiBird3, 100, 100);    
          }

           //enleve -6 au compteur de droite a gauche
        animationEnnemiHorizontalBird3 = animationEnnemiHorizontalBird3 - 6;
        

        //si l'animationEnnemi est inferieur a -54 (pour disparaitre de l'ecran) on ajoute un nouveau temp d'apparition au prochain oiseau ennemi et on remet l'animation au droite (750px)
        if(animationEnnemiHorizontalBird3 <-54){
            
            tempApparitionBird3 = entierAleatoire(600, 1000);
            animationEnnemiHorizontalBird3 = 750;            
        }

         }


*/
