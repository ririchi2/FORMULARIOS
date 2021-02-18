
// Asignacion de variables HTML
var userName = document.getElementById("userName").value;
var pwd = document.getElementById("pwd").value;
var namee = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var tlf = document.getElementById("tlf").value;
var cp = document.getElementById("cp").value;
var nie = document.getElementById("nie").value;
var accType = document.getElementsByName("accType");
var birthYear = document.getElementById("birthYear").value;
var aficiones = document.getElementsByName("aficiones");
var title = document.getElementById("title").value;
var longdesc = document.getElementById("longdesc").value;
var resultSection = document.getElementsByClassName("resultSection")[0];
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", alert("hola"), false);

function sConsole(evento) {
    evento.preventDefault();
    console.log(userName);
    console.log(pwd);
    console.log(namee);
    console.log(surname);
    console.log(tlf);
    console.log(cp);
    console.log(nie);
    console.log(accType);
    // console.log(birthYear);
    for (var itr = 0; i < aficiones.length; i++) {
        console.log("elemento: " + aficiones[itr].value + "\n seleccionado: " + aficiones[itr].checked);
    }
    console.log(aficiones);
    console.log(title);
    console.log(longdesc);
  }
