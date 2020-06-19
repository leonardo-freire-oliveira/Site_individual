// INSERINDO GRAFICOS

// var config_4 = {
//     type: 'doughnut',
//     data: {
//         labels: ['Entrada 1', 'Entrada 2', 'Entrada 3', 'Banheiro','Praça-Alimentação', 'Corredor A', 'Corredor B'],
//         datasets: [{
//             label: 'Aprovado',
//             backgroundColor: ['#ff6384', '#36a2eb', '#ff9f40', '#4bc0c0', '#ffcd56','#17ebab','#ee0896'],
//             borderColor: ['#ff6384', '#36a2eb', '#ff9f40', '#4bc0c0', '#ffcd56','#17ebab','#ee0896'],
//             data: [],
//             fill: false,
//         }]
//     },
//     options: {
//         responsive: false,
//         title: {
//             display: false,
//             text: 'Pizza'
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: true,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         }
//     }
// };

// var config = {
//     type: 'bar',
//     data: {
//         labels: [   ],
//         datasets: [{
//             label: 'Movimento',
//             backgroundColor: '#993399',
//             borderColor: '#993399',
//             data: [],
//             fill: false,
//         }]
//     },
//     options: {
//         responsive: true,
//         title: {
//             display: true,
//             text: 'Gráfico de histórico de movimento'
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Horário da Leitura do movimento'
//                 }
//             }],
//             yAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Quantidade de entradas'
//                 }
//             }]
//         }
//     }
// };
// var config_2 = {
//     type: 'line',
//     data: {
//         labels: [],
//         datasets: [{
//             label: 'Movimento',
//             backgroundColor: '#993399',
//             borderColor: '#993399',
//             data: [],
//             fill: false,
//         }]
//     },
//     options: {
//         responsive: true,
//         title: {
//             display: true,
//             text: 'Gráfico de histórico de movimento'
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Horário da Leitura do movimento'
//                 }
//             }],
//             yAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Quantidade de entradas'
//                 }
//             }]
//         }
//     }
// };
window.onload = obterDadosGrafico;

var config_3 = {
    labels: [],
    datasets: [
        {
            yAxisID: 'y-temperatura',
            label: 'Clientes',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            fill: false,
            data: []
        }
    ]
};

// ATUALIZANDO GRAFICO

function atualizarGrafico() {

    fetch('/leituras/tempo-real', { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                
                // tirando e colocando valores no gráfico
                config_3.labels.shift(); // apagar o primeiro
                config_3.labels.push(novoRegistro.horario_t1);
                config_3.labels.push(novoRegistro.horario_t2);
                config_3.labels.push(novoRegistro.horario_t3);
                config_3.labels.push(novoRegistro.horario_t4);
                config_3.labels.push(novoRegistro.horario_t5);
                config_3.labels.push(novoRegistro.horario_t6);
                config_3.labels.push(novoRegistro.horario_t7);
                config_3.labels.push(novoRegistro.horario_t8);
                config_3.labels.push(novoRegistro.horario_t9);
                config_3.labels.push(novoRegistro.horario_t10); // incluir um novo momento
                config_3.datasets[0].data.shift();  // apagar o primeiro de temperatura
                
                config_3.datasets[0].data.push(novoRegistro.clientes_t1); // incluir uma nova leitura de temperatura
                config_3.datasets[0].data.push(novoRegistro.clientes_t2);
                config_3.datasets[0].data.push(novoRegistro.clientes_t3);
                config_3.datasets[0].data.push(novoRegistro.clientes_t4);
                config_3.datasets[0].data.push(novoRegistro.clientes_t5);
                config_3.datasets[0].data.push(novoRegistro.clientes_t6);
                config_3.datasets[0].data.push(novoRegistro.clientes_t7);
                config_3.datasets[0].data.push(novoRegistro.clientes_t8);
                config_3.datasets[0].data.push(novoRegistro.clientes_t9);
                config_3.datasets[0].data.push(novoRegistro.clientes_t10);
                window.grafico_linha_3.update();
                
                setTimeout(atualizarGrafico, 5000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            setTimeout(atualizarGrafico, 5000);
        }
    })
    .catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
    
}


// CONFIRGURANDO GRAFICO HISTORICO

function configurarGrafico() {
    var configuracoes = {
        responsive: true,
        animation: {duration: 500},
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            text: 'Histórico de fluxo de Clientes'
        },
        scales: {
            yAxes: [{
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: 'left',
                id: 'y-temperatura',
            }]
        }
    };

    return configuracoes;
}

function obterDadosGrafico() {

    fetch('/leituras/ultimas', { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (registro) {

                console.log(`Dados recebidos: ${JSON.stringify(registro)}`);
                config_3.datasets[0].data = [];
                config_3.labels = [];
                
                    // aqui, após 'registro.' use os nomes 
                    // dos atributos que vem no JSON 
                    // que gerou na consulta ao banco de dados
                   
                    config_3.labels.push(registro[0].horario_t10);
                    config_3.labels.push(registro[0].horario_t9);
                    config_3.labels.push(registro[0].horario_t8);
                    config_3.labels.push(registro[0].horario_t7);
                    config_3.labels.push(registro[0].horario_t6);
                    config_3.labels.push(registro[0].horario_t5);
                    config_3.labels.push(registro[0].horario_t4);
                    config_3.labels.push(registro[0].horario_t3);
                    config_3.labels.push(registro[0].horario_t2);
                    config_3.labels.push(registro[0].horario_t1);
                    
                    config_3.datasets[0].data.push(registro[0].clientes_t1);
                    config_3.datasets[0].data.push(registro[0].clientes_t2);
                    config_3.datasets[0].data.push(registro[0].clientes_t3);
                    config_3.datasets[0].data.push(registro[0].clientes_t4);
                    config_3.datasets[0].data.push(registro[0].clientes_t5);
                    config_3.datasets[0].data.push(registro[0].clientes_t6);
                    config_3.datasets[0].data.push(registro[0].clientes_t7);
                    config_3.datasets[0].data.push(registro[0].clientes_t8);
                    config_3.datasets[0].data.push(registro[0].clientes_t9);
                    config_3.datasets[0].data.push(registro[0].clientes_t10);
            
                // console.log(JSON.stringify(config_3));

                div_aguarde.style.display = 'none';

                plotarGrafico(config_3);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
    .catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });

}

// esse "sortearTemperatura()" será desnecessário quando usarmos o backend futuramente
// function sortearTemperatura() {
//     var limiteMin = 0;
//     var limiteMax = 100;
//     var minimoAbsoluto = Math.abs(limiteMin);
//     return (Math.random() * (minimoAbsoluto + limiteMax) - minimoAbsoluto).toFixed(1);
// }
// function sortearTemperatura_2() {
//     var limiteMin = 0;
//     var limiteMax = 2000;
//     var minimoAbsoluto = Math.abs(limiteMin);
//     return (Math.random() * (minimoAbsoluto + limiteMax) - minimoAbsoluto).toFixed(1);
// }

// function sortearTemperatura_3() {
//     var limiteMin = 0;
//     var limiteMax = 500;
//     var minimoAbsoluto = Math.abs(limiteMin);
//     return (Math.random() * (minimoAbsoluto + limiteMax) - minimoAbsoluto).toFixed(1);
// }

// function sortearTemperatura_4() {
//     var limiteMin = 0;
//     var limiteMax = 500;
//     var minimoAbsoluto = Math.abs(limiteMin);
//     return (Math.random() * (minimoAbsoluto + limiteMax) - minimoAbsoluto).toFixed(1);
// }

// function recuperarDadosIniciais() {

//     // esse "registros" será recuperado do backend futuramente
//     // var registros = [
//     //     {
//     //        momento: 'Praça de alimentação',
//     //         leitura: sortearTemperatura()
//     //     },
//     //     {
//     //        momento: 'Corredor',
//     //         leitura: sortearTemperatura()
//     //     },
//     //     {
//     //         momento: 'Banheiro',
//     //         leitura: sortearTemperatura()
//     //     },
//     //     {
//     //         momento: 'Acesso A',
//     //         leitura: sortearTemperatura()
//     //     },
//     //     {
//     //         momento: 'Acesso B',
//     //         leitura: sortearTemperatura()
//     //     },
//     //     {
//     //         momento: 'Entrada Garagem',
//     //         leitura: sortearTemperatura()
//     //     },
//     //     {
//     //         momento: 'But it dont matter know',
//     //         leitura: sortearTemperatura()
//     //     }
//     // ];

//     // esse "registros" será recuperado do backend futuramente
//     // var registros_2 = [
//     //     {
//     //         momento: '00:03:42',
//     //         leitura: sortearTemperatura_2()
//     //     },
//     //     {
//     //         momento: '00:03:52',
//     //         leitura: sortearTemperatura_2()
//     //     },
//     //     {
//     //         momento: '00:04:02',
//     //         leitura: sortearTemperatura_2()
//     //     },
//     //     {
//     //         momento: '00:04:12',
//     //         leitura: sortearTemperatura_2()
//     //     },
//     //     {
//     //         momento: '00:04:22',
//     //         leitura: sortearTemperatura_2()
//     //     },
//     //     {
//     //         momento: '00:04:32',
//     //         leitura: sortearTemperatura_2()
//     //     },
//     //     {
//     //         momento: '00:04:42',
//     //         leitura: sortearTemperatura_2()
//     //     }
//     // ];

//     // esse "registros" será recuperado do backend futuramente
//     // var registros_3 = [
//     //     {
//     //         momento: '00:03:42',
//     //         leitura: sortearTemperatura_3()
//     //     },
//     //     {
//     //         momento: '00:03:52',
//     //         leitura: sortearTemperatura_3()
//     //     },
//     //     {
//     //         momento: '00:04:02',
//     //         leitura: sortearTemperatura_3()
//     //     },
//     //     {
//     //         momento: '00:04:12',
//     //         leitura: sortearTemperatura_3()
//     //     },
//     //     {
//     //         momento: '00:04:22',
//     //         leitura: sortearTemperatura_3()
//     //     },
//     //     {
//     //         momento: '00:04:32',
//     //         leitura: sortearTemperatura_3()
//     //     },
//     //     {
//     //         momento: '00:04:42',
//     //         leitura: sortearTemperatura_3()
//     //     }
//     // ];

//     // var registros_4 = [
//     //     {
//     //         //momento: '00:03:42',
//     //         leitura: sortearTemperatura_4()
//     //     },
//     //     {
//     //         //momento: '00:03:52',
//     //         leitura: sortearTemperatura_4()
//     //     },
//     //     {
//     //         //momento: '00:04:02',
//     //         leitura: sortearTemperatura_4()
//     //     },
//     //     {
//     //         //momento: '00:04:12',
//     //         leitura: sortearTemperatura_4()
//     //     },
//     //     {
//     //         //momento: '00:04:22',
//     //         leitura: sortearTemperatura_4()
//     //     },
//     //     {
//     //         //momento: '00:04:32',
//     //         leitura: sortearTemperatura_4()
//     //     },
//     //     {
//     //         //momento: '00:04:42',
//     //         leitura: sortearTemperatura_4()
//     //     }
//     // ];

//     // var contador = 0;
  

//     // registros.length é a quantidade de itens em "registros"
//     // while (contador < registros_3.length) {

//     //     // config.data.labels.push(registros[contador].momento);  // incluir um novo momento
//     //     // config.data.datasets[0].data.push(registros[contador].leitura);  // incluir uma nova leitura
//     //     // config_2.data.labels.push(registros_2[contador].momento);  // incluir um novo momento
//     //     // config_2.data.datasets[0].data.push(registros_2[contador].leitura);  // incluir uma nova leitura
//     //     config_3.data.labels.push(registros_3[contador].momento);  // incluir um novo momento
//     //     config_3.data.datasets[0].data.push(registros_3[contador].leitura);  // incluir uma nova leitura
//     //     //config_4.data.labels.push(registros_4[contador].momento);  // incluir um novo momento
//     //     // config_4.data.datasets[0].data.push(registros_4[contador].leitura);  // incluir uma nova leitura

//     //     contador++;
        
//     // }

// }

// function receberNovasLeituras() {
//     setTimeout(() => {

//         // esses "agora" etc até "momentos" serão desnecessários quando usarmos o backend futuramente
//         var agora = new Date();
//         var hora = agora.getHours();
//         var minuto = agora.getMinutes();
//         var segundo = agora.getSeconds();
//         var momento = `${hora > 9 ? '' : '0'}${hora}:${minuto > 9 ? '' : '0'}${minuto}:${segundo > 9 ? '' : '0'}${segundo}`;

//         // esse "novoRegistro" será recuperado do backend futuramente
//         // var novoRegistro = {
//         //     momento: momento,
//         //     leitura: sortearTemperatura()
//         // };
//         // var novoRegistro_2 = {
//         //     momento: momento,
//         //     leitura: sortearTemperatura_2()
//         // };
//         var novoRegistro_3 = {
//             momento: momento,
//             leitura: sortearTemperatura_3()
//         };
        
//         document.getElementById('canvas_grafico3').innerHTML = novoRegistro_3.leitura;

//         // tirando e colocando valores no gráfico
//         // config.data.labels.shift(); // apagar o primeiro
//         // config.data.labels.push(novoRegistro.momento); // incluir um novo momento
//         // //config.data.datasets[0].data.shift();  // apagar o primeiro
//         // config.data.datasets[0].data.push(novoRegistro.leitura); // incluir uma nova leitura

//         // tirando e colocando valores no gráfico
//         // config_2.data.labels.shift(); // apagar o primeiro
//         // config_2.data.labels.push(novoRegistro_2.momento); // incluir um novo momento
//         // config_2.data.datasets[0].data.shift();  // apagar o primeiro
//         // config_2.data.datasets[0].data.push(novoRegistro_2.leitura); // incluir uma nova leitura

//         // tirando e colocando valores no gráfico
//         config_3.data.labels.shift(); // apagar o primeiro
//         config_3.data.labels.push(novoRegistro_3.momento); // incluir um novo momento
//         config_3.data.datasets[0].data.shift();  // apagar o primeiro
//         config_3.data.datasets[0].data.push(novoRegistro_3.leitura); // incluir uma nova leitura

       

//         // Atualiza o gráfico
//         // window.graficoLinha.update();
//         // window.graficoLinha_2.update();
//         window.graficoLinha_3.update();
        

//         // agendar a chamada da mesma função para daqui a .5 segundos
//         receberNovasLeituras();

//     }, 1500); // 1500 ms -> 1.5 segundos

//     // var novoRegistro_4 = {
//     //    // momento: momento,
//     //     //leitura: sortearTemperatura_4()
//     // };

//      // tirando e colocando valores no gráfico
//      //config_4.data.labels.shift(); // apagar o primeiro
//     //   config_4.data.labels.push(novoRegistro_4.momento); // incluir um novo momento
//      //config_4.data.datasets[0].data.shift();  // apagar o primeiro
//      //config_4.data.datasets[0].data.push(novoRegistro_4.leitura); // incluir uma nova leitura

//     //window.graficoLinha_4.update();
// }

// function plotarGrafico() {
//     // chamar os 7 últimos registros de leitura
//     recuperarDadosIniciais();

//     // criação do gráfico na página
//     // var ctx = document.getElementById('shopping_grafico1').getContext('2d');
//     // var ctx_2 = document.getElementById('shopping_grafico2').getContext('2d');
//     var ctx_3 = document.getElementById('canvas_grafico3').getContext('2d');
//     // var ctx_4 = document.getElementById('shopping_pizza').getContext('2d');

//     // window.graficoLinha = new Chart(ctx, config);
//     // window.graficoLinha_2 = new Chart(ctx_2, config_2);
//     window.graficoLinha_3 = new Chart(ctx_3, config_3);
//     // window.graficoLinha_4 = new Chart(ctx_4, config_4);

//     // função que agenda a recuperação da última leitura para daqui a .5 segundos
//     receberNovasLeituras();
// }

function plotarGrafico(config_3) {
    console.log('iniciando plotagem do gráfico...');

    var ctx_3 = canvas_grafico3.getContext('2d');
    window.grafico_linha = Chart.Line(ctx_3, {
        data: config_3,
        options: configurarGrafico()
    });

    setTimeout(obterDadosGrafico, 5000);
}

// indicando que a função "plotarGrafico" será invocada assim que a página carregar
window.onload = plotarGrafico;
