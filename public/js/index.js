    function closeNav(){
        document.getElementById('SideBar_menu').style.height= '0px';
    }

    function openNav(){
        document.getElementById('SideBar_menu').style.height= '500px';
    }

    function enviar(){
        var user = (info_liv.value);
        if((user.indexOf('@') >= 0) && (user.indexOf('.') >= 0) && (user.length >= 7)){
            alert('Você receberá o contato em breve!')
        }
        else{
            alert('Insira um e-mail valido!')
        }
    }