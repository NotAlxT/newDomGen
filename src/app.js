/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //declaring our variable for the domgenerator
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = ["uk", "cl", "us", "io"];
  // setting a string to be the loop of every variable
  let s1 = "";
  //creating a loop to run all of our possible outcomes
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          //combining all of out elements into the sting in order
          //The \n is for starting on a new line every single loop
          s1 += pronoun[i] + adj[j] + noun[k] + "." + dom[l] + "\n";
          //console.log(pronoun[i] + adj[j] + noun[k] + "." + dom[l]);
        }
      }
    }
  }

  document.querySelector("#domGen").innerHTML = s1;
};
