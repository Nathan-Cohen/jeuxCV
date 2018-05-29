window.addEventListener('load', function(){
    var start = document.getElementById('start');
    var jouer = document.getElementById('jouer');
    var canvas = document.getElementById("canvas");
    var fond = document.getElementById("fond");
    var presentation = document.getElementById("presentation");
    if(window.innerWidth > 1900){
        tailleEcran = window.innerWidth - 1050;
        canvas.width = tailleEcran;
        fond.width = 870;
        start.width = 870; 
        presentation.width = 870; 
        console.log('grand');        
        console.log(window.innerWidth);       
    
    }else if(window.innerWidth > 1200){
        tailleEcran = window.innerWidth - 550;
        canvas.width = tailleEcran; 
        fond.width = 730; 
        start.width = 730; 
        presentation.width = 730;         
        console.log('moyen');
        console.log(window.innerWidth);
        
    }else if (window.innerWidth < 500){
        tailleEcran = window.innerWidth;
         canvas.width = tailleEcran;
         fond.width = canvas.width;
         start.width = canvas.width;
        presentation.width = canvas.width;          
         console.log('petit');         
         console.log(window.innerWidth);         
                   
    }else{
        tailleEcran = window.innerWidth
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
