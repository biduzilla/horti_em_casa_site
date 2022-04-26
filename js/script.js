var input = document.querySelector("#submit");


input.addEventListener("click", function(e) {

    e.preventDefault();

    var name = document.querySelector("#name").value;
    
    var email = document.querySelector("#email").value;
    
    const content = document.querySelector("main");


    if (name == "") {
        alert("Nome está vazio!");
        return false;
    }
    
    if (email == "") {
        alert("E-mail Invalido!");
        return false;
    }
   
    
    var segundos = 0;
    var timer = setInterval(
        function testarInteracao(){
            segundos+= 1;
            
            if(segundos == 15){
                window.location.href = "./index.html";
            } 

            content.innerHTML= `<span id="content-user"> ${name} obrigado por confirmar seu interesse em participar do Horti em casa <br> 
            já mandamos as orientações para o seu e-mail ${email} ;) <br><br>
            Vamos redirecionar para a página inicial em 15 segundos:  ${segundos} s
            </span>`;

        }, 1000);
})


