document.querySelector("#btnOpcao1").addEventListener("click", function() {
	document.querySelector("#opcao1").style.display = "block";
	document.querySelector("#opcao2").style.display = "none";
	document.querySelector("#opcao3").style.display = "none";
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

document.querySelector("#btnOpcao1_2").addEventListener("click", function() {
	alert("Simbora pra KEZ Padaria comer um Cinnamol Roll.\nCompra as passagens do metro, pega um guarda-chuva e partiu!");
});

document.querySelector("#btnOpcao1_3").addEventListener("click", function() {
	alert("Hmmm safadinha... ( ?� ?? ?�)\nO valor do quarto, escolhido pelo programa, ADICIONAR VALOR RANDOMICO");
});

document.querySelector("#btnOpcao2_1").addEventListener("click", function() {
	alert("Vamos para o parque dar um rolezin. Como � algo curto, voc� tem direito a mais uma rodada.");
});

document.querySelector("#btnOpcao2_2").addEventListener("click", function() {
	alert("Vamos andar na rua, sem rumo, at� achar algo que queira parar. Como � algo curto, voc� tem direito a mais uma rodada.");
});

document.querySelector("#btnOpcao2_3").addEventListener("click", function() {
	alert("Vamos descer no shopping sem destino, e comer alguma coisinha, que dever� ser escolhida pelo programa de Comidas.");
});

document.querySelector("#btnOpcao3_1").addEventListener("click", function() {
	alert("BVoc� escolheu em ver um filme, mas nada aqui � normal, ent�o tinha chance de cair: MELHORAR E FAZER RANDOMICO");
});

document.querySelector("#btnOpcao3_2").addEventListener("click", function() {
	alert("Voc� escolheu fazer uma receita!! Olha o que poderia cair: MELHORAR E FAZER RANDOMICO");
});

document.querySelector("#btnOpcao3_3").addEventListener("click", function() {
	alert("Voc� vai pedir comida!! Entre no programa de Comidas.");
});

document.querySelector("#btnOpcao4_1").addEventListener("click", function() {
	alert("Vamos para o Cinema do Atrium!\nQual filme veremos?");
});

document.querySelector("#btnOpcao4_2").addEventListener("click", function() {
	alert("Vamos para o Cinema do Plaza!\nQual filme veremos?");
});

document.querySelector("#btnOpcao4_3").addEventListener("click", function() {
	alert("Vamos para o Cinema de SCS!\nQual filme veremos?");
});