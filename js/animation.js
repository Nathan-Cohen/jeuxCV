window.addEventListener('load', function(){
    var start = document.getElementById('start');
    var jouer = document.getElementById('jouer');
    var canvas = document.getElementById("canvas");
    var fond = document.getElementById("fond");
    if(window.innerWidth < 2000){
        tailleEcran = window.innerWidth - 1100;
        canvas.width = tailleEcran;
        fond.width = tailleEcran;
        start.width = tailleEcran; 
        console.log('grand');        
        console.log(window.innerWidth);         
    
    }else if(window.innerWidth < 1300){
        tailleEcran = window.innerWidth - 550;
        canvas.width = tailleEcran; 
        fond.width = tailleEcran; 
        start.width = tailleEcran; 
        console.log('moyen');
        console.log(window.innerWidth);
        
    }else if (window.innerWidth < 500){
        tailleEcran = window.innerWidth;
         canvas.width = tailleEcran;
         fond.width = tailleEcran;
         start.width = tailleEcran;
         console.log('petit');         
         console.log(window.innerWidth);         
                   
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
