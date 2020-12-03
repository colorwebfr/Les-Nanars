    var titl1 = document.getElementById('titreFilm');
    var annee1 = document.getElementById('deQuiAnnee');
	var duree1 = document.getElementById('duree');
	var genre1 = document.getElementById('genre');
	var acteur1 = document.getElementById('acteur');

    var Titl1 = ("Le retour des Tomates Tueuses");
    var Titl2 = ("Queen Kong");
    var Titl3 = ("L'attaque de la Moussaka Géante");
    var Titl4 = ("Sharktopus");
    var Titl5 = ("Abbott et Costelle contre Frankenstein");
    var Titl6 = ("Plan 9 from outer space");
    var Titl7 = ("The room");
    var Titl8 = ("Terreur Cannibale");
    var aGe = document.getElementById('age').value;
    var choixFilm = "";
   

function descriptifTomateTueuses(){//affiche les infos Tomates tueuses.
	var An1 = ("De John De Bello (1988)");
	var Dur1 = ("Durée: 1h38");
	var Genr1 = ("Genre: science-fiction");//affectation des titres à des variables.
	var Acte1 = ("Acteur: Anthony Starke, George Clooney");

    choixFilm = "Le retour des Tomates Tueuses";//cette variables est declarer guillemets vide enn globale et titré en locale.indispensable pour recuperer la valeur du titre rentrer en alert.
    titl1.innerHTML=Titl1;//variable du (div titre).innerHtml qui resulte de la variable (titre type string).
	annee1.innerHTML=An1;
	duree1.innerHTML=Dur1;
	genre1.innerHTML=Genr1;
	acteur1.innerHTML=Acte1;  
}
function descriptifQueenKong(){//affiche les infos Queen kong.
	var An2 = ("De Frank Agrama (1976)");
	var Dur2 = ("Durée: 1h27");
	var Genr2 = ("Genre: Fantastique");
	var Acte2 = ("Acteur: Robin Askwith, Rula Lenska");

    choixFilm = "Queen Kong";
    titl1.innerHTML=Titl2;
	annee1.innerHTML=An2;
	duree1.innerHTML=Dur2;
	genre1.innerHTML=Genr2;
	acteur1.innerHTML=Acte2;  
}
function descriptifMoussaka(){//affiche les infos Moussaka.
	var An3 = ("De Panos Koutras (2001)");
	var Dur3 = ("Durée: 1h43");
	var Genr3 = ("Genre: science-fiction");
	var Acte3 = ("Acteur: Yannis Aggelakis, Myriam Vourou");

    choixFilm = "L'attaque de la Moussaka Géante";
    titl1.innerHTML=Titl3;
	annee1.innerHTML=An3;
	duree1.innerHTML=Dur3;
	genre1.innerHTML=Genr3;
	acteur1.innerHTML=Acte3;  
}
function descriptifSharktopus(){//affiche les infos Sharktopus.
	var An4 = ("De Declan O'Brien (2010)");
	var Dur4 = ("Durée: 1h29");
	var Genr4 = ("Genre: science-fiction");
	var Acte4 = ("Acteur: Eric Roberts, Kerem Bürsin");
 
    choixFilm = "Sharktopus";
    titl1.innerHTML=Titl4;
	annee1.innerHTML=An4;
	duree1.innerHTML=Dur4;
	genre1.innerHTML=Genr4;
	acteur1.innerHTML=Acte4;  
}
function descriptifAbbottCostello(){//affiche les infos Abbott et Costello.
	var An5 = ("De Charles Barton (1948)");
	var Dur5 = ("Durée: 1h23");
	var Genr5 = ("Genre: épouvante");
	var Acte5 = ("Acteur: Bud Abbott, Lou Costello");

    choixFilm = "Abbott et Costelle contre Frankenstein";
    titl1.innerHTML=Titl5;
	annee1.innerHTML=An5;
	duree1.innerHTML=Dur5;
	genre1.innerHTML=Genr5;
	acteur1.innerHTML=Acte5; 
}
function descriptifPlan9(){//affiche les infos plan 9.
	var An6 = ("De Ed Wood (1959)");
	var Dur6 = ("Durée: 1h19");
	var Genr6 = ("Genre: science-fiction");
	var Acte6 = ("Acteur: Bela Lugosi, Tor Johnson");

    choixFilm = "Plan 9 from outer space";
    titl1.innerHTML=Titl6;
	annee1.innerHTML=An6;
	duree1.innerHTML=Dur6;
	genre1.innerHTML=Genr6;
	acteur1.innerHTML=Acte6;
}
function descriptifRoom(){//affiche les infos room.
	var An7 = ("De Tommy Wiseau (2003)");
	var Dur7 = ("Durée: 1h40");
	var Genr7 = ("Genre: drame");
	var Acte7 = ("Acteur: Tommy Wiseau, Juliette Danielle");

	choixFilm = "The room";
    titl1.innerHTML=Titl7;
	annee1.innerHTML=An7;
	duree1.innerHTML=Dur7;
	genre1.innerHTML=Genr7;
	acteur1.innerHTML=Acte7;
}
function descriptifTerreurCannibale(){//affiche les infos terreur cannibale.
	var An8 = ("De Alain Deruelle (1980)");
	var Dur8 = ("Durée: 1h25");
	var Genr8 = ("Genre: épouvante");
	var Acte8 = ("Acteur: Sabrina Siana, Antonio Mayans");

    choixFilm = "Terreur Cannibale";
    titl1.innerHTML=Titl8;
	annee1.innerHTML=An8;
	duree1.innerHTML=Dur8;
	genre1.innerHTML=Genr8;
	acteur1.innerHTML=Acte8;
}
function annuler(){//fonction qui me sert à reset au valeur par default le fieldset descripton ainsi que la value du range.
	titl1.innerHTML="Titre du film";
	annee1.innerHTML="De ...";
	duree1.innerHTML="Durée: ...";
	genre1.innerHTML="Genre: ...";
	acteur1.innerHTML="Avec ...";
	document.getElementById('rangeValu').innerHTML="0";
}
function Soumettre(e){//fonction qui recupere certaine valeur et en test d'autres avant de les ecrires en alert.

    var maIl = document.getElementById('mail').value;
    var weBaddrs = document.getElementById('adresseWeb').value;
    var tab_jour = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");//sert à pouvoir afficher le jour en lettres.
    var d = new Date();//new Date() sert à utiliser les object js de date et heures locales preceder d'un point.
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var noM = document.getElementById('nom').value;
    var prEnom = document.getElementById('prenom').value;
    var maIlrgx =   /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;//regex mail.
    var noMprenomrgx = /^[a-zA-Z]+/;//regex valable pour nom et prénom.
    var choix;
   
    
    if (document.getElementById('radio0').checked){
    	choix=document.getElementById('radio0').value;
    }
    if (document.getElementById('radio1').checked){
    	choix=document.getElementById('radio1').value;
    }
    if (document.getElementById('radio2').checked){
    	choix=document.getElementById('radio2').value;
    }
    if (document.getElementById('radio3').checked){
    	choix=document.getElementById('radio3').value;
    }
    if (document.getElementById('radio4').checked){
    	choix=document.getElementById('radio4').value;
    }
    if (document.getElementById('radio5').checked){//condition qui dit que si tel radio est checked alors on return ca value .
    	choix=document.getElementById('radio5').value;//la variable affecter à l'ID radio .value est indispensable pour retourné le résultat.
    }


    if (maIl.match(maIlrgx)){//si mail match avec regex return true.
        if (prEnom.match(noMprenomrgx)){//si prénom match avec regex return true.
        		alert("Le"+" "+tab_jour[d.getDay()] +" "+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()+" "+"à "+d.getHours()+"h"+d.getMinutes()+" "+prEnom+" "+noM+" "+"à voté pour"+" "+choixFilm+" "+"en attribuant une note de "+choix);
        		return true;//si les deux condition return true, envoyer message le alert ci-dessus.
        }else{//autrement prénom ne match pas avec regex, alors return false et envoie le message alert ci-dessous.
    	e.preventDefault();
    	alert("Le prénom entré comporte une syntaxe incorrecte ou n'est pas saisie!");
        }
   }else{//autrement mail ne match pas avec regex,alors return false et envoie le messsage alert ci-dessous.
   e.preventDefault();
   alert("L'adresse email comporte  une syntaxe incorrecte ou n'est pas saisie!");
   return false;   
}
}


function slideVarial(){//fonctiion qui affiche la valeur d'un range.

	var recupValSlide = document.getElementById('scenario').value;
    var remiseZero = document.getElementById('rangeValu').innerHTML = recupValSlide;

}

//fonction qui reset tout sans passer par la page javascript.
// onclick="window.location.reload(false)"


//methode qui evite de faire un innerHtml string suivit d'un inner html vide dans une autres fonction qui reset par default.
/*document.getElementById('tt').addEventListener("click", function () {                     Click sur les vignettes = affichage des infos du film en question 
    titrefilm.innerHTML = "";
    annee.innerHTML = "";
    duree.innerHTML = "";
    genre.innerHTML = "";
    casting.innerHTML = "";
    titrefilm.innerHTML = "Le Retour des Tomates Tueuses" +"<br/>"+ 
    "Réalisateur : John De Bello"+"<br/>"+ 
    "Année de sortie : 1988" +     "<br/>" 
    +"Durée : 1h38" +"<br/>" 
    +"Genre : Science-fiction" +"<br/>" 
    + "Acteurs : Anthony Starke, George Clooney";
})*/