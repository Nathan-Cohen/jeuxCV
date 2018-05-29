window.addEventListener('load', function(){
    var start = document.getElementById('start');
    var jouer = document.getElementById('jouer');
    canvas = document.getElementById("canvas");
        if(window.innerWidth < 1281){
            tailleEcran = window.innerWidth - 550;
             canvas.width = tailleEcran; 
        
        }else if(window.innerWidth > 1919){
            tailleEcran = window.innerWidth - 700;
            canvas.width = tailleEcran;
        }else{
            tailleEcran = 700;
             canvas.width = tailleEcran;
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
