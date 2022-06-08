let puntaje = 0;
let contador = 0;
let id = 0;
let con = 0;
let peg;
let peg2;

function handleChange(e) {
  console.log(e.target.value);
  if(e.target.value == 1)
  contador++;
  else {
    contador = 0;
  }
}
function contestar(e) {
  if (peg2 > 2) {
  let temp = document.getElementById("5");
  temp.hidden = !temp.hidden;
  }
  else {

    puntaje += contador;
    peg = document.getElementById(con);
    peg2 = document.getElementById(con+1)
    peg.hidden = !peg.hidden;
    con++;
    peg2.hidden = !peg.hidden;
    console.log(peg2);// peg = document.getElementById(con);
  }

}


function final(event) {
  console.log(puntaje);

}
