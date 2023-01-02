/*  @author: Akou jean vivien
 */



// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

let word = prompt(" entrez un mot")

function isBlank(word) {
    
word.includes(" ")   // retourn true si la chaine est vide 
return word.includes(" ")
}
CheikBlank(word)
// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.
let str1 = prompt("votre nom et prenom")
 function abreviation(str) {
    var names_split = str1.split(" ");// transforme la chaine en plusieurs sous chaines enregistrer dans un tableau
    if (names_split.length > 1) {
        return `${names_split[0]}  ${names_split[1].charAt(0)}.`
// recupere la sous chaine a l'index 1 auqeuelle est ajouter le caractere de la sous chaine a l'index 1 suivit d'un point
    }
};
abreviation(str1)

// console.log(abbrevName("Robin Singh")); --> "Robin S."


// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

const chaine = "bonjour je suis bien heureux";

let chaine_split = chaine.split(" ");//de coupe la chaine en remplacant les espaces vites par une virgule
for (var i = 0; i < Maj.length; i++) {
//chartAt(0) renvoi la lettre se positionnant a l'indice specifier ici a l'indice 0
//touppercase converti en majuscule les chaines de caracteres
//slice(1) renvoi le rest du texte a partir de l'index selectionner ici 1
//oUpperCase() renvoi le reste de la chaine en majuscule
chaine_split[i] = chaine_split[i].charAt(0).toLowerCase()+ chaine_split[i].slice(1).toUpperCase()
}
console.log(Maj)
//converti en une chaine unique tous les elements contenu dans un tableau en y ajoutant des espces selon le paramettre selectionner 
let str = chaine_split.join(" ");
console.log(str)