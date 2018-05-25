window.addEventListener('load', function(){
    var start = document.getElementById('start');
    var jouer = document.getElementById('jouer');
    var monBody = document.getElementsByTagName('body');
    monBody[0].style.display = "block";
    jouer.addEventListener('click', function(){
        start.style.display = "block";

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
