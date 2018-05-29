window.addEventListener('load', function(){
    var start = document.getElementById('start');
    var jouer = document.getElementById('jouer');
    var canvas = document.getElementById("canvas");
    var fond = document.getElementById("fond");
    if(1200 < window.innerWidth < 1300){
        tailleEcran = window.innerWidth - 550;
         canvas.width = tailleEcran; 
         fond.width = tailleEcran; 
         start.width = tailleEcran; 
         console.log('moyen');
    
    }else if(1900 < window.innerWidth < 2000){
        tailleEcran = window.innerWidth - 2100;
        canvas.width = tailleEcran;
        fond.width = tailleEcran;
        start.width = tailleEcran; 
        console.log('grand');        
        
    }else if (window.innerWidth < 500){
        tailleEcran = window.innerWidth;
         canvas.width = tailleEcran;
         fond.width = tailleEcran;
         start.width = tailleEcran;
         console.log('petit');         
                   
    }
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

location.reload();


});






});
