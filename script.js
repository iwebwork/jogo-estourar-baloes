function addbola() {
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	/*Com esse codigo estou criando uma div no arquivo html 
	e adicionando as caracteristicas do css a ele.*/

	var p1 = Math.floor(Math.random() * 600);
	var p2 = Math.floor(Math.random() * 500);

	/* A função Math.random está gerando um numero aleatorio de 0 a 500
	   A função Math.floor esta fazendo aparecer um numero inteiro, no caso, vai aparecer um de 0 a 500. */

	if (p1 >= 200) {
		bola.setAttribute("class","bola2");
		bola.setAttribute("style","right:"+p1+"px; top:"+p2+"px;");
	}
	//Se p1 for maior ou igual a 200px,a bola fica vermelha.

	if (p2 <= 100) {
		bola.setAttribute("class","bola3");
		bola.setAttribute("style","right:"+p1+"px; down:"+p2+"px;");
	}
	//Se p2 for menor ou igual a 100px, a bola fica amarela.

	if (p1 >= 400) {
		bola.setAttribute("class","bola4");
		bola.setAttribute("style","left:"+p1+"px; top:"+p2+"px;");
	}
	//Se p1 for maior ou igual a 400px, a bola fica azul.

	if (p2 >= 300) {
		bola.setAttribute("class","bola5");
		bola.setAttribute("style","left:"+p1+"px; down:"+p2+"px;");
	}
	//Se p2 for maior ou igual a 300px, a bola fica verde.





	bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;");
	/*Com esse comando, adicionei propriedades a bola , inserindo com o comando "bola.setAttribute", sendo que bola, e a class da minha div.*/






	bola.setAttribute("onclick", "estourar(this)");
	/*Com esse comando eu inserir um evento na minha bola.*/

	document.body.appendChild(bola);
	/*Com esse comando vou adcionar uma nova bola no meu documento, ou seja dentro da tag body.*/


}

function estourar(elemento) {

	document.body.removeChild(elemento);
	/*Nesse comando estou removendo completamente o elemento da minha tag body, assim criando o efeito de estourar o balão,
	  quem faz isso e o comando removeChild.
	*/

}

function iniciar() {

	setInterval(addbola, 1000);

	/* O comando setInterval vai adcionar um elemento bola, assim que minha pagina for carregada, por isso foi usando o evento onload.
	   O comando addbola, irá adcionar o conteudo, ou seja o balão.
	   O comando 1000 e em milesegundos, ou seja, 1000 milesegundos e o equivalente a 1 segundo, assim adcionando uma nova bola a cada 1 segundo.
	*/ 

}



