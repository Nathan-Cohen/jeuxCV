
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
    
    objetBonus = {
        ToutLesBonusToucher: false,
        
        Html: {
            bonusHtml: 'html',
            bonusSourceHtml: imgHtml,
            competenceHtml: "<img src='image/html.png' width='150px'>",
            tailleHaut: 30,
            tailleBas: 90,
            tailleGauche: 80,
            tailleDroite: 50,
            collision: false

        },
        Css: {
            bonusCss: 'css',
            bonusSourceCss: imgCss,
            competenceCss: "<img src='image/css.png' width='150px'>",
            tailleHaut: 30,
            tailleBas: 90,
            tailleGauche: 80,
            tailleDroite: 50,
            collision: false
            
        },
        Jquery: {
            bonusJquery: 'jquery',
            bonusSourceJquery: imgjQuery,
            competenceJquery: "<img src='image/jquery.png' width='150px'>",
            tailleHaut: 40,
            tailleBas: 90,
            tailleGauche: 80,
            tailleDroite: 50,
            collision: false
            
        },
        Javascript: {
            bonusJavascript: 'javascript',
            bonusSourceJavascript: imgJavascript,
            competenceJavascript: "<img src='image/javascript.png' width='150px'>",
            tailleHaut: 30,
            tailleBas: 90,
            tailleGauche: 80,
            tailleDroite: 50,
            collision: false
            
        },
        Php: {
            bonusPhp: 'php',
            bonusSourcePhp: imgPhp,
            competencePhp: "<img src='image/php.png' width='150px'>",
            tailleHaut: 30,
            tailleBas: 90,
            tailleGauche: 100,
            tailleDroite: 50,
            collision: false
            
        },

        entierAleatoire:  //function aleatoire pour placer les bonus
        function (min, max)
        {
         return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }


    placementLeftDuBonusHtml = objetBonus.entierAleatoire(0, 100);
    placementTopDuBonusHtml = objetBonus.entierAleatoire(100, 300);

    placementLeftDuBonusCss = objetBonus.entierAleatoire(340, 450);
    placementTopDuBonusCss = objetBonus.entierAleatoire(50, 251);

    placementLeftDuBonusJquery = objetBonus.entierAleatoire(550, 650);
    placementTopDuBonusJquery = objetBonus.entierAleatoire(50, 411);

    placementLeftDuBonusJavascript = objetBonus.entierAleatoire(750, 850);
    placementTopDuBonusJavascript = objetBonus.entierAleatoire(0, 451);

    placementLeftDuBonusPhp = objetBonus.entierAleatoire(850, 950);
    placementTopDuBonusPhp = objetBonus.entierAleatoire(50, 411);

    collisionHtml = new CollisionBonus(placementTopDuBonusHtml, placementLeftDuBonusHtml, objetBonus.Html.bonusHtml, objetBonus.Html.bonusSourceHtml, objetBonus.Html.competenceHtml, objetBonus.Html.tailleHaut, objetBonus.Html.tailleBas, objetBonus.Html.tailleGauche, objetBonus.Html.tailleDroite, objetBonus.Html.collision);
    
    collisionCss = new CollisionBonus(placementTopDuBonusCss, placementLeftDuBonusCss, objetBonus.Css.bonusCss, objetBonus.Css.bonusSourceCss, objetBonus.Css.competenceCss, objetBonus.Css.tailleHaut, objetBonus.Css.tailleBas, objetBonus.Css.tailleGauche, objetBonus.Css.tailleDroite, objetBonus.Css.collision);
    
    collisionJquery = new CollisionBonus(placementTopDuBonusJquery, placementLeftDuBonusJquery, objetBonus.Jquery.bonusJquery, objetBonus.Jquery.bonusSourceJquery, objetBonus.Jquery.competenceJquery, objetBonus.Jquery.tailleHaut, objetBonus.Jquery.tailleBas, objetBonus.Jquery.tailleGauche, objetBonus.Jquery.tailleDroite, objetBonus.Jquery.collision);
    
    collisionJavascript = new CollisionBonus(placementTopDuBonusJavascript, placementLeftDuBonusJavascript, objetBonus.Javascript.bonusJavascript, objetBonus.Javascript.bonusSourceJavascript, objetBonus.Javascript.competenceJavascript, objetBonus.Javascript.tailleHaut, objetBonus.Javascript.tailleBas, objetBonus.Javascript.tailleGauche, objetBonus.Javascript.tailleDroite, objetBonus.Javascript.collision);
    
    collisionPhp = new CollisionBonus(placementTopDuBonusPhp, placementLeftDuBonusPhp, objetBonus.Php.bonusPhp, objetBonus.Php.bonusSourcePhp, objetBonus.Php.competencePhp, objetBonus.Php.tailleHaut, objetBonus.Php.tailleBas, objetBonus.Php.tailleGauche, objetBonus.Php.tailleDroite, objetBonus.Php.collision);

    

}
var dessineBonus = function(){
    if(collisionHtml.collision == true && collisionCss.collision == true && collisionJquery.collision == true && collisionJavascript.collision == true && collisionPhp.collision == true){
        objetBonus.ToutLesBonusToucher = true;

    }

    //recupere la position du personnage
    pixelLeftPerso = personnage.pixelLeft;
    pixelTopPerso = personnage.pixelTop;

    //sauvegarde le contexte d'avant pour en creer un nouveau sur les images
    ctx.save();
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowColor = '#FFFFFF';
    ctx.shadowBlur = 50;
    
    ctx.drawImage(imgHtml, positionInitialedeux-placementLeftDuBonusHtml, placementTopDuBonusHtml, 70, 90);
    //collision HTML
    collisionHtml.funcCollisionBonus();
    //anime le bonus de haut en bas
    placementTopDuBonusHtml++;
    collisionHtml.positionTop++;
    if(placementTopDuBonusHtml == 500){
        placementTopDuBonusHtml = -100;
        collisionHtml.positionTop = -100;
    }
    

    ctx.drawImage(imgCss, positionInitialedeux+placementLeftDuBonusCss, placementTopDuBonusCss, 70, 90);
    //collision CSS    
    collisionCss.funcCollisionBonus();
        //anime le bonus de haut en bas
        placementTopDuBonusCss--;
        collisionCss.positionTop--;
        if(placementTopDuBonusCss == -100){
            placementTopDuBonusCss = 500;
            collisionCss.positionTop = 500;
        }

    ctx.drawImage(imgjQuery, positionInitialedeux+placementLeftDuBonusJquery, placementTopDuBonusJquery, 100, 100);
    //collision jQuery    
    collisionJquery.funcCollisionBonus();
            //anime le bonus de haut en bas
            placementTopDuBonusJquery++;
            collisionJquery.positionTop++;
            if(placementTopDuBonusJquery == 500){
                placementTopDuBonusJquery = -100;
                collisionJquery.positionTop = -100;
            }
    
    ctx.drawImage(imgJavascript, positionInitialedeux+placementLeftDuBonusJavascript, placementTopDuBonusJavascript, 70, 90);
    //collision Javascript
    collisionJavascript.funcCollisionBonus();
                //anime le bonus de haut en bas
                placementTopDuBonusJavascript--;
                collisionJavascript.positionTop--;
                if(placementTopDuBonusJavascript == -100){
                    placementTopDuBonusJavascript = 500;
                    collisionJavascript.positionTop = 500;
                }
    
    ctx.drawImage(imgPhp, positionInitialedeux+placementLeftDuBonusPhp, placementTopDuBonusPhp, 70, 90);
    //collision PHP    
    collisionPhp.funcCollisionBonus();
                //anime le bonus de haut en bas
                placementTopDuBonusPhp++;
                collisionPhp.positionTop++;
                if(placementTopDuBonusPhp == 500){
                    placementTopDuBonusPhp = -100;
                    collisionPhp.positionTop = -100;
                }
    
    ctx.restore();

    requestAnimationFrame(dessineBonus);

}



    var CollisionBonus = function(placementTop, placementLeft, monBonus, monBonusSource, maCompetence, haut, bas, gauche, droite, collisionActive){
        this.positionTop = placementTop;
        this.left = placementLeft;
        this.tailleHaut = haut;
        this.tailleBas = bas;
        this.tailleGauche = gauche;
        this.tailleDroite = droite;
        this.bonus = monBonus;
        this.bonusSource = monBonusSource;
        this.competence = maCompetence;
        this.collision = collisionActive;
        this.funcCollisionBonus = function(){
            if(this.bonus == 'html'){
                ///////////////////////COLLISION BONUS HTML///////////////////////////
                if(this.positionTop - this.tailleHaut < pixelTopPerso && pixelTopPerso < this.positionTop + this.tailleBas && positionInitialedeux - this.left - this.tailleGauche < pixelLeftPerso && positionInitialedeux - this.left + this.tailleDroite > pixelLeftPerso && positionInitialedeux > 0 ){
                    //recupere et affiche l'image de la croix grace a son ID
                    var progression = document.getElementById('croix' + this.bonus);
                    progression.style.display = 'inline-block';
                    //recupere et affiche l'image de la compétence grace a son ID
                    var divCompetence = document.getElementById(this.bonus);
                    divCompetence.innerHTML = this.competence;
                    //supprime l'image du bonus
                    this.bonusSource.src = "";
                    //recupere et affiche la div competence grace a son ID                    
                    var divCompetence = document.getElementById("competence");
                    divCompetence.style.display = 'block';

                    this.collision = true;
            
                }

            }else{
                 ///////////////////////COLLISION BONUS///////////////////////////
                 if(this.positionTop - this.tailleHaut < pixelTopPerso && pixelTopPerso < this.positionTop + this.tailleBas && positionInitialedeux + this.left - this.tailleGauche < pixelLeftPerso && positionInitialedeux + this.left + this.tailleDroite > pixelLeftPerso && positionInitialedeux < 0 ){
                    //recupere et affiche l'image de la croix grace a son ID
                    var progression = document.getElementById('croix' + this.bonus);
                    progression.style.display = 'inline-block';
                    //recupere et affiche l'image de la compétence grace a son ID
                    var divCompetence = document.getElementById(this.bonus);
                    divCompetence.innerHTML = this.competence;
                    //supprime l'image du bonus                    
                    this.bonusSource.src = "";
                    //recupere et affiche la div competence grace a son ID                    
                    var divCompetence = document.getElementById("competence");
                    divCompetence.style.display = 'block';

                    this.collision = true;

                 }
            }

        }
}