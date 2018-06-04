window.addEventListener('load', function(){
    var start = document.getElementById('start');
    var jouer = document.getElementById('jouer');
    var canvas = document.getElementById("canvas");
    var presentation = window.document.getElementById("presentation");
    var imgwin = window.document.getElementById("imgwin");
    var imglose = window.document.getElementById("imglose");
    var divlose = window.document.getElementById("lose");
    var divwin = window.document.getElementById("win");
    
    
    if(window.innerWidth > 1900){
        tailleEcran = window.innerWidth - 1050;
        canvas.width = tailleEcran;    
        imgwin.style.width = tailleEcran + 'px';  
        imglose.style.width = tailleEcran + 'px';   
        divlose.style.marginTop = -530 + 'px';           
                   
    
    }else if(window.innerWidth > 1200){
        tailleEcran = window.innerWidth - 550;
        canvas.width = tailleEcran;
        
        imgwin.style.width = 790 + 'px';  

        imglose.style.width = 800 + 'px';        
        divlose.style.marginTop = -530 + 'px';        
        
    }else if (window.innerWidth < 500){
        tailleEcran = window.innerWidth;
         canvas.width = tailleEcran;    

         imgwin.style.width = 790 + 'px';
 
         imglose.style.width = 800 + 'px';        
         divlose.style.marginTop = -530 + 'px';           
                   
    }else{
        tailleEcran = window.innerWidth
    }

    //met le background a la taille de l'ecran
    presentation.style.width = window.innerWidth + 'px';

    //boutton entree pour demarrer le jeu
    window.addEventListener('keydown', function(e){
        if(e.keyCode == 13){
            var start = document.getElementById('start');
            start.style.display = "none";

                    //fond
        fondInitialisation();
        dessinImage();
        // window.setInterval(dessinImage, 25);

        //Personnage
        persoInitialisation();
        toucheClavier();
        dessinPerso();
        // window.setInterval(dessinPerso, 25);

        //Ennemi
        ennemisIniatialisation();
        dessinEnnemi();
        // window.setInterval(dessinEnnemi, 25);

        //Bonus
        bonusInitialisation();
        dessineBonus();
        // window.setInterval(dessineBonus, 25);

        }
    });

    
    //au clique du bouton start le jeu demarre
    jouer.addEventListener('click', function(){
        start.style.display = "none";

        //fond
        fondInitialisation();
        dessinImage();
        // window.setInterval(dessinImage, 25);

        //Personnage
        persoInitialisation();
        toucheClavier();
        dessinPerso();
        // window.setInterval(dessinPerso, 25);

        //Ennemi
        ennemisIniatialisation();
        dessinEnnemi();
        // window.setInterval(dessinEnnemi, 25);

        //Bonus
        bonusInitialisation();
        dessineBonus();
        // window.setInterval(dessineBonus, 25);

    });  
    
    
    var restart = document.getElementById('restart');
    restart.addEventListener('click', function(){
        //recharge la page
        location.reload();
    });

    //activer/desactiver le son
     sonQuiAvance = document.getElementById("son-qui-avance");   
     sonQuiTir = document.getElementById("son-qui-tir");    
     sonCollision = document.getElementById("son-collision");    
     activeSon = document.getElementById('activeSon');
     desactiveSon = document.getElementById('desactiveSon');    

    activeSon.addEventListener('click', function(){
        sonQuiAvance.src = 'son/perso-qui-avance.mp3';    
        sonQuiTir.src = 'son/perso-tir.wav';    
        sonCollision.src = 'son/perso-collision.wav'; 
        
        //change la couleur du boutton
        activeSon.style.backgroundColor = "rgb(66, 18, 18)";
        desactiveSon.style.backgroundColor = "brown";


    });
    desactiveSon.addEventListener('click', function(){
        console.log(sonQuiAvance);
        sonQuiAvance.src = 'son/Silence.mp3'; 
        sonQuiTir.src = 'son/Silence.mp3';           
        sonCollision.src = 'son/Silence.mp3';   
                
        //change la couleur du boutton
        desactiveSon.style.backgroundColor = "rgb(66, 18, 18)";
        activeSon.style.backgroundColor = "brown";
    });

});
