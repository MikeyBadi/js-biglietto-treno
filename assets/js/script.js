/* 
  Chiedere nome
  Chiedere cognome
  Chiedere età
  Chiedere km

  se persona > 65 sconto 40%
  se persona < 18 sconto 20%
*/

// Chiedere informazioni

let nome, cognome, eta, km;
nome = prompt("Inserire il tuo nome");
console.log(nome);
document.getElementById("nome-cliente").innerHTML = nome;

cognome = prompt("Inserire il tuo cognome");
console.log(cognome);
document.getElementById("cognome-cliente").innerHTML = cognome;

eta = parseInt(prompt("Inserire la tua età"));
console.log(eta);
document.getElementById("eta-cliente").innerHTML = eta;

// controllo se i dati siano numeri
if (isNaN(eta)){
  alert("Valori non validi, inserire un numero")
}

km = parseInt(prompt("Inserire i km da fare"));
console.log(km);
document.getElementById("km-cliente").innerHTML = km;

// controllo se i dati siano numeri
if (isNaN(km)){
  alert("Valori non validi, inserire un numero")
}


// prezzo normale
let prezzoBiglietto = km * 0.21;
console.log(prezzoBiglietto);


// se sono numeri posso procedere con il calcolo
if (!isNaN(eta) && !isNaN(km)){
  //  prezzo scontato
  let prezzoScontato;

 if (eta < 18){
   prezzoScontato = prezzoBiglietto - (prezzoBiglietto * .2);
   document.getElementById("prezzo-cliente").innerHTML = prezzoScontato.toFixed(2);
 } else if (eta > 65){
   prezzoScontato = prezzoBiglietto - prezzoBiglietto * .4;
   document.getElementById("prezzo-cliente").innerHTML = prezzoScontato.toFixed(2);
 } else {
   document.getElementById("prezzo-cliente").innerHTML = prezzoBiglietto.toFixed(2);
 }
}

 randmMatricola = Math.floor((Math.random() * 99999 )+ 1000);
console.log(matricola);
document.getElementById("matricola").innerHTML = randmMatricola;
