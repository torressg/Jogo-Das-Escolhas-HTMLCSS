document.querySelector("#btnOpcao1").addEventListener("click", function() {
	document.querySelector("#opcao1").style.display = "block";
	document.querySelector("#opcao2").style.display = "none";
	document.querySelector("#opcao3").style.display = "none";
});

document.getElementById("btnOpcao1").addEventListener("click", function() {
    // Deixa o botao Com Destino
    document.getElementById("btnOpcao2").style.display = "none";
	document.getElementById("btnOpcao3").style.display = "none";
});
document.getElementById("btnOpcao2").addEventListener("click", function() {
    // Deixa o botao Sem Destino
    document.getElementById("btnOpcao1").style.display = "none";
	document.getElementById("btnOpcao3").style.display = "none";
});
document.getElementById("btnOpcao3").addEventListener("click", function() {
    // Deixa o botao Nao quero passeio
    document.getElementById("btnOpcao1").style.display = "none";
	document.getElementById("btnOpcao2").style.display = "none";
});

document.getElementById("btnOpcao1_1").addEventListener("click", function() {
    // Oculta o botão "Cineminha"
    document.getElementById("btnOpcao1_2").style.display = "none";
	document.getElementById("btnOpcao1_3").style.display = "none";
});
document.querySelector("#btnOpcao2").addEventListener("click", function() {
	document.querySelector("#opcao1").style.display = "none";
	document.querySelector("#opcao2").style.display = "block";
	document.querySelector("#opcao3").style.display = "none";
});

document.querySelector("#btnOpcao3").addEventListener("click", function() {
	document.querySelector("#opcao1").style.display = "none";
	document.querySelector("#opcao2").style.display = "none";
	document.querySelector("#opcao3").style.display = "block";
});


document.querySelector("#btnOpcao1_1").addEventListener("click", function() {
	document.querySelector("#opcao1").style.display = "block";
	document.querySelector("#opcao2").style.display = "none";
	document.querySelector("#opcao3").style.display = "none";
    document.querySelector("#opcao4").style.display = "block";
});


/*/Modal comeca aqui/*/

var modal = document.getElementById("myModal");

var btn = document.getElementById("btnOpcao4_1");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
  }
  
  window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }
  
var modal1 = document.getElementById("myModal1");

var btn1 = document.getElementById("btnOpcao4_2");

btn1.onclick = function() {
	modal1.style.display = "block";
  }
  
  window.onclick = function(event1) {
	if (event1.target == modal1) {
	  modal1.style.display = "none";
	}
  }

var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("btnOpcao4_3");

btn2.onclick = function() {
	modal2.style.display = "block";
  }
  
  window.onclick = function(event2) {
	if (event2.target == modal2) {
	  modal2.style.display = "none";
	}
  }

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("btnOpcao1_2");

btn3.onclick = function() {
	modal3.style.display = "block";
  }
  
  window.onclick = function(event3) {
	if (event3.target == modal3) {
	  modal3.style.display = "none";
	}
  }

var modal4 = document.getElementById("myModal4");

var btn4 = document.getElementById("btnOpcao2_1");

btn4.onclick = function() {
	modal4.style.display = "block";
  }
  
  window.onclick = function(event4) {
	if (event4.target == modal4) {
	  modal4.style.display = "none";
	}
  }

var modal5 = document.getElementById("myModal5");

var btn5 = document.getElementById("btnOpcao2_2");

btn5.onclick = function() {
	modal5.style.display = "block";
  }
  
  window.onclick = function(event5) {
	if (event5.target == modal5) {
	  modal5.style.display = "none";
	}
  }

var modal6 = document.getElementById("myModal6");

var btn6 = document.getElementById("btnOpcao2_3");

btn6.onclick = function() {
	modal6.style.display = "block";
  }
  
  window.onclick = function(event6) {
	if (event6.target == modal6) {
	  modal6.style.display = "none";
	}
  }

