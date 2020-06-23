function closeNav(){
    document.getElementById('SideBar_menu').style.height= '0px';
}

function openNav(){
    document.getElementById('SideBar_menu').style.height= '500px';
}

function entrar() {
    // aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {
        
        if (resposta.ok) {

            resposta.json().then(json => {
                sessionStorage.login_usuario_meuapp = json.email_analista;
                sessionStorage.nome_usuario_meuapp = json.senha;
                
                window.location.href = './index.html';
            });

        } else {

            console.log('Erro de login!');

            response.text().then(texto => {
                console.error(texto);
                // finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

// function aguardar() {
//     btn_entrar.disabled = true;
//     img_aguarde.style.display = 'block';
//     div_erro.style.display = 'none';
// }

// function finalizar_aguardar(resposta) {
//     btn_entrar.disabled = false;
//     img_aguarde.style.display= 'none';
//     div_erro.style.display = 'block';
//     div_erro.innerHTML = resposta;
// }