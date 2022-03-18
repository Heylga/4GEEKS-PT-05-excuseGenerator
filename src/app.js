/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuseButton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseSentence();
  });

  //let excuse = [who,action,what,when,excuse];
  // let randomIndex = [Math.floor(Math.random() * Array.length)]
};
let who = ["My dog", "My cat", "My uncle", "My dragon", "My grandma"];
let action = ["tore", "burnt", "ate", "broke", "stared at"];
let what = ["my homework", "my heart", "my book", "my result", "my bicycle"];
let when = [
  "yesterday",
  "this morning",
  "two years ago",
  "during my siesta",
  "right now"
];

function excuseSentence() {
  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];
  return excuse;
}
