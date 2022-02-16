
var tableau = document.getElementById("note");
var roww = document.getElementById("row")
var tri = document.getElementById("tri")
var resultat = document.getElementById("nbr")
var nbr = 0
var i = 0;


var T = [15, 17, 3, 10, 30, 10, 2, 18, 12, 28];
var T2 = []


function Affichage(){
    var content = "<td> "
    for(i=0; i<T.length;i++){
        content = content + T[i] + "</td> <td>"
        roww.innerHTML = content
    }

}

function Su(){

    for (i=0; i<T.length;i++){
        if(T[i]>=10){
            nbr=nbr+1
        }
    }
    resultat.innerHTML = "Nombre d'eleves superieur à 10 : "+ nbr
}

function Moyenne(){
    let somme = 0
    let moy =0
    for (i=0; i<T.length;i++){
        somme = somme + T[i]
    }
    moy = somme/T.length
    document.getElementById("moy").innerHTML="La moyenne des notes = :"+ moy
}

function Max(){
    let max = 0
    for (i=0; i<T.length;i++){
        if(T[i]>max){
            max = T[i]
        }
    }
    document.getElementById("max").innerHTML="La note maxi = :"+ max
}

function Recherche(){
    let X = parseFloat(prompt("La note => :"))
    if(T.indexOf(X)<0){
        document.getElementById("X").innerHTML="Note non trouvée"

    }else{
        document.getElementById("X").innerHTML="La note cherchée est d'indice :"+T.indexOf(X)
    }
}

function TriBulle(){
    var content = "<td> "
    T.sort(function(a, b){return a-b});
    for(i=0; i<T.length;i++){
        T2.push(T[i])
    }
    for(i=0; i<T.length;i++){
        content = content + T2[i] + "</td> <td>"
        tri.innerHTML = content
    }
}
