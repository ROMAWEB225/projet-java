// FONCTION CONFIRM sert a afficher des reponses de façon booléennes(vrai ou faux)
//  let reponse = confirm("voulez vous un pain?");
//  console.log(reponse);
//  if (reponse == true){
//  console.log("Bon appetit");
// }
// else {
//     console.log("dommage");
// }
// FONCTION PROMPT sert a afficher une barre dans laquelle vous repondez a la question posée
// let reponse = prompt("Entrez votre pays");
//  console.log(reponse);


// let b = 0;
//  while(b < 3){
//     console.log("Bonjour");
//     console.log("Bonjour 2");
//     console.log("Bonjour 3");
//     console.log("Bonjour 4");
//     b = b+1;
// }
// let b = 0;
// while(b < 3){
//     console.log(b);
//     b = b + 1;
// }
// cas ou on prend 100 avec une condition avec le "while"
// let b = 0;
// while(b<100){
//     if(b%2 == 0){
//         console.log(b);
//     }
//     b = b+1;
// }
// let r = 23
// while(r <= 533){
//     console.log(r);
//     r = r +1;
// }
// cas ou on utilise le "for" il se presente en reduisant le while en une ligne comme ceci
// for( let i=23; i<534; i = i +1){
//     console.log(i);
// }

// for( let a = 0; a%8 ==0 && a<1001; a = a+1){
//     if(a%8 == 0){
//            console.log(a)
//     }
    
// }
// for (let i = 0; i <= 1000; i += 8) { 
//     console.log(i);
//   }
//   for (let i = 0; i <= 1000; i++) {
//    if (i % 8 === 0) {
//       console.log(i);
//   }
//   }
//   affiche tous les multiples de 8
// De 0 à 1000
// for(let r = 0; r <= 1000; r = r+8){
//     console.log(r);
// }

// let r = prompt("Quelle boisson?");

// if(r == "Café"){
//     prompt("combien de sucre?");
// }
// else if(r == "soda"){
//     prompt("fanta ou coca?");
// }
// else if(r == "eau"){
//     prompt("Fraiche?");
// }
// else if(r == "Rien"){
//     prompt("Voulez-vous mangerCafé?");
// }
// cas avec switch il faut mettre le break afin de bloquer la chaine
// let r = prompt("Quelle boisson voulez-vous?");
// switch(r){
//     case "Café":
//         prompt("Combien de sucre voulez-vous?");
//         break;
//     case "Soda":
//         break;
//     case "Eau":
//         prompt("La voulez-vous fraiche?");
//         break;
//     case "Rien":
//         prompt("Voulez-vous manger?");
//         break;
//         // le default est utilisé lorsque aucun des cas précités ne correspond à la réponse
//             default:        
//             alert("Nous n'avons pas ça ici");
// }
// cas des fonctions 
// declaration

// function addition(x,y){
//     let resultat = x+y;
//     return resultat;
// }
// // Appel
// let r = addition(2,3);
// console.log(r);

// console.log(addition(7,5));
    
// // Fonction trouve nombre le plus grand
// function plusGrand(a,b){
//     if(a > b){
//         return a;
//     }
//     else{return b}
// }
// console.log(plusGrand(-20, -5));
// // fonction comme une variable
// let f = plusGrand;
// console.log(f(8,2));

// Creation de 4 variables

//  let age = 37;
//  let nom = "Tanoh";
//  let année = 2025;
//  let profession = "Developpeur";

//  let age2;
//  age2 = 43;
//  let nom2;
//  nom2 = "Romaric";
//  let année2;
//  année2 = 2030;
//  let profession2;
//  profession2 = "Informaticien";

//  cas des variables objets avec Attribut: sous valeur d'un objet
// let personne = {
//   age:37,
//   nom:"Tanoh",
//   profession: "Developpeur",
//   année: 2025
// };
//  console.log(personne);

// let personne1 = {
//    age:40,
//    nom:"Romaric",
//    profession: "Informaticien",
//    année: 2030
    //ob: {
    //     a:"roma",
    //     b:"ange",
    //   }
// };
// personne1.profession = photographe;
//  console.log(personne1.profession);
 // console.log(Personne1.ob.a);

// cas des variables objets lorsqu'on copie un objet dans un autre
//  let o1 = {
//         n:"Roma",
//  }
//  let o2 = {
//        m : "Ange",
//            ...o1
// }
// console.log(o2);

// stockez ces informations en utilisant 3 variables

// let nom = "koffi";
// let prenom = "kouakou";
// let classe = "1èreD";

// let nom1 = "kouakou";
// let prenom1 = "kouadio";
// let classe1 = "3ème";

// let nom2 = "kouame";
// let prenom2 = "kouassi";
// let classe2 = "Terminale";

// let élève = {
//     nom : "koffi",
//     prenom : "kouakou",
//     classe : "1éreD"
//  };

// let élève1 = {
//     nom : "kouakou",
//     prenom : "kouadio",
//     classe : "3ème"
//  };

//  let élève2 = {
//    nom : "kouame",
//    prenom : "kouassi",
//    classe : "Terminale"
//  };

// cas des listes
 
// let fruits = [
//     "Mangue", "Orange", "Ananas","Banane","Papaye","Raisin"
// ];
// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits[4]);

// PUSH permet d'ajouter un nouveau element a la liste
// fruits.push("Pomme");

// POP permet de retirer un element de la liste surtout le dernier element et a chaque fois qu'on met un pop ça retire au fur et à mesure.
// fruits.pop();
// fruits.pop();
// fruits.pop();
// console.log(fruits)

// LENGTH donne la longueur de la liste
// console.log(fruits.length);

// let liste = [];
// for (let i = 0; i < 999; i++){
//     liste.push(i);
// }
// console.log(liste);

// for (let i = 0; i < liste.length; i++){
//     console.log(liste[i]) };
// Fonction qui dit si un nombre est premier

// function verifierPremier(n){
//     if(n == 0 || n == 1){
//         return false;
//     }
 
// else{
//     let i = 2;
//     while(i < n){
//         if(n%i == 0){
//             return false;
//         }
//         i = i + 1;
//     }
//     return true;
// }
//  }
//  console.log(verifierPremier(10));

//  Trouver tous les nombres premiers entre 0 et 10000.
// for(a = 0; a < 10000; a = a +1){
//     if(verifierPremier(a)){
//         console.log(a);
//     }
// }

//  let éleves =[
//      {nom : "koffi", prenom : "kouakou", classe : "1éreD"},
//      {nom : "kouakou", prenom : "kouadio", classe : "3ème"},
//      {nom : "kouame", prenom : "kouassi", classe : "Terminale"},
// ];
//  console.log(éleves);

// stocker cettte liste dans une variable [3,6,8,4,2]; faire la somme des élements

// let chiffres =[3,6,8,4,2];
// console.log(chiffres);

//  function somme(a,b,c,d,e){
//       let resultat=a+b+c+d+e ;
//       return resultat;
//  }
//  let r = somme(3,6,8,4,2);
//  console.log(r)
   
//  let chiffres = [3,6,8,4,2];
//  let addition = 0;
//  for(let i =0; i < chiffres.length; i++){
//     addition = addition + chiffres[i];
// }
// console.log(addition);

// faire la moyenne

// console.log(addition);
// let moyenne = addition /chiffres.length;
// console.log(moyenne);

// faire une fonction qui trouve le plus pétit élement d'une liste[-2,1,4]
//  let liste = [-2,1,4];
// function plusPetit(liste){
//     let petit = liste[0];
//     for(let i = 0; i < liste.length; i = i+1){ 
//         if(liste[i] < petit){
//             petit = liste[i];
//         }
//      }
//     return petit;
// }
// console.log(plusPetit(liste));

// STOCKER CETTE LISTE (Hello,2,3,Bonjour) DANS UNE VARIABLE
// let Liste1 = [5, 6, 7,"false"]
// cas ou on fusionne deux listes à savoir Liste1 dans Liste.
// let Liste = ["Hello",2,3,"Bonjour",...Liste1];

// console.log(Liste[Liste.length-1]);
// console.log(Liste.length);
// console.log(Liste);

// cas ou une liste contient des listes
// let Liste3 = [2,[[8,1,9]]];
//  console.log(Liste3[1][0][0]);  //cas ou on veut afficher le 8

//  let Liste4 = [5, 8, 10, 20, 9];
//  cas ou on affiche chaque element de facon repeter NON CONSEILLE
//  console.log(Liste4[0]);
//  console.log(Liste4[1]);
//  console.log(Liste4[2]);
//  console.log(Liste4[3]);
//  console.log(Liste4[4]);

// CAS OU ON UTILISE LA BOUCLE WHILE et FOR pour afficher de 5 à 9
// let Liste4 = [5, 8, 10, 20, 9];
// let i = 0;
// while(i < Liste4.length){
//     console.log(Liste4[i]);
//     i = i + 1;
// }

// for(let x = 0; x < Liste4.length; x = x +1){
//     console.log(Liste4[x]);
// }

// CAS OU ON UTILISE LA BOUCLE WHILE et FOR pour afficher de 9 à 5

// let Liste4 = [5, 8, 10, 20, 9];
// let k = Liste4.length - 1;
// while(k >= 0){
//     console.log(Liste4[k]);
//     k = k - 1;
// }

// for(let k = Liste4.length - 1; k >= 0; k = k - 1){
//     console.log(Liste4[k]);
// }

// Faire +100 à chaque element de Liste4

// let Liste4 = [5, 8, 10, 20, 9];
//  let i = 0; //0 correspond au debut de la liste
//  while(i < Liste4.length){
//      console.log(Liste4[i] + 100);
//      i = i + 1;
//  }

//  for(let x = 0; x < Liste4.length; x = x +1){
//      console.log(Liste4[x] + 100);
//  }

// Autre methode Prof
// let Liste4 = [5, 8, 10, 20, 9];
// let j = 0;
// while(j < Liste4.length){
//     Liste4[j] = Liste4[j] + 100;
//     j = j + 1;
// }
// console.log(Liste4);

// Remplacez chaque element de Liste4 par 0

// let Liste4 = [5, 8, 10, 20, 9];
// let j = 0;
// while(j < Liste4.length){
//     Liste4[j] = Liste4[j] * 0;
//     j = j + 1;
// }
// console.log(Liste4);

// Créer une liste de 6 élements , afficher le premier element, afficher le dernier element
let Chasse = ["Agouti","Singe","Biche","Rat","Gazelle","Pangolin"];
console.log(Chasse);
console.log(Chasse[0]);
console.log(Chasse[Chasse.length -1]);
Chasse[3] = "Pigeon"; // changement l'element Rat en Pigeon
console.log(Chasse);

// Retirer deux elements et ajouter un nouveau element
Chasse.pop();
Chasse.pop();
console.log(Chasse);
Chasse.push("Phacochère");
console.log(Chasse);

// afficher chaque element de notre liste
let c = 0;
while(c <= Chasse.length-1){
console.log(Chasse[c]);
c = c + 1;
}
// autre methode
let a = 0;
while(!(a >= Chasse.length)){
console.log(Chasse[a]);
a = a + 1;
}