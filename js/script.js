
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


// if(document.forms.length>0){
//     for(var i=0; i < document.forms[0].elements.length; i++)
//     {var campo = document.forms[0].elements[i];
//         if(campo.type!="hidden")
//         {      
//             campo.focus();
//             break;
//         }}}

function checkpwd(pwd) {
    var repwd = /^\d[a-z][A-Z].{8,}/;
    if (repwd.test(pwd) != true) {
        console.log("Introduce una contraseña correcta (Debe contener al menos un numero, una mayuscula, minuscula y 8 o mas letras");
    } else {
        console.log(pwd);
    }
}
function checktlf(tlf) {
    var retlf = /^\d{9}$/;
    if (retlf.test(tlf) != true) {
        console.log("Introduce un telefono correcto");
    } else {
        console.log(tlf);
    }
}
function checkpostal(cp) { 
    var re5digit=/^\d{5}$/;
    if (re5digit.test(cp) != true) {
        console.log("Introduce un número de 5 dígitos");
    } else {
        console.log(cp);
    }
}
function checknie(nie) {
    var renie =/(^([0-9]{7,8}\-[A-Z]))$/;
    if (renie.test(nie) != true) {
        console.log("Introduce un DNI correcto");
    } else {
        console.log(nie);
    }
}


function sConsole() {
    console.log(userName);
    checkpwd(pwd);
    // console.log(pwd);
    console.log(namee);
    console.log(surname);
    checktlf(tlf);
    // console.log(tlf);
    checkpostal(cp);
    // console.log(cp);
    checknie(nie);
    // console.log(nie);
    // console.log(accType);
    for (var itr = 0; itr < accType.length; itr++) {
        if (accType[itr].checked == true) {
            console.log(accType[itr].alt);
        }
        // console.log("elemento: " + accType[itr].value + "\n seleccionado: " + accType[itr].checked);
    }
    // console.log(birthYear);
    // for (var itr = 0; itr < aficiones.length; itr++) {
    //     console.log("elemento: " + aficiones[itr].value + "\n seleccionado: " + aficiones[itr].checked);
    // }
    // console.log(aficiones);
    console.log(title);
    console.log(longdesc);
  }
