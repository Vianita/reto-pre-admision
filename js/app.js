// la linea de abajo le dice que la funcion esté lista al cargar la página
window.onload = function(){

// busca en el documento los elementos con id=boton y los asigna a la variable btn
var btn = document.getElementById("boton");

//  le dice que al escuchar el click del botón ejecute la función (que sigue a continuación)
btn.addEventListener("click", function(){
    
    // busca en el documento los elementos con id=nombre y los asigna a la variable inputName el valor de input
    var inputName = document.getElementById("nombre").value;

    // le asigna a la variable mayusculas el nombre en mayusculas
    var mayusculas = inputName.toUpperCase();

    // limpia el imput (lo deja vacío, por eso las comillas están vacias)
    document.getElementById("nombre").value = "";
    
    // busca en el documento los elementos con id=cont y los asigna a la variable divContenedor
    var divContenedor = document.getElementById("cont");
    
    // crea un elemento p y lo asigna a la variable parrafo
    var parrafo = document.createElement("p");
    
    // crea un texto que dice Bienbenid@ y le agrega la variable mayusculas que era donde estaba el nombre en mayusculas
    var texto = document.createTextNode("Bienvenid@ " + mayusculas);

    // le está añadiendo la variable "texto" a la variable "parrafo"
    parrafo.appendChild(texto);
    parrafo.style.padding = "20px 250px";

    var contenido = document.createElement("div");

    // a la variable "div.Contenedor" le está agregando la variable "parrafo"
    contenido.appendChild(parrafo);

    // busca el elemento con id=container y lo oculta
    document.getElementById("container").style.display = "none";


    var preguntaInicio = document.createElement("p");
    preguntaInicio.style.padding = "20px 250px";

    var jugar = document.createTextNode("¿Deseas jugar?");

    var btnSi = document.createElement("button");
    btnSi.style.padding = "5px 30px";
    btnSi.style.margin = " 0px 5px 0px 250px";

    var btnNo = document.createElement("button");
    btnNo.style.padding = "5px 30px";

    var si = document.createTextNode("Aceptar");

    var no = document.createTextNode("Cancelar");

    preguntaInicio.appendChild(jugar);

    btnSi.appendChild(si);

    btnNo.appendChild(no);

    contenido.appendChild(preguntaInicio);

    contenido.appendChild(btnSi);

    contenido.appendChild(btnNo);

    divContenedor.appendChild(contenido);

    btnNo.addEventListener("click", function() {
        contenido.style.display = "none";

        var adios = document.createElement("p");

        var fraseAdios = document.createTextNode("¡JUGAREMOS PARA LA PRÓXIMA!");
        adios.appendChild(fraseAdios);
        adios.style.color = "#1D731B";
        adios.style.fontWeight = "bold";
        adios.style.textAlign = "center";
        adios.style.margin = " 30px 5px 0px 150px";
        adios.style.padding = "20px";
        adios.style.border = "3px solid #1D731B";

        divContenedor.appendChild(adios);
    });

    btnSi.addEventListener("click", function() {
        contenido.style.display = "none";

        var contPreguntas = document.createElement("div"); 

        var answer1 = document.createElement("p");
        answer1.style.padding = "20px 20px 5px 20px";

        var answer2 = document.createElement("p");
        answer2.style.padding = "20px 20px 5px 20px";

        var answer3 = document.createElement("p");
        answer3.style.padding = "20px 20px 5px 20px";

        var ans1 = document.createTextNode("¿Cuál es el lema de Laboratoria?");
        var ans2 = document.createTextNode("¿Cuántas son las alumnas egresadas?");
        var ans3 = document.createTextNode("¿Cuántas son las empresas empleadoras?");

        answer1.appendChild(ans1);
        answer2.appendChild(ans2);
        answer3.appendChild(ans3);

        var input1 = document.createElement("input");
        input1.style.padding = "3px 120px 3px 3px";
        input1.style.margin = "0px 20px 20px 20px";

        var input2 = document.createElement("input");
        input2.style.padding = "3px 120px 3px 3px";
        input2.style.margin = "0px 20px 20px 20px";

        var input3 = document.createElement("input");
        input3.style.padding = "3px 120px 3px 3px";
        input3.style.margin = "0px 20px 20px 20px";

        var contenedor1 = document.createElement("div");
        var contenedor2 = document.createElement("div");
        var contenedor3 = document.createElement("div");

        var enviarRespuesta = document.createElement("button");
        enviarRespuesta.style.padding = "5px 30px";
        enviarRespuesta.style.margin = "0px 0px 0px 70px";

        var clickRespuesta = document.createTextNode("Enviar Respuestas");
        enviarRespuesta.appendChild(clickRespuesta);

        contenedor1.appendChild(answer1);
        contenedor2.appendChild(answer2);
        contenedor3.appendChild(answer3);

        contenedor1.appendChild(input1);
        contenedor2.appendChild(input2);
        contenedor3.appendChild(input3);

        contPreguntas.appendChild(contenedor1);
        contPreguntas.appendChild(contenedor2);
        contPreguntas.appendChild(contenedor3);
        contPreguntas.appendChild(enviarRespuesta);

        divContenedor.appendChild(contPreguntas);

        enviarRespuesta.addEventListener("click", function() {
            contPreguntas.style.display = "none";

            answer1.style.color = "#1D731B";
            answer1.style.fontWeight = "bold";
            answer1.style.marginLeft = "-30px";

            answer2.style.color = "#1D731B";
            answer2.style.fontWeight = "bold";
            answer2.style.marginLeft = "-30px";

            answer3.style.color = "#1D731B";
            answer3.style.fontWeight = "bold";
            answer3.style.marginLeft = "-30px";

        var correctas = document.createElement("div");
        var correctasP = document.createElement("p");
        var correctasText = document.createTextNode("Correctas");
        correctasP.appendChild(correctasText);

        var ticket = document.createElement("i");
        ticket.className = "fas fa-check-square";
        ticket.style.fontSize = "30px";
        ticket.style.color = "#38C200";
        ticket.style.margin = "0 0 0 20px"; 

        correctas.appendChild(ticket);
        correctas.appendChild(correctasP);
        correctas.style.float = "left";
        correctas.style.color = "#38C200";
        correctas.style.fontWeight = "bold"; 

        var incorrectas = document.createElement("div");
        var incorrectasP = document.createElement("p");
        var incorrectasText = document.createTextNode("Incorrectas");
        incorrectasP.appendChild(incorrectasText);

        var equis = document.createElement("i");
        equis.className = "fas fa-window-close";
        equis.style.fontSize = "30px";
        equis.style.color = "#CC070E";
        equis.style.margin = "0 0 0 20px";

        incorrectas.appendChild(equis);
        incorrectas.appendChild(incorrectasP);
        incorrectas.style.float = "right";
        incorrectas.style.color = "#CC070E";
        incorrectas.style.fontWeight = "bold";

        divContenedor.appendChild(correctas);
        divContenedor.appendChild(incorrectas);

        var input1M = input1.value.toUpperCase();
        if (input1M === "CODIGO QUE TRANSFORMA") {
            correctas.appendChild(answer1);

            var respuesta1 = document.createElement("p");
            
            var resp1 = document.createTextNode(input1.value);

            respuesta1.appendChild(resp1);
            correctas.appendChild(respuesta1);
            
        }else {
            incorrectas.appendChild(answer1);

            var respuesta1 = document.createElement("p");
            
            var resp1 = document.createTextNode(input1.value);

            respuesta1.appendChild(resp1);
            incorrectas.appendChild(respuesta1);
        };

        var input2M = input2.value.toUpperCase();
        if (input2M === "580") {
            correctas.appendChild(answer2);

            var respuesta2 = document.createElement("p");
            
            var resp2 = document.createTextNode(input2.value);

            respuesta2.appendChild(resp2);
            correctas.appendChild(respuesta2);
            
        }else {
            incorrectas.appendChild(answer2);

            var respuesta2 = document.createElement("p");
            
            var resp2 = document.createTextNode(input2.value);

            respuesta2.appendChild(resp2);
            incorrectas.appendChild(respuesta2);
        };

        var input3M = input3.value.toUpperCase();
        if (input3M === "200") {
            correctas.appendChild(answer3);

            var respuesta3 = document.createElement("p");
            
            var resp3 = document.createTextNode(input3.value);

            respuesta3.appendChild(resp3);
            correctas.appendChild(respuesta3);
            
        }else {
            incorrectas.appendChild(answer3);

            var respuesta3 = document.createElement("p");
            
            var resp3 = document.createTextNode(input3.value);

            respuesta3.appendChild(resp3);
            incorrectas.appendChild(respuesta3);
        };

        
});
    });
});
}
