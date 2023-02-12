function randomNumber(arrayLenght) {
  return Math.floor(Math.random() * arrayLenght);
}
function getWho() {
  const who = ["The dog", "My grandma", "His turtle", "My bird", "My cat"];
  return who[randomNumber(who.length)];
}
function getAction() {
  const action = ["ate", "peed", "crushed", "broke"];
  return action[randomNumber(action.length)];
}
function getWhat() {
  const what = ["my homework", "the keys", "the car", "the food", "the book"];
  return what[randomNumber(what.length)];
}
function getWhen() {
  const when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  return when[randomNumber(when.length)];
}
function alert(Excusa) {
  document.getElementById("Excusa").innerHTML = Excusa.join(" ");
}

function generador() {
  let respuesta = [];
  respuesta.push(getWho());
  respuesta.push(getAction());
  respuesta.push(getWhat());
  respuesta.push(getWhen());
  alert(respuesta);
}
