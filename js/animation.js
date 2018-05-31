window.addEventListener('load', function(){
    var start = document.getElementById('start');
    var jouer = document.getElementById('jouer');
    var canvas = document.getElementById("canvas");
    var presentation = window.document.getElementById("presentation");
    var imgwin = window.document.getElementById("imgwin");
    var imglose = window.document.getElementById("imglose");
    
    
    if(window.innerWidth > 1900){
        tailleEcran = window.innerWidth - 1050;
        canvas.width = tailleEcran;    
    
    }else if(window.innerWidth > 1200){
        tailleEcran = window.innerWidth - 550;
        canvas.width = tailleEcran;              
        
    }else if (window.innerWidth < 500){
        tailleEcran = window.innerWidth;
         canvas.width = tailleEcran;               
                   
    }else{
        tailleEcran = window.innerWidth
    }
    // presentation.style.width = tailleEcran + 'px';
    presentation.style.width = window.innerWidth + 'px';
    imgwin.style.width = tailleEcran + 'px';
    imglose.style.width = tailleEcran + 'px';

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
