function affichagedesire(){
  var taille = document.getElementById("pointure").value;
  var year = document.getElementById("annee").value;
  if (isNaN(taille) || isNaN(year)) {
    return "Error";
  }
  else {
    taille = parseFloat(taille);
    year = parseFloat(year);
    var resultat = taille * 2;
    resultat = resultat + 5;
    resultat = resultat * 50;
    resultat = resultat - year;
    resultat = resultat + 1766;
    return resultat;
  }
}
function resultat(){
  alert(affichagedesire());
}
