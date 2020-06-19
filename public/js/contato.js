function closeNav(){
    document.getElementById('SideBar_menu').style.height= '0px';
}

function openNav(){
    document.getElementById('SideBar_menu').style.height= '500px';
}

function enviaContatoProBanco(){

    var erros = validaContato();
    mensagemErro.innerHTML = "";
    
    if(erros.length > 0){
      for(var i=0; i < erros.length; i++){
          var erro = erros[i];
          var li = document.createElement("li");
          li.innerHTML = erro;
          mensagemErro.appendChild(li);
      }
    }else{
       // Código que envia os dados
      // para o BD
    }       
  }

  function validaContato(){
    var erros = [];

    if(!nome_cadastro.value){
      erros.push("Prencher nome!");
    }

    if(!sobrenome_cadastro.value){
        erros.push("Prencher nome!");
    }

    if(!email_cadastro.value ||
        (email_cadastro.value.search("@") == -1) ||
        (email_cadastro.value.search(".") == -1) ||
        (email_cadastro.value.search(" ") >= '')){
      erros.push("O formato do email é: usuario@dominio.com");
    }
    
    return erros;
  }
