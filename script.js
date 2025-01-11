// let reponse = confirm("voulez vous un pain?");
// console.log(reponse);
// if (reponse == true){
//     console.log("Bon appetit");
// }
// else {
//     console.log("dommage");
// }
// FONCTION PROMPT sert a afficher une barre dans laquelle vous repondez a la question posée
// let reponse = prompt("Entrez votre pays");
// console.log(reponse);
// let b = 0;
// while(b < 3){
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
// De 0 et 1000
// for(let r = 0; r <= 1000; r = r+8){café
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
// cas des fonctions declaration
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
// // creation de 4 variables

// let age = 37;
// let nom = "Tanoh";
// let année = 2025;
// let profession = "Developpeur";

// let age2;
// age2 = 43;
// let nom2;
// nom2 = "Romaric";
// let année2;
// année2 = 2030;
// let profession2;
// profession2 = "Informaticien";

// cas des variables objets avec Attribut: sous valeur d'un objet
let personne = {
    age:37,
    nom:"Tanoh",
    profession: "Developpeur",
    année: 2025
};
console.log(personne);

let personne1 = {
    age:40,
    nom:"Romaric",
    profession: "Informaticien",
    année: 2030
};
console.log(personne1.profession);