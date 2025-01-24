// FONCTION CONFIRM sert a afficher des reponses de façon booléennes(vrai ou faux)
//  let reponse = confirm("voulez vous un pain?");
//  console.log(reponse);
// if (reponse == true){
// console.log("Bon appetit");
//  }
//  else {
//     console.log("dommage");
// }
// FONCTION PROMPT sert a afficher une barre dans laquelle vous repondez a la question posée
// let reponse = prompt("Entrez votre pays");
//  console.log(reponse);
// if (reponse == "Cote D'ivoire"){
//     console.log("AKWABA");
// }
// else{
//     console.log("pas le bienvenu");
// }

// cas avec switch il faut mettre le break afin de bloquer la chaine
//  let r = prompt("Quelle boisson voulez-vous?");

//  switch(r){
   
//    case "Café":
//          prompt("Combien de sucre voulez-vous?");
//         break;
//    case "Soda":
//         break;
//    case "Eau":
//         prompt("La voulez-vous fraiche?");
//         break;
//    case "Rien":
//         prompt("Voulez-vous manger?");
//         break;
//  // le default est utilisé lorsque aucun des cas précités ne correspond à la réponse
//             default:        
//             alert("Nous n'avons pas ça ici");
//  }

// // la boucle "WHILE"
//  let b = 0;
//  while(b < 3){
//     console.log("Bonjour");
//     console.log("Bonjour 2");
//     console.log("Bonjour 3");
//     console.log("Bonjour 4");
//      b = b+1;
// }

// Afficher les nombres de 0 à 10 avec la boucle while
// let b = 0;
//  while(b <= 10){
//      console.log(b);
//      b = b + 1;
//  }

// cas ou l'on veut trouver les multiples de 2 qui se trouve entre 0 et 100
//  let b = 0;
//  while(b<100){
//      if(b%2 == 0){
//          console.log(b);
//    }
//     b = b+1;
//  }

//   cas ou l'on veut trouver les nombres entre 23 et 533
//  let r = 23
//  while(r <= 533){
//      console.log(r);
//      r = r +1;
//  }

// cas ou on utilise la boucle "FOR" il se presente en reduisant le while en une ligne comme ceci
//  for( let i=23; i<=534; i = i +1){
//     console.log(i);
//  }

//  cas ou on veut afficher les multiples de 8 qui se trouve entre 0 et 1000

//  for(let r = 0; r <= 1000; r = r+8){
//      console.log(r);
// }

 

// cas des fonctions 
// declaration

//  function addition(x,y){
//     let resultat = x+y;
//     return resultat;
// }
// // // Appel
//  let r = addition(2,3);
//  console.log(r);

//  console.log(addition(7,5));
    
// // // Fonction trouve nombre le plus grand
//  function plusGrand(a,b){
//     if(a > b){
//          return a;
//       }
//      else{return b}
//  }
// // console.log(plusGrand(-20, -5));

// // // fonction comme une variable
// let f = plusGrand;
//  console.log(f(8,2));

// Creation de 4 variables

//   let age = 37;
//   let nom = "Tanoh";
//   let année = 2025;
//   let profession = "Developpeur";

//   let age2;
//   age2 = 43;
//   let nom2;
//   nom2 = "Romaric";
//   let année2;
//   année2 = 2030;
//   let profession2;
//   profession2 = "Informaticien";

//  cas des variables objets avec Attribut: sous valeur d'un objet

//   let personne = {
//     age:37,
//     nom:"Tanoh",
//     profession: "Developpeur",
//     année: 2025
//   };

//   console.log(personne);

//   let personne1 = {
//     age:40,
//     nom:"Romaric",
//     profession: "Informaticien",
//     année: 2030
//  };
//   console.log(personne1);
//   personne1.profession = "photographe";
//   console.log(personne1.profession);
    
//   let ob = {
//          a:"roma",
//          b:"ange",
//       };
//   console.log(ob);
//   console.log(ob.a);

// cas des variables objets lorsqu'on copie un objet dans un autre
//  let o1 = {
//        n:"Roma",
//   }
//    let o2 = {
//         m : "Ange",
//              ...o1
//  }
//   console.log(o2);

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
//      nom : "koffi",
//      prenom : "kouakou",
//      classe : "1èreD"
//   };
// console.log(élève);
// console.log(élève.nom);
// console.log(élève.classe);

// let élève1 = {
//      nom : "kouakou",
//      prenom : "kouadio",
//      classe : "3ème"
//   };
// console.log(élève1);

//   let élève2 = {
//     nom : "kouame",
//     prenom : "kouassi",
//     classe : "Terminale"
//   };
// console.log(élève2);

// cas des listes
 
//  let fruits = [
//      "Mangue", "Orange", "Ananas","Banane","Papaye","Raisin"
//   ];
//  console.log(fruits);
//  console.log(fruits[0]);
//  console.log(fruits[1]);
//  console.log(fruits[2]);
//  console.log(fruits[3]);
//  console.log(fruits[4]);
//  console.log(fruits[5]);

 // PUSH permet d'ajouter un nouveau element a la liste
//   fruits.push("Pomme");
//   console.log(fruits);

// // POP permet de retirer un element de la liste surtout le dernier element et a chaque fois qu'on met un pop ça retire au fur et à mesure.
//   fruits.pop();
//   fruits.pop();
//   fruits.pop();
//   console.log(fruits)

// LENGTH donne la longueur de la liste
//  console.log(fruits.length);

//  Afficher une liste d'elements de 0 à 998
//     let liste = [];
//     for (let i = 0; i < 999; i=i+1){
//     liste.push(i);
//   }
//   console.log(liste);

//  Autre Methode
//  let Liste = [0,1,2,3,4,9,7,3];
//   for (let x = 0; x < Liste.length; x=x+1){
//     console.log(Liste[x]);
//   }
  

// Fonction qui dit si un nombre est premier

//  function verifierPremier(n){
//      if(n == 0 || n == 1){
//           return false;
//       }
 
//   else{
//       let i = 2;
//       while(i < n){
//           if(n%i == 0){
//               return false;
//           }
//           i = i + 1;
//       }
//       return true;
//   }
//  }
//    console.log(verifierPremier(10));

// cas avec le FOR les nombres premiers entre 0 et 1000.

//  function estPremier(n){
//  if(n == 0 || n == 1){
//      return false
//  }
//  else{
//     for(let i = 2; i <= n-1; i++){
//          if(n%i == 0){
//              return false
//          }
//      }
//      return true;
//  }
//  }
//  for(let i =1; i < 1000; i = i+1){
//     let r = estPremier(i);
//     if(r == true){
//         console.log(i + " est premier")
//     }
//     else {
//         console.log(i + " n'est pas premier")
//     }
//  }


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
// let Chasse = ["Agouti","Singe","Biche","Rat","Gazelle","Pangolin"];
// console.log(Chasse);
// console.log(Chasse[0]);
// console.log(Chasse[Chasse.length -1]);
// Chasse[3] = "Pigeon"; // changement l'element Rat en Pigeon
// console.log(Chasse);

// // Retirer deux elements et ajouter un nouveau element
// Chasse.pop();
// Chasse.pop();
// console.log(Chasse);
// Chasse.push("Phacochère");
// console.log(Chasse);

// // afficher chaque element de notre liste
// let c = 0;
// while(c <= Chasse.length-1){
// console.log(Chasse[c]);
// c = c + 1;
// }
// // autre methode pour afficher la listeg
// let a = 0;
// while(!(a >= Chasse.length)){
// console.log(Chasse[a]);
// a = a + 1;
// }

// Insérer une fonction dans un objet: les méthodes

// let o = {
//     a: 2,
//     b: 4,
//     c: function f(){
//         console.log("c'est moi la fonction");
//     }
// };

// o.c();
// console.log(); // affiche l'inscription de la fonction
// console.log(o.c); // affiche la fonction toute entière

// let s = "Hello";
// console.log(s.length); // en fonction du type de valeurs il y'a des méthodes rattachées tel que le Length
// console.log(s.toLocaleUpperCase()); // methode pour mettre en majuscule sur un string
// console.log(s.toLowerCase()); // methode pour mettre en miniscule sur un string
// console.log(s.split()); // transforme une chaine de caractere en liste
// console.log(s.split("e")); // il divise la chaine de caractere en plusieurs partie par rapport a l'element selectionné

// let y = "je bois de l'eau avec un gobelet";
// console.log(y.split(" "));


// // l'objet Math
// let b = Math.round(2.9); // arrondi les chiffres
// console.log(b);
// console.log(Math.random()); // affiche un nombre au hasard
// console.log(Math.max(1,9,3,5,7)); // affiche le plus grand nombre dans une liste
// console.log(Math.min(1,9,3,5,7)); // affiche le plus petit nombre dans une liste

// Exercices
// function addition(x,y){
//     let resultat = x+y;
//     return x+y;
    //on aurait pu ecrire directement return a+b sans mettre le let resultat
// }
// let r = addition(5,2);
// console.log(r);

// function afficher5foisBonjour(){
//    for(let i = 0; i < 5; i =i+1 ){
//     console.log("bonjour");
//    }
// }
// afficher5foisBonjour();

// let liste = [1, "foutou", 5, false];
// console.log(liste[0]);
// console.log(liste[1]);
// console.log(liste[2]);
// console.log(liste[3]);

// methode plus simple
// for(let i = 0; i <= 3; i++){
//     console.log(liste[i]);
// }
// on aurait pu remplacer le "3" par (liste.length - 1)
// for(let m = 0; m <= liste.length - 1; m++){
//     console.log(liste[m]);
// }

// let liste = [1,3, 5,7,9,15];
// faire la somme
// let somme = 0;
// for(let i = 0; i <= liste.length - 1; i++){
//     somme = somme + liste[i];
// }
// console.log(somme);

// let i = 5;
// console.log(`Le nombre est ${i}`)// associer des chaines de caractère

// console.log(typeof(true)); // sert a donner le type de la valeur
// console.log(typeof(5));
// console.log(typeof("voiture"));
// console.log(typeof({}));
// console.log(typeof([]));
// console.log(typeof(`ABC ${i}`));

// let a = "Hello";
// console.log(typeof a);
// if(typeof a == "number"){
//     console.log("c'est un nombre")
// }
// else{
//     console.log("c'est pas un nombre")
// }

// let b = [2,3,4,5,6];
// console.log(typeof b);
// if(typeof b == "number"){
//     console.log("c'est un nombre")
// }
// else{
//     console.log("c'est pas un nombre")
// }

// let c = [2,3,4,5,6];
// console.log(Array.isArray(c)); // permet de verifier le type d'une liste

// let d = [ a, a]

// console.log(Array.isArray(d));

// let type = typeof d;

// if(type == "string"){
//     console.log("chaine de caractère");
// }
// else if(type == "number"){
//     console.log("nombre");
// }
// else if(type == "boolean"){
//     console.log("Boolean");
// }
// else if(type == "object"){
//     if(Array.isArray(d) == false){
//         console.log("Objet");
//     }
//     else(
//         console.log("liste")
//     )
// }

// LES BOUCLES FOR IN ET FOR OF

// let l2 = ["abc", "def", "ghi"];
// for( let i = 0; i < l2.length; i++){
//     console.log(l2[i]);
// }

// "FOR IN" : parcours les clés de la liste

// for(let i in l2){
//     console.log(l2[i]);
// }

// "FOR OF" : donne les differentes valeurs de la liste

// for(let j of l2){
//     console.log(j);
// }

// 

// let nums = [];
// function sumOfCubes(nums) {
// 	let sumOfCubes = 0;
// 	for(let i=0; i< nums.length; i = i+1 ){
// 		sumOfCubes += nums[i]*nums[i]*nums[i];
// 	}
//     return sumOfCubes;
// }

// let a = sumOfCubes([3,2]);
// console.log(a);

// function minMax(arr) {
// 	let minimum = arr[0];
// 	let maximum = arr[0];
// 	for(let i =0; i < arr.length; i = i+1){
// 		if(arr[i] < minimum ){
// 			minimum = arr[i];
// 		}
//         else if(arr[i] > maximum){
//             maximum = arr[i];
//         }
// 	}
// 	return [minimum,maximum];
// }

// let b = minMax([2,9,6,7,15]);
// console.log(b);

// function filterArray(arr){
//      let b = [];
//      for(let i = 0; i < arr.length; i++){
//         if (typeof arr[i] == typeof 0){
//             console.log(arr[i]);
//              b.push(arr[i]);
//         }

//      }
//      return b;
// }
// console.log(filterArray(["1",2,"bob",7]));

// function isSymmetrical(num) {
// 	let number = num.toString();
// 	if( number === number.split('').reverse().join('')){
// 		return true;
// 	}
// 	else{return false}
// }
// console.log(isSymmetrical(565));

// function isSpecialArray(arr) {
//     for(let a = 0; a < arr.length; a++){
//         if(a%2 === 0 && arr[a]%2 !== 0){
//              return false;
//         }
//         if(a%2 !== 0 && arr[a]%2 === 0){
//             return false;
//         }
//     }
// 	return true;
// }
// console.log(isSpecialArray([2,7,9,1,6,6,3]));


// function compterTrue(tab) {
//     return tab.filter(element => element === true).length;
// }
// console.log(compterTrue([true,true,true ,false,true]));


// function objectToARRAY(obj) {
//     return Object.entries(obj);
// }

// function arrayOfMultiples(num, length) {
//     let result = [];
//     for (let i = 1; i <= length; i++) {
//         result.push(num * i);
//     }
//     return result;
// }
// console.log(arrayOfMultiples(7,5));

// function verifierMarathon(d) {
  
//     if (!d || d.length === 0) {
//         return false;
//     }

//     // Convertir les éléments négatifs en positifs et calculer la somme
//     const total = d.reduce((acc, d) => acc + Math.abs(d), 0);

//     // Vérifier si la somme est égale à 25
//     return total === 25;
// }
// console.log(verifierMarathon([-6,15,4]));

// Ecris une fonction javascript nommée dollarVersFCFA qui convertit une somme d'argent du DOLLAR vers le FCFA 1 DOLLAR = 630 FCFA

// function dollarVersFCFA(argent){
//     let resultat = argent * 630;
//     return resultat;
// }
// console.log(dollarVersFCFA(10));

// Ecris une fonction javascript qui vérifie s'il y a au moins deux nombres dans une liste

// function verifier(liste){
//     let compt = 0;
//     for(let j =0; j < liste.length; j++){
//         if(typeof liste[j] == "number"){
//             compt = compt + 1
//         }
//         if(compt>=2){
//             return true
//         }
//     }
//     return false;
// }
// console.log(verifier([1,2,"mais","pistolet",100]));

// deuxieme methode FOR OF
// let compt = 0;
//     for(let j of liste){
//         if(typeof j == "number"){
//             compt = compt + 1
//         }
//         if(compt>=2){
//             return true
//         }
//     }
//     return false;

// fonction addition

// function addition (x,y){
//     return x+y;
// }
// console.log(addition(5,6));

// autres methodes d'afficher une fonction comme une variable
// const addition = (x,y) => {
//     return x+y;
// }
// console.log(addition(5,6));

// const afficherBonjour = () => {
//     console.log("BONJOUR");
// }

// setTimeout(() => {
//     console.log("BONJOUR");
// }, 2000);

// setInterval(() => {
//     console.log("BBBONJOUR");
// }, 1000);

// const multiplication = (a,b) => {
//     return a*b;
// }

// function garderOuPas(element){
//     if(element == 2){
//         return false;
//     }
//     else{
//         return true;
//     }
// }
// let L = [2,4,4,6,2,"2",2];
// let L2 = L.filter(garderOuPas);
// console.log(L2);

// autre ecriture
// function garderOuPas(element){
//     return !(element == 2); // utlise cette methode lorsqu'on a un if return false et un else return true
// }
// let L = [2,4,4,6,2,"2",2];
// let L2 = L.filter(garderOuPas);
// console.log(L2);

//  methode fleché
// const garderOuPas = ((element) => {
//     return !(element == 2);    // pas besoin d'ecrire cette partie, on peut passer directement a l'ecriture suivante

// });

// let L = [2,4,4,6,2,"2",2];
// let L2 = L.filter((element) => {
//     return !(element == 2);
// });
// console.log(L2);

const l = ["abc",true,"2",3,4];
function verifNombre(l){
    const l2 = l.filter((e) => {
        return (typeof e == "number");
    });
    return (l2.length >= 2);
}
console.log(verifNombre(l));