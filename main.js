function clicou(){
    //alert("Obrigado por clicar")
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
};
function redirecionar(){
    //window.open("https://code.org");
    //window.location.href = "https://code.org";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

/* function soma(n1,n2){
 return n1 + n2;}
function setReplace(frase,nome,nome_nome){
return frase.replace(nome,novo_nome)}

  function validaIdade(idade){
      var validar;
      if(idade >= 18){
          validar = true
      }else{
          validar = false
      }
      return validar
  }
var idade = prompt("Qual sua idade");
alert(validaIdade(idade));
//alert(soma(5,10));
//alert(setReplace("Vai japão","japão","Brasil"));


//loop e condicionais


var idade = prompt("Qual é sua idade?")
//var idade = 18;
if(idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};


var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());


var count;
for(count = 0; count <=5;count++){
    alert(count)
}


var count = 5;
while(count < 5){
    console.log(count);
    //count = count + 1;
    //alert(count);
    count++;
}
//variaveis e concactenação

var nome = "Fabiano Rissardi";
var idade = 25;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + "tem"+ idade + "anos" );
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("japão","Brasil"));
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));

//Array e dicionário

var lista = ["maçã","pera","laranja"];
coloca lista.push("Banana");
tira lista.pop("pera");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" X "));

var fruta = {nome:"maçã",cor:"vermelho"};
var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva",cor:"vinho"}];
console.log(fruta.nome);
alert(fruta.cor);
console.log(frutas);
alert(frutas[1].nome);

*/