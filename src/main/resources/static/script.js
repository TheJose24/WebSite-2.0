/*====================Loader=================================
Este código es para un loader que se mostrará
durante 3 segundos antes de desvanecerse y
permitir que se muestre el contenido del sitio web.*/

document.addEventListener("DOMContentLoaded", function () {
  var loaderContainer = document.getElementById("loader");

  setTimeout(function () {
    loaderContainer.classList.add("loader2");
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
  }, 3000);
  setTimeout(function () {
    loaderContainer.style.display = "none";
  }, 4000);
  document.body.style.overflow = "hidden";
});
//=====================Fin Loader============================

/*=======================MENU RESPONSIVE-max width:980px======================
Este código define dos funciones para mostrar y ocultar un menú,
y para seleccionar una opción del menú. La primera función alterna
la visibilidad del menú agregando o quitando una clase CSS al
elemento de navegación, y también agrega o quita una clase al cuerpo
para habilitar o deshabilitar el desplazamiento. La segunda función
simplemente oculta el menú después de que se ha seleccionado una opción.*/

let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    document.body.classList.remove("no-scroll"); // Habilitar scroll
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    document.body.classList.add("no-scroll"); // Deshabilitar scroll
    menuVisible = true;
  }
}

function seleccionar() {
  //Oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  document.body.classList.remove("no-scroll"); // Habilitar scroll
  menuVisible = false;
}
/*===============================FIN MENU====================================*/

/*===============================ANIMACION SKILLS===============================
Esta función activa un efecto visual en la sección de habilidades de la página
web cuando se desplaza hacia ella*/

function efectoSkills() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("java");
    habilidades[3].classList.add("mysql");
    habilidades[4].classList.add("python");
    habilidades[5].classList.add("gitgithub");
    habilidades[6].classList.add("comunicacion");
    habilidades[7].classList.add("trabajo");
    habilidades[8].classList.add("aprendizaje");
    habilidades[9].classList.add("responsabilidad");
    habilidades[10].classList.add("creatividad");
    habilidades[11].classList.add("dedicacion");
  }
}
//=============================FIN ANIMACION======================================

/*======================FUNCION DE NAVEGACION DE SECCIONES=====================
regar la clase "active" a la sección actual en la barra de navegación. La función
"actualizarSeccionActual()" recorre todas las secciones y agrega la clase "active"
a la etiqueta "a" correspondiente a la sección actual. Además, se extrae el valor
del hash de la URL para agregar la clase "active" a la sección correspondiente en
la barra de navegación.*/

// Obtener la URL actual
$(document).ready(function () {
  // Agregar la clase "active" a la sección actual al cargar la página
  actualizarSeccionActual();
  // Agregar la clase "active" a la sección actual al desplazarse por la página
  $(window).scroll(function () {
    actualizarSeccionActual();
  });
});
function actualizarSeccionActual() {
  // Obtener la posición actual del desplazamiento
  var scrollPos = $(document).scrollTop();
  // Recorrer todas las secciones y determinar cuál es visible en la pantalla
  $("#nav a").each(function () {
    var ref = $(this).attr("href");
    var seccionPos = $(ref).offset().top;
    var seccionAltura = $(ref).outerHeight();
    if (seccionPos <= scrollPos && seccionPos + seccionAltura > scrollPos) {
      // Agregar la clase "active" a la etiqueta "a" correspondiente a la sección actual
      $(this).addClass("active");
    } else {
      // Eliminar la clase "active" de la etiqueta "a" correspondiente a las secciones no visibles
      $(this).removeClass("active");
    }
  });
}

var url = window.location.href;
// Obtener el valor del hash de la URL (por ejemplo, "#inicio")
var hash = url.substring(url.indexOf("#"));
// Agregar la clase "active" a la etiqueta "a" correspondiente a la sección actual
$('#nav a[href="' + hash + '"]').addClass("active");
//=============================================FIN=====================================================

/*=============================Animación de habilidades al desplazarse=============================
Detecto el scrolling para aplicar la animacion de la bara de habilidades.
Esto permite que la animación se active cuando el usuario llega a cierto punto de la página*/

window.onscroll = function () {
  efectoSkills();
};
//=========================================FIN ANIMACION=============================================

/*================Técnica de retraso para envío de formulario de contacto===================
 Este código es para un formulario de contacto que tiene una función de retraso de 3 segundos
 antes de enviar el formulario. Cuando el usuario hace clic en el botón de envío, se deshabilita
 temporalmente para evitar envíos duplicados y se agrega un retraso antes de enviar el formulario.*/

/*document.querySelector('form[name="formulario-contacto"]').addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de inmediato
    
    document.getElementById("submitButton").disabled = true; // Deshabilita el botón de envío
    
    // Agrega un retraso de 3 segundos antes de enviar el formulario
    setTimeout(function() {
      event.target.submit(); // Envía el formulario después del retraso
    }, 3000);
  });
  //=====================================FIN FORMULARIO==================================================*/

//======================================= Boton Chat ==================================================
let clicks = 1; // Variable para controlar el estado de la ventana de chat (1: visible, 2: oculta)

// Función para cambiar la visibilidad de la ventana de chat
function clickear() {
  let chat = document.getElementById("chat");
  let container = document.getElementById("container");
  let icono = document.getElementById("icono");
  if (clicks == 1) {
    // Si está visible, cambiar la opacidad a 1 y aplicar una transición suave
    chat.style.opacity = "1";
    chat.style.position = "fixed";
    chat.style.display = "block";
    container.style.display = "flex";
    chat.style.transition = "opacity 0.2s";
    icono.style.display = "none";
    clicks = 2; // Cambiar el estado a oculto
  } else if (clicks == 2) {
    // Si está oculta, cambiar la opacidad a 0
    chat.style.opacity = "0";
    chat.style.position = "relative";
    chat.style.display = "none";
    container.style.display = "none";
    icono.style.position = "fixed";
    icono.style.display = "flex";
    clicks = 1; // Cambiar el estado a visible
  }
}

// Variables para almacenar los datos de la reunión
let nombre = "";
let apellido = "";
let hora = "";
let fecha = "";
let motivo = "";

// Mensajes para guiar al usuario a través de la recopilación de información
const mensajes = [
  "Por favor, proporciona tu nombre:",
  "Gracias. Ahora, proporciona tu apellido:",
  "Por favor, proporciona la hora disponible:",
  "Por favor, proporciona la fecha:",
  "Por último, proporciona el motivo de la reunión:",
];

// Índice para rastrear el progreso de la conversación
let indiceConversacion = 0;



//=====================================================================================================

//=====================================================================================================







const cajaTexto = document.querySelector(".cajaTexto textarea");
const containerWhat = document.getElementById("containerWhat");

function enviar() {
  // Obtén el contenedor de mensajes y la caja de texto
  const containerWhat = document.getElementById("containerWhat");

  // Obtén el texto ingresado por el usuario en la caja de texto
  mensajeUsuarioTexto = cajaTexto.value;

  // Verifica que haya texto ingresado antes de agregar el mensaje
  if (mensajeUsuarioTexto.trim() !== "") {
    // Crea un nuevo elemento div con la clase "containerMensaje usuario"
    const nuevoMensajeUsuario = document.createElement("div");
    nuevoMensajeUsuario.classList.add("containerMensaje", "usuario");

    // Crea un nuevo elemento div para el mensaje del usuario
    const mensajeUsuario = document.createElement("div");
    mensajeUsuario.classList.add("mensaje", "msgUsuario");
    mensajeUsuario.textContent = mensajeUsuarioTexto;

    // Crea un nuevo elemento div para el icono del usuario
    const iconoUsuario = document.createElement("div");
    iconoUsuario.classList.add("imagen", "imgUsuario");

    // Crea un elemento img y configúralo
    const imagenUsuario = document.createElement("img");
    imagenUsuario.classList.add("imgMensaje");
    imagenUsuario.src = "images/usuario.png";
    imagenUsuario.alt = "Imagen de usuario"; // Añade un atributo alt apropiado

    // Agrega la imagen del usuario al elemento iconoUsuario
    iconoUsuario.appendChild(imagenUsuario);

    // Agrega el mensaje del usuario y el icono al contenedor del mensaje de usuario
    nuevoMensajeUsuario.appendChild(mensajeUsuario);
    nuevoMensajeUsuario.appendChild(iconoUsuario);

    // Agrega el nuevo mensaje de usuario al contenedor de mensajes
    containerWhat.appendChild(nuevoMensajeUsuario);
    containerWhat.scrollTo(0, containerWhat.scrollHeight);

    // Limpia el contenido de la caja de texto
    cajaTexto.value = "";

    //================================================================
    setTimeout(function () {
      // Agrega un mensaje de respuesta del asistente
      const nuevoMensajeAsistente = document.createElement("div");
      nuevoMensajeAsistente.classList.add("containerMensaje", "asistente");

      // Crea un nuevo elemento div para el icono del usuario
      const iconoAsistente = document.createElement("div");
      iconoAsistente.classList.add("imagen", "imgAsistente");

      // Crea un elemento img y configúralo
      const imagenAsistente = document.createElement("img");
      imagenAsistente.classList.add("imgMensaje");
      imagenAsistente.src = "images/botHeader.png";
      imagenAsistente.alt = "Imagen de asistente"; // Añade un atributo alt apropiado

      // Agrega la imagen del usuario al elemento iconoAsistente
      iconoAsistente.appendChild(imagenAsistente);

      // Crea un nuevo elemento div para el mensaje del usuario
      const mensajeAsistente = document.createElement("div");
      mensajeAsistente.classList.add("mensaje", "msgAsistente");
      mensajeAsistente.textContent = "Un momento por favor...";

      // Agrega el mensaje del usuario y el icono al contenedor del mensaje de usuario
      nuevoMensajeAsistente.appendChild(iconoAsistente);
      nuevoMensajeAsistente.appendChild(mensajeAsistente);

      // Agrega el nuevo mensaje de usuario al contenedor de mensajes
      containerWhat.appendChild(nuevoMensajeAsistente);
      containerWhat.scrollTo(0, containerWhat.scrollHeight);



      const mensajeUsuario = {
        mensajeUsuarioTexto: mensajeUsuarioTexto// Reemplaza con el texto del usuario
      };
      console.log(mensajeUsuario)
      let respuestaDelServidor = "";
      // Realiza una solicitud HTTP POST al servidor.
        fetch("/respuesta", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(mensajeUsuario)
        })
          .then(response => response.text()) // Convierte la respuesta a texto
          .then(data => {
              console.log("Respuesta del servidor:", data);

              // Verifica si se activó una función y llama a la función correspondiente
              if (data.includes("FuncionActivada: Abrir_WhatsApp")) {
                  const confirmacion = window.confirm("¿Desea abrir WhatsApp para enviar un mensaje?");
                  data=("¡Listo! Te redirigiré a WhatsApp para que puedas contactar a José. Si no fuiste redireccionado, puedes hacerlo manualmente a través de el siguiente enlace:");
                  mensajeAsistente.textContent = data;
                  if (confirmacion) {
                      const url = "https://wa.me/51950532495?text=Hola%20José!%20Estoy%20interesado%20en%20contactarte%20para%20una%20oportunidad%20laboral";
                      data = url;
                      window.open(url, "_blank");


                      // Crea un nuevo elemento de hipervínculo
                      const enlace = document.createElement("a");
                      enlace.href = url;
                      enlace.target = "_blank";
                      enlace.textContent = "Enlace directo"; // Texto que se mostrará como hipervínculo

                      // Crea un nuevo elemento de mensaje
                      const nuevoMensajeAsistente = document.createElement("div");
                      nuevoMensajeAsistente.classList.add("containerMensaje", "asistente");

                      // Crea un nuevo elemento div para el icono del usuario
                      const iconoAsistente = document.createElement("div");
                      iconoAsistente.classList.add("imagen", "imgAsistente");

                      // Crea un elemento img y configúralo
                      const imagenAsistente = document.createElement("img");
                      imagenAsistente.classList.add("imgMensaje");
                      imagenAsistente.src = "images/botHeader.png";
                      imagenAsistente.alt = "Imagen de asistente"; // Añade un atributo alt apropiado

                      // Agrega la imagen del usuario al elemento iconoAsistente
                      iconoAsistente.appendChild(imagenAsistente);

                      // Crea un nuevo elemento de mensaje de usuario
                      const mensajeAsistente = document.createElement("div");
                      mensajeAsistente.classList.add("mensaje", "msgAsistente");
                      mensajeAsistente.textContent = "";

                      // Agrega el hipervínculo al mensaje de usuario
                      mensajeAsistente.appendChild(enlace);

                      // Agrega el mensaje del usuario al contenedor del mensaje de usuario
                      nuevoMensajeAsistente.appendChild(iconoAsistente);
                      nuevoMensajeAsistente.appendChild(mensajeAsistente);

                      // Agrega el nuevo mensaje de usuario al contenedor de mensajes
                      containerWhat.appendChild(nuevoMensajeAsistente);
                      containerWhat.scrollTo(0, containerWhat.scrollHeight);

                  } else {
                      mensajeAsistente.textContent = "¡No hay problema! Si deseas contactar a José de otra forma, puedes hacerlo a través de sus redes sociales.";
                      containerWhat.scrollTo(0, containerWhat.scrollHeight);
                  }
                  console.log("Se esta abriendo whatsapp")
              } else if (data.includes("FuncionActivada: Agendar_Reunion")) {


                  manejarRecopilacionInformacion();

                  containerWhat.scrollTo(0, containerWhat.scrollHeight);
                  console.log("Se esta agendando una reunion")
              } else {
                  respuestaDelServidor = data;
                  mensajeAsistente.textContent = respuestaDelServidor;
                  containerWhat.scrollTo(0, containerWhat.scrollHeight);
              }
          })
          .catch(error => {
              console.error("Error al obtener la respuesta del servidor:", error);
          });


    }, 600);
  }
}

function manejarRecopilacionInformacion() {
    if (indiceConversacion < mensajes.length) {
        // Agrega un mensaje de respuesta del asistente
        const nuevoMensajeAsistente = document.createElement("div");
        nuevoMensajeAsistente.classList.add("containerMensaje", "asistente");

        // Crea un nuevo elemento div para el icono del usuario
        const iconoAsistente = document.createElement("div");
        iconoAsistente.classList.add("imagen", "imgAsistente");

        // Crea un elemento img y configúralo
        const imagenAsistente = document.createElement("img");
        imagenAsistente.classList.add("imgMensaje");
        imagenAsistente.src = "images/botHeader.png";
        imagenAsistente.alt = "Imagen de asistente"; // Añade un atributo alt apropiado

        // Agrega la imagen del usuario al elemento iconoAsistente
        iconoAsistente.appendChild(imagenAsistente);

        // Crea un nuevo elemento div para el mensaje del usuario
        const mensajeAsistente = document.createElement("div");
        mensajeAsistente.classList.add("mensaje", "msgAsistente");
        mensajeAsistente.textContent = mensajes[indiceConversacion];

        // Agrega el mensaje del usuario y el icono al contenedor del mensaje de usuario
        nuevoMensajeAsistente.appendChild(iconoAsistente);
        nuevoMensajeAsistente.appendChild(mensajeAsistente);

        // Agrega el nuevo mensaje de usuario al contenedor de mensajes
        containerWhat.appendChild(nuevoMensajeAsistente);
        containerWhat.scrollTo(0, containerWhat.scrollHeight);

        console.log(mensajeAsistente.textContent)

        // Incrementa el índice de conversación
        indiceConversacion++;

        cajaTexto.addEventListener("input", function () {
            const respuestaUsuario = cajaTexto.value;

            // Almacena la respuesta del usuario en la variable correspondiente
            switch (indiceConversacion) {
                case 1:
                    nombre = respuestaUsuario;
                    break;
                case 2:
                    apellido = respuestaUsuario;
                    break;
                case 3:
                    hora = respuestaUsuario;
                    break;
                case 4:
                    fecha = respuestaUsuario;
                    break;
                case 5:
                    motivo = respuestaUsuario;
                    break;
            }

            console.log(respuestaUsuario)
            // Llama recursivamente para la siguiente pregunta
            manejarRecopilacionInformacion();

        });
    } else {
        // Proceso de recopilación de información completo
        // Guardar los detalles de la reunión y realizar acciones adicionales si es necesario
        guardarDetallesReunion();
    }
}


function guardarDetallesReunion() {
    // Realiza cualquier acción que necesites con los detalles de la reunión, por ejemplo, enviarlos al servidor o almacenarlos localmente.
    // Por ahora, solo mostraremos un mensaje de agradecimiento al usuario.

    // Simula un envío de los detalles de la reunión al servidor
    // En un entorno real, debes reemplazar esto con la lógica de tu servidor
    fetch('/guardarReunion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            hora: hora,
            fecha: fecha,
            motivo: motivo,
        }),
    })
        .then(response => response.json())
        .then(data => {
            // Aquí puedes manejar la respuesta del servidor si es necesario
        })
        .catch(error => {
            console.error('Error al guardar los detalles de la reunión:', error);
        });

    // Restablece la conversación para futuras interacciones
    indiceConversacion = 0;

    // Limpia el campo de texto
    cajaTexto.value = '';

    // Muestra un mensaje de agradecimiento al usuario
    const mensajeAsistente = document.createElement('div');
    mensajeAsistente.classList.add('mensaje', 'msgAsistente');
    mensajeAsistente.textContent = '¡Gracias! Hemos guardado los detalles de tu reunión.';

    // Agrega el mensaje del asistente al contenedor de mensajes
    containerWhat.appendChild(mensajeAsistente);
    containerWhat.scrollTo(0, containerWhat.scrollHeight);
}


/*Ajustar la altura del text area automaticamente*/
const alturaInicialInput = cajaTexto.scrollHeight;

cajaTexto.addEventListener("input", () => {
  cajaTexto.style.height = `${alturaInicialInput}px`;
  cajaTexto.style.height = `${cajaTexto.scrollHeight}px`;
});

/*Habilitar el icono de enviar cuando se ingresa texto*/
const btnEnviar = document.getElementById("btnEnviar");

cajaTexto.addEventListener("input", function () {
  if (cajaTexto.value.trim() !== "") {
    btnEnviar.style.visibility = "visible";
  } else {
    btnEnviar.style.visibility = "hidden";
  }
});
