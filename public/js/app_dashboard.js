function closeNav(){
    event.preventDefault();

    document.getElementById('menu').style.width= '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('shopping_grafico1').style.width= '100%';
    document.getElementById('shopping_grafico2').style.width= '100%';
    document.getElementById('canvas_grafico3').style.width= '100%';
    document.getElementById('shopping_pizza').style.width='100%';
}

function openNav(){
    event.preventDefault();

    document.getElementById('menu').style.width= '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('shopping_grafico1').style.width= '100%';
    document.getElementById('shopping_grafico2').style.width= '100%';
    document.getElementById('canvas_grafico3').style.width= '100%';
    document.getElementById('shopping_pizza').style.width='100%';
}
// link ancora

var menu_itens = document.querySelectorAll('#subir')

    menu_itens.forEach(item => {
        item.addEventListener('click', scrollToId);
    })

    function scrollToId(){
        event.preventDefault();


        let element = event.target;

        let id_elemento = element.getAttribute('href');

        let divTo = document.querySelector('id_elemento');



        window.scroll({
            top: divTo - 90,
            behavior: "smooth",

        });
    }

    // ABRINDO BOX DO SHOPPING E ANALISTA

    function abrir_shopping()  {
        event.preventDefault();
        let box_shopping = document.getElementById('shopping');
        box_shopping.style.height = "140px";

        i_fechar.style.display = "block"; 
        i_abrir.style.display = "none"; 
    }
    function fechar_shopping() {
        event.preventDefault();
        let box_shopping = document.getElementById('shopping');
        box_shopping.style.height = "55px";

        i_abrir.style.display = "block";
        i_fechar.style.display = "none";
    }
    function abrir_analista() {
        event.preventDefault();
        let box_analista = document.getElementById('analista');
        box_analista.style.height = "180px";

        i_fechar_analista.style.display = "block";
        i_abrir_analista.style.display = "none";
    }
    function fechar_analista() {
        event.preventDefault();
        let box_analista = document.getElementById('analista');
        box_analista.style.height = "55px";

        i_abrir_analista.style.display = "block";
        i_fechar_analista.style.display = "none";
    }
