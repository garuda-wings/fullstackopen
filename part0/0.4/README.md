# 0.4: Nuevo diagrama de nota

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: El usuario escribe una nueva nota y pulsa Save

    browser->>server: POST /exampleapp/new_note
    activate server

    Note right of browser: La nota se envía en el body de la petición

    Note right of server: El servidor crea la nota y la añade al array notes

    server-->>browser: HTTP 302 Redirect /notes
    deactivate server

    browser->>server: GET /exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: El navegador ejecuta main.js

    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: JSON con las notas
    deactivate server

    Note right of browser: JavaScript utiliza los datos para renderizar las notas