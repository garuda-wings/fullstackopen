# 0.6: Nueva nota en aplicación de una sola página

sequenceDiagram
    participant browser
    participant server

    Note right of browser: El usuario escribe una nueva nota y pulsa Save

    browser->>server: POST /exampleapp/new_note_spa
    activate server

    Note right of browser: La nueva nota se envía en el body de la petición

    server-->>browser: HTTP 201 Created
    deactivate server

    Note right of browser: JavaScript actualiza la interfaz sin recargar la página