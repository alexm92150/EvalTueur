/*le tueur Jason est en cavale, il se cache qlq part en foret pdt qu'une équipe le cherche.
Jason à 100pts de vie
Les persos ont besoins de caractéristiques bien clichées
une proba de mourir, une de mettre des dégats et une de mourir en mettant des dégats
Il nous faut 5 survivants avec un nom et une caractéristique qui pop aléatoirement d'un tableau

Tant que le tueur n'est pas mort/pas tué par les survivants:
Le tueur attaque un des survivants:
    - soit le survivant meurt
    - soit le survivant esquive et inflige 10 pts de dégats
    - soit le suvivant inflige 15 pts de dégats et meurt

Les morts seront affichés à la fin, il faut un message pour chaque action*/


//j'vais pas vous mentir, avec 4 jours de javaScript en partant de 0, l'éval est un peu abusé quand meme :(
"use strict"

//création des variables nom, cara, proba dans des tableaux
let nom=["Scooby", "Sammy", "Fred", "Daphné", "Vera"];
let caractéristiques=["glouton", "golmon", "beaugoss", "coquette", "cerveau"];
let proba=[[0.2, 0.1, 0.5], [0.2, 0.3, 0.2], [0.2, 0.2, 0.3], [0.4, 0.1, 0.1], [0.2, 0.3, 0.4]];

let tueur=["Jason"];

//création d'une classe "perso" pour attribuer tout les éléments à nos personnages$
class Perso {
    
    constructor(nom, caracteristiques, probaAttack, probaDead, probaDeadAttack) {
      this.nom = nom; //on attribue le nom de notre perso
      this.caracteristiques = caracteristiques; //sa caractéristique
      this.probaAttack = probaAttack; //sa proba d'attaquer
      this.probaDead = probaDead; //sa proba de mourir
      this.probaDeadAttack = probaDeadAttack; //sa proba d'attaquer, puis de mourir
    }
}

//variable aléatoire pour selectionner un perso random, une proba random, etc
let survivantAleatoire = Math.floor(Math.random() * prenom.length);
let probaAleatoire = Math.floor(Math.random() * proba.length);
let caractéristiquesAleatoire = Math.floor(Math.random() * caractéristiques.length);

//fonction pour que le tueur attaque
function attaqueJason(survivantAleatoire){

}
//je n'arrive pas à faire en js ce que j'ai en tête mais j'essaie de :
/* créer une fonction "attaque" qui selectionnera au hasard un prenom, une caractéristique et une proba dans les tableau du dessus
selon le resultat, créer une condition 'if survivantAleatoire < valeur de probaDead', alors l'afficher dans la console
avec console.log('Jason à tué, survivantAleatoire[nom]');

ensuite, else if survivantAleatoire < probaAttack, afficher : console.log('survivantAleatoire[nom] inflige 10pts de degats à Jason');

puis else if survivantAleatoire < probaDeadAttack, afficher : console.log('survivantAleatoire[nom] inflige 15pts de degats à Jason mais meurt des suites de ses blessures');


Créer une fonction de combat pour définir quand un perso meurt ou non
Et créer une boucle, tant que survivant >=1 le tour suivant s'actionne

Afficher en fonction avec un console.log si des perso meurt, sinon afficher le nombre de dégats recu par jason avec la fonction précedente.

Boucle tant que au moins un perso est en vie ou que Jason n'est pas tombé à 0 pts de vie et afficher le résultat dans la console.


(désolé de finir en commentaire mais même en s'aidant de google, avec juste 4 demi journée c'est trop trop dur) */