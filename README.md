# CHALLENGE-CONCURSO-DE-PREGUNTAS-FRONT
Reto técnico para sofka u

Para configurar el proyecto debemos tener instalados los siguientes programas:
1. Compilador de java como IntelliJ IDEA
2. jdk en su versión 8
3. Mongodb
4. Visual Studio Code

La conexión con la base de datos tiene los valores por defecto, utilizandose en local, con el puerto 27017 y nombre de base de datos: challenge-preguntas
Para habilitar el servidor que nos permita una conexión con la db, ejecutamos el programa mongod.exe.

Luego de ello corremos en Intellij el microservicio para permitir el consumo de la API, éste también se localiza en local utilizando el puerto por defecto 8080.

Seguidamente se procede utilizar la parte del front la cual podemos correr en Visual Studio Code

Para ello descargamos el repositorio con la respectiva parte del front y por consola utilizamos el comando "npm install"

Después de que haya finalizado la descarga utilizamos el comando "npm start" para iniciar nuestro servidor local, que por defecto está en el puerto 3000
