/*	
		A partir daqui será as funçoes de orçamento
	*/


	function calcular() {
		var n_portas = Number(quantidade_entradas.value);
		var n_lojas = Number(quantidade_lojas.value);
		var valor_entradas = Number(quantidade_entradas.value) * 200;
		var valor_lojas = Number(quantidade_lojas.value) * 70;
		var margem = Number(valor_entradas) + Number(valor_lojas);
	
		if (n_lojas >= 120 && n_lojas <= 160) {
			var resultado = margem * 0.9;
	
			div_mensagem.innerHTML = `Valor sem desconto para o <b> Shopping  ${nome.value} </b> ficará R$:${margem.toFixed(2)}<br><br>`;
			div_mensagem.innerHTML += `Valor com desconto para o <b> Shopping  ${nome.value} </b> ficará (10%) R$:<b> ${resultado.toFixed(2)} </b><br><br>`;
	
		}
		else if (n_lojas >= 161 && n_lojas <= 200) {
			var resultado = margem * 0.85;
	
			div_mensagem.innerHTML = `Valor sem desconto para o <b> Shopping  ${nome.value} </b> ficará R$:${margem.toFixed(2)} <br><br>`;
			div_mensagem.innerHTML += `Valor com desconto para o <b> Shopping  ${nome.value} </b> ficará (15%) R$:<b> ${resultado.toFixed(2)} </b><br><br>`;
		}
	
		else if (n_lojas >= 201) {
			var resultado = margem * 0.80;
	
			div_mensagem.innerHTML = `Valor sem desconto para o <b> Shopping  ${nome.value} </b> ficará R$:${margem.toFixed(2)} <br><br>`;
			div_mensagem.innerHTML += `Valor com desconto para o <b> Shopping  ${nome.value} </b> ficará (20%) R$:<b> ${resultado.toFixed(2)} </b><br><br>`;
		}
		else if (n_lojas >= 1 && n_lojas <= 119) {
			var resultado = margem;
	
			div_mensagem.innerHTML = `Valor sem desconto para o <b> Shopping  ${nome.value} </b> ficará R$:<b> ${resultado.toFixed(2)} </b> <br><br>`;
		}
	
		else if (n_portas < 0 && n_lojas < 50) {
			alert('Insira um valor válido, necessário 1 ou mais portas e mais de 50 lojas');
	
		}
	
	}