# 0.5: Diagrama de aplicación de una sola página

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: JavaScript se ejecuta en el navegador

    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: JSON con las notas
    deactivate server

    Note right of browser: JavaScript utiliza los datos para renderizar las notas