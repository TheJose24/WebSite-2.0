package com.josesanchez.miportafolio.domain.openAI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

@Component
public class OpenAI {
    @Value("${OPEN_AI_API_KEY}")
    private String apiKey;
    @Value("${OPEN_AI_API_URL}")
    private String apiUrl;

    @Autowired
    private RestTemplate restTemplate;

    public String processResponse(String responseJson) {
        try {
            JSONParser parser = new JSONParser();
            JSONObject jsonResponse = (JSONObject) parser.parse(responseJson);
            JSONArray choices = (JSONArray) jsonResponse.get("choices");

            if (choices != null && !choices.isEmpty()) {
                JSONObject choice = (JSONObject) choices.get(0);
                JSONObject message = (JSONObject) choice.get("message");
                String content = (String) message.get("content");

                if (message.containsKey("function_call")) {
                    JSONObject functionCall = (JSONObject) message.get("function_call");
                    String functionName = (String) functionCall.get("name");


                    if ("Abrir_WhatsApp".equals(functionName)) {
                        return "FuncionActivada: " + functionName;
                    } else if ("Agendar_Reunion".equals(functionName)) {
                        return "FuncionActivada: " + functionName;
                    }
                }

                return content;
            } else {
                return "Respuesta vacía o no válida";
            }
        } catch (ParseException e) {
            e.printStackTrace();
            return "Error al procesar la respuesta generada";
        }
    }

    public String generateResponse(String pregunta) {
        try {
            String requestData = construirDatosSolicitud(pregunta);
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");
            headers.set("Authorization", "Bearer " + apiKey);

            HttpEntity<String> requestEntity = new HttpEntity<>(requestData, headers);

            ResponseEntity<String> responseEntity = restTemplate.exchange(apiUrl, HttpMethod.POST, requestEntity, String.class);
            String responseJson = responseEntity.getBody();

            return processResponse(responseJson);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error al generar la respuesta";
        }
    }

    public String construirDatosSolicitud(String pregunta) {
        String contexto = "Eres ALFRED, un asistente virtual altamente inteligente y versátil diseñado por José, creado para ser su intermediario y 'venderlo' a los clientes potenciales, respondiendo sus preguntas y proporcionando informacion relevante sobre sus habilidades, experiencias y logros."
                + "Tienes un conocimiento valioso sobre tu propietario, un estudiante de Ingeniería de Sistemas e Informática y graduado del programa Oracle Next Education (ONE) con un certificado que respalda su formación. Su objetivo es convertirse en un profesional altamente competente y hacer contribuciones significativas en el mundo del desarrollo de software, específicamente como desarrollador Full Stack. Experiencia y Logros Específicos: Durante su tiempo como estudiante, ha trabajado en varios proyectos académicos y personales que le han permitido adquirir habilidades significativas. Uno de sus proyectos personales favoritos es un asistente virtual que utiliza la API de OpenAI. Este asistente se comunica y responde por voz, lo que lo convierte en un proyecto Full Stack en el que ha trabajado tanto en el backend como en el frontend. También ha desarrollado su portafolio web utilizando HTML, CSS y JavaScript, lo que demuestra sus habilidades en desarrollo web (Front End). Uno de sus proyectos académicos incluyó la creación de un programa para una casa de cambios, que realizaba funciones como mostrar una lista de monedas disponibles, agregar nuevas monedas, modificar el tipo de cambio de cada moneda, realizar ventas (cambio de moneda) con métodos de pago preferidos y mantener un historial de ventas. A pesar de no utilizar una base de datos, gestionó eficazmente la información en la memoria local, este fue un proyecto Back End. Otro proyecto académico implicó el desarrollo de un sistema de reservas para un hotel, que cumplía con las funciones CRUD y estaba conectado a una base de datos MySQL. Este proyecto se desarrolló en Java. Habilidades Técnicas: su conjunto de habilidades incluye: Java, Python, Spring Boot, Flask, HTML, CSS, JavaScript, MySQL, SQL Server, API REST. Ejemplos de Colaboración en Equipo: Ha tenido la oportunidad de trabajar en equipos académicos en proyectos como el 'Programa para una Casa de Cambios' y en un proyecto actual de un 'Programa de Ventas para Eventos'. Su experiencia en programación le ha permitido liderar y guiar a sus equipos, compartir conocimientos, corregir y motivar. Además, ha estado activamente involucrado en la programación en equipo para lograr los objetivos de los proyectos. Objetivos Profesionales: Su objetivo profesional es convertirse en un desarrollador Full Stack y trabajar en una empresa extranjera donde pueda aplicar sus habilidades técnicas y contribuir de manera significativa a proyectos desafiantes."

                + "Estas aqui para que puedas captar el interes de los reclutadores de TI y facilitar el proceso de contratacion para José. Si alguien necesita mas detalles o tiene preguntas especificas sobre José, puedes responder utilizando la informacion que te eh proporcionado previamente: "

                + "Puedes destacar su informacion academica, experiencia laboral, habilidades tecnicas y proyectos destacados. Ademas tienes la capacidad de agendar reuniones con José (si lo solicitan) o enviar mensajes directos para que José pueda discutir oportunidades de trabajo o colaboracion"

                + "Debes brindar respuestas precisas y cortas, no excediéndote de las 40 palabras."
                + "Solo hablas español.";


        return "{\n" +
                "  \"model\": \"gpt-3.5-turbo-0613\",\n" +
                "  \"messages\": [\n" +
                "    {\n" +
                "      \"role\": \"system\",\n" +
                "      \"content\": \"" + contexto + "\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"role\": \"user\",\n" +
                "      \"content\": \"" + pregunta + "\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"functions\": [\n" +
                "    {\n" +
                "      \"name\": \"Abrir_WhatsApp\",\n" +
                "      \"description\": \"Abrir un chat de WhatsApp con José\",\n" +
                "      \"parameters\": {\n" +
                "        \"type\": \"object\",\n" +
                "        \"properties\": {}\n" +
                "      }\n" +
                "    },\n" +
                "    {\n" +
                "      \"name\": \"Agendar_Reunion\",\n" +
                "      \"description\": \"Pedir los datos necesarios para agendar una reunión con José\",\n" +
                "      \"parameters\": {\n" +
                "        \"type\": \"object\",\n" +
                "        \"properties\": {}\n" +
                "      }\n" +
                "    }\n" +
                "  ],\n" +
                "  \"function_call\": \"auto\"\n" +
                "}";
    }
}