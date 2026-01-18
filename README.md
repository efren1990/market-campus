# PROYECTO MARKET CAMPUS / API REST

### Api para dar resolución a la prueba campus

# CONFIGURACIONES E INSTALACIÓN DEL PROYECTO

1. Acceda a la carpeta del proyecto
2. Instale las dependencias de node con el comando
   1. npm install
3. cree el archivo .env
4. Ingrese los variables de entorno al archivo .env
   1. PORT=3500
   2. HOST=localhost
   3. USERDB=root
   4. PASSDB=
   5. DIALECT=mysql
   6. DATABASE=market
5. Cree la base de datos market en su gestor mysql de preferencia "phpmyadmin", "dbeaver", etc
6. Para correr el proyecto puede usar los comandos:
   1. npm start
   2. npm run dev -> Modo desarrollo
7. Importe la colección postman a su gestor rest de preferencia "postman"
8. IMPORTANTE: ejecute el metodo POST: Bull Data Insert, antes de cualquier metodo en particular

# ENDPOINTS

En el archivo server.js se encuetras definidas las rutas en el metodo contructor() en la propiedad this.endpoints

A continuación lista de endpoint's definidos

1. GET: {{url}}/testing/test -> Uselo para dara un testin incial del api
2. POST: {{url}}/testing/testbody -> Uselo para dar un testing de datos enviados por body, raw o formdata
3. POST: {{url}}/bulkdata/insert -> Uselo para realizar una inserción masiva de datos, antes de realizar consultas
4. GET: {{url}}/productos/prostock ->
5. GET: {{url}}/productos/promasvendidos
6. GET{{url}}/productos/procategorias
7. {{url}}/tiendas/promociones?dia=param
