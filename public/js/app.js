
	var config_3 = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Movimento',
				backgroundColor: '#993399',
				borderColor: '#993399',
				data: [],
				fill: false,
			}]
		},
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Gráfico de histórico de movimento'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Horário da Leitura do movimento'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Quantidade de entradas'
					}
				}]
			}
		}
	};

	// esse "sortearTemperatura()" será desnecessário quando usarmos o backend futuramente
	function sortearTemperatura() {
		var limiteMin = 0;
		var limiteMax = 10000;
		var minimoAbsoluto = Math.abs(limiteMin);
		return (Math.random() * (minimoAbsoluto+limiteMax) - minimoAbsoluto).toFixed(1);
	}

	function recuperarDadosIniciais() {

		// esse "registros" será recuperado do backend futuramente
		var registros = [
			{
				momento: '00:03:42',
				leitura: sortearTemperatura()
			},
			{
				momento: '00:03:52',
				leitura: sortearTemperatura()
			},
			{
				momento: '00:04:02',
				leitura: sortearTemperatura()
			},
			{
				momento: '00:04:12',
				leitura: sortearTemperatura()
			},
			{
				momento: '00:04:22',
				leitura: sortearTemperatura()
			},
			{
				momento: '00:04:32',
				leitura: sortearTemperatura()
			},
			{
				momento: '00:04:42',
				leitura: sortearTemperatura()
			}
		];

		var contador = 0;

		// registros.length é a quantidade de itens em "registros"
		while (contador < registros.length) {

			config.data.labels.push(registros[contador].momento);  // incluir um novo momento
			config.data.datasets[0].data.push(registros[contador].leitura);  // incluir uma nova leitura

			contador++;
		}

	}

	function receberNovasLeituras() {
		setTimeout(() => {
			
			// esses "agora" etc até "momentos" serão desnecessários quando usarmos o backend futuramente
			var agora = new Date();
			var hora = agora.getHours();
			var minuto = agora.getMinutes();
			var segundo = agora.getSeconds();
			var momento = `${hora>9?'':'0'}${hora}:${minuto>9?'':'0'}${minuto}:${segundo>9?'':'0'}${segundo}`;

			// esse "novoRegistro" será recuperado do backend futuramente
			var novoRegistro = {
				momento: momento,
				leitura: sortearTemperatura()
			};
			
			// tirando e colocando valores no gráfico
			config.data.labels.shift(); // apagar o primeiro
			config.data.labels.push(novoRegistro.momento); // incluir um novo momento
			config.data.datasets[0].data.shift();  // apagar o primeiro
			config.data.datasets[0].data.push(novoRegistro.leitura); // incluir uma nova leitura

			// Atualiza o gráfico
			window.graficoLinha.update();	

			// agendar a chamada da mesma função para daqui a 7 segundos
			receberNovasLeituras();	

		}, 2000); // 7000 ms -> 7 segundos
	}

	function plotarGrafico() {
		// chamar os 7 últimos registros de leitura
		recuperarDadosIniciais();

		// criação do gráfico na página
		var ctx = document.getElementById('c_grafico').getContext('2d');
		window.graficoLinha = new Chart(ctx, config);

		// função que agenda a recuperação da última leitura para daqui a 7 segundos
		receberNovasLeituras();
	}

	// indicando que a função "plotarGrafico" será invocada assim que a página carregar
	window.onload = plotarGrafico;



	// FUNÇÃO DE NAVEGAÇÃO SUAVE

	let menu_itens = document.querySelectorAll('#topo')

    menu_itens.forEach(item => {
        item.addEventListener('click', scrollToId);
    })

    function scrollToId(){
        event.preventDefault();


        let element = event.target;

        let id_elemento = element.getAttribute('href');
        
        let divTo = document.querySelector(id_elemento).offsetTop;
        


        window.scroll({
            top: divTo - 90,
            behavior: "smooth",

        });
    }