package com.josesanchez.miportafolio.controller;

import com.josesanchez.miportafolio.domain.openAI.OpenAI;
import com.josesanchez.miportafolio.domain.usuario.MensajeUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatBotController {

    @Autowired
    private OpenAI openAI;

    @PostMapping("/respuesta")
    public String respuestaChatBot(@RequestBody MensajeUsuario mensajeUsuario) {
        if (mensajeUsuario != null && mensajeUsuario.getMensajeUsuarioTexto() != null) {
            String mensaje = mensajeUsuario.getMensajeUsuarioTexto();
            String respuesta = openAI.generateResponse(mensaje);

            return respuesta;

        } else {
            return "Mensaje de usuario nulo o vacío.";
        }
    }
}
