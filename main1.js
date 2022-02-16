var tableau = document.getElementById("notes");
var tri = document.getElementById("tri")
var resultat = document.getElementById("nbr")
var nbr = 0
var i = 0;


var thead = document.getElementById("thead")
var thead2 = document.getElementById("thead2")
var thead3 = document.getElementById("thead3")
//tableau de notes

var T = [];
var T2 = []
var names =[]
var names2 =[]
var rows = ["row","row2","row3","row4","row5","row6","row7","row8"]
var tris = ["tri1","tri2","tri3","tri4","tri5","tri6","tri7","tri8"]
var tris_noms = ["n1","n2","n3","n4","n5","n6","n7","n8"]
var contents=["content","content1","content2","content3","content4","content5","content6","content7","content8"]




function Affichage(){
    while(i<=7){
        names[i]=prompt("Donner le nom de l'étudiant "+ i+ ": ")
        T[i]=parseFloat(prompt("Donner la note de l'étudiant "+ i+ ": "))
        i+=1
    }

    for(i=0;i<contents.length;i++){
        contents[i] = "<td> "
    }
    thead.innerHTML= "<tr> <td>Prenom</td> <td>Notes</td>  </tr>"
    for(i=0; i<T.length;i++){
        contents[i] = contents[i] + names[i]+"</td> <td> "+ T[i]+ "</td> <td>"
        document.getElementById(rows[i]).innerHTML=contents[i]
    }
}

function Sup10(){
    for (i=0; i<T.length;i++){
        if(T[i]>=10){
            nbr=nbr+1
        }
    }
    resultat.innerHTML = "Nombre d'eleves superieur à 10 : "+ nbr
}
function Max(){
    let max = 0
    for (i=0; i<T.length;i++){
        if(T[i]>max){
            max = T[i]
        }
    }
    document.getElementById("max").innerHTML="La note maxi =>:"+ max
}

function Moy(){
    let somme = 0
    let moy =0
    for (i=0; i<T.length;i++){
        somme = somme + T[i]
    }
    moy = somme/T.length
    document.getElementById("moyy").innerHTML="La moyenne des notes est :"+ moy
}

function Recherche(){
    let X = parseFloat(prompt("Donner la note cherchée :"))
    if(T.indexOf(X)<0){
        document.getElementById("X").innerHTML="Note non trouvée"

    }else{
        document.getElementById("X").innerHTML="La note cherchée est d'indice :"+T.indexOf(X)
    }
}

function TriBulle(){
    let tab = []
    for(i=0; i<T.length;i++){
        tab[i] =T[i]
    }
    T.sort(function(a, b){return a-b});
    for(i=0; i<T.length;i++){
        T2.push(T[i])
        names2[i]= names[tab.indexOf(T2[i])]
    }
    for(i=0;i<contents.length;i++){
        contents[i] = "<td> "
    }
    thead2.innerHTML= "<tr> <td>Prenom</td> <td>Notes</td>  </tr>"
    for(i=0; i<T.length;i++){
        contents[i] = contents[i] + names2[i]+"</td> <td> "+ T2[i]+ "</td> <td>"
        document.getElementById(tris[i]).innerHTML=contents[i]
    }
}

function TriNom(){
    let tri_noms = []
    for(i=0;i<names.length;i++){
        tri_noms [i] = names[i]
    }
    names.sort()
    for(i=0;i<names.length;i++){
        names2.push(names[i])
        T2[i]= T[tri_noms.indexOf(names2[i])]
    }
    for(i=0;i<contents.length;i++){
        contents[i] = "<td> "
    }
    thead3.innerHTML= "<tr> <td>Prenom</td> <td>Notes</td>  </tr>"
    for(i=0; i<T.length;i++){
        contents[i] = contents[i] + names2[i]+"</td> <td> "+ T2[i]+ "</td> <td>"
        document.getElementById(tris_noms[i]).innerHTML=contents[i]
    }

}
