window.addEventListener('load', function(){
    var start = document.getElementById('start');
    var jouer = document.getElementById('jouer');
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

canvas = document.getElementById("canvas");
if(window.innerWidth < 1281){
    canvas.width = window.innerWidth - 550;

}else if(window.innerWidth > 1919){
    canvas.width = window.innerWidth - 900;
    objetBird.animationEnnemiHorizontalBird = 5000;
    objetBird2.animationEnnemiHorizontalBird2 =5000;
    objetBird3.animationEnnemiHorizontalBird3 = 5000;
}
console.log(window.innerWidth);






});
