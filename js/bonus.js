
var bonusInitialisation = function(){
    //Bonus (html, css, js ect...)
    imgHtml = new Image();
    imgHtml.src = "image/html.png";
    
    imgCss = new Image();
    imgCss.src = "image/css.png";
    
    imgjQuery = new Image();
    imgjQuery.src = "image/jQuery.png";
    
    imgJavascript = new Image();
    imgJavascript.src = "image/javascript.png";
    
    imgPhp = new Image();
    imgPhp.src = "image/php.png";
    
    //function aleatoire pour placer les bonus
    function entierAleatoire(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    placementLeftDuBonusHtml = entierAleatoire(50, 151);
    placementTopDuBonusHtml = entierAleatoire(100, 451);
    
    placementLeftDuBonusCss = entierAleatoire(301, 400);
    placementTopDuBonusCss = entierAleatoire(50, 251);
    
    placementLeftDuBonusJquery = entierAleatoire(550, 650);
    placementTopDuBonusJquery = entierAleatoire(50, 411);
    
    placementLeftDuBonusJavascript = entierAleatoire(750, 850);
    placementTopDuBonusJavascript = entierAleatoire(0, 451);
    
    placementLeftDuBonusPhp = entierAleatoire(1000, 1250);
    placementTopDuBonusPhp = entierAleatoire(50, 411);

    bonusHtml = 'html';
    bonusSourceHtml = imgHtml;
    competenceHtml = "<img src='image/html.png' width='150px'>";
    
    bonusCss = 'css';
    bonusSourceCss = imgCss;
    competenceCss = "<img src='image/css.png' width='150px'>";
    
    bonusJquery = 'jquery';
    bonusSourceJquery = imgjQuery;
    competenceJquery = "<img src='image/jquery.png' width='150px'>";
    
    bonusJavascript = 'javascript';
    bonusSourceJavascript = imgJavascript;
    competenceJavascript = "<img src='image/javascript.png' width='150px'>";
    
    bonusPhp = 'php';
    bonusSourcePhp = imgPhp;
    competencePhp = "<img src='image/php.png' width='150px'>";


    collisionHtml = new CollisionBonus(placementTopDuBonusHtml, placementLeftDuBonusHtml, bonusHtml, bonusSourceHtml, competenceHtml);
    
    collisionCss = new CollisionBonus(placementTopDuBonusCss, placementLeftDuBonusCss, bonusCss, bonusSourceCss, competenceCss);
    
    collisionJquery = new CollisionBonus(placementTopDuBonusJquery, placementLeftDuBonusJquery, bonusJquery, bonusSourceJquery, competenceJquery);
    
    collisionJavascript = new CollisionBonus(placementTopDuBonusJavascript, placementLeftDuBonusJavascript, bonusJavascript, bonusSourceJavascript, competenceJavascript);
    
    collisionPhp = new CollisionBonus(placementTopDuBonusPhp, placementLeftDuBonusPhp, bonusPhp, bonusSourcePhp, competencePhp);

    

}
var dessineBonus = function(){
    //recupere la position du personnage
    pixelLeftPerso = pixelLeft;
    pixelTopPerso = pixelTop;

    //sauvegarde le contexte d'avant pour en creer un nouveau sur les images
    ctx.save();
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowColor = '#FFFFFF';
    ctx.shadowBlur = 50;
    ctx.drawImage(imgHtml, positionInitialedeux-placementLeftDuBonusHtml, placementTopDuBonusHtml, 70, 90);
    collisionHtml.funcCollisionBonus();
    //collision HTML

    ctx.drawImage(imgCss, positionInitialedeux+placementLeftDuBonusCss, placementTopDuBonusCss, 70, 90);
    collisionCss.funcCollisionBonus();
    // collisionBonus2(placementTopDuBonusCss, pixelLeft, pixelTop, placementLeftDuBonusCss);

    ctx.drawImage(imgjQuery, positionInitialedeux+placementLeftDuBonusJquery, placementTopDuBonusJquery, 100, 100);
    collisionJquery.funcCollisionBonus();
    

    ctx.drawImage(imgJavascript, positionInitialedeux+placementLeftDuBonusJavascript, placementTopDuBonusJavascript, 70, 90);
    collisionJavascript.funcCollisionBonus();
    
    ctx.drawImage(imgPhp, positionInitialedeux+placementLeftDuBonusPhp, placementTopDuBonusPhp, 70, 90);
    collisionPhp.funcCollisionBonus();
    
    ctx.restore();

    requestAnimationFrame(dessineBonus);

}



    var CollisionBonus = function(placementTop, placementLeft, monBonus, monBonusSource, maCompetence){
        this.positionTop = placementTop;
        this.left = placementLeft;
        this.bonus = monBonus;
        this.bonusSource = monBonusSource;
        this.competence = maCompetence;
        this.funcCollisionBonus = function(){
            if(this.bonus == 'html'){
                ///////////////////////COLLISION BONUS HTML///////////////////////////
                if(this.positionTop - 30 < pixelTopPerso && pixelTopPerso < this.positionTop + 60 && positionInitialedeux - this.left - 20 < pixelLeftPerso + 70 && positionInitialedeux - this.left + 100 > pixelLeftPerso + 90 && positionInitialedeux > 0 ){
                    //recupere et affiche l'image de la croix grace a son ID
                    var progression = document.getElementById('croix' + this.bonus);
                    progression.style.display = 'inline-block';
                    //recupere et affiche l'image de la compétence grace a son ID
                    var divCompetence = document.getElementById(this.bonus);
                    divCompetence.innerHTML = this.competence;
                    this.bonusSource.src = "";
            
                }

            }else{
                 ///////////////////////COLLISION BONUS///////////////////////////
                 if(this.positionTop - 30 < pixelTopPerso && pixelTopPerso < this.positionTop + 60 && positionInitialedeux+this.left - 20 < pixelLeftPerso + 70 && positionInitialedeux+this.left + 100 > pixelLeftPerso + 90 && positionInitialedeux < 0 ){
                    //recupere et affiche l'image de la croix grace a son ID
                    var progression = document.getElementById('croix' + this.bonus);
                    progression.style.display = 'inline-block';
                    //recupere et affiche l'image de la compétence grace a son ID
                    var divCompetence = document.getElementById(this.bonus);
                    divCompetence.innerHTML = this.competence;
                    this.bonusSource.src = "";
                 }
            }

        }
}