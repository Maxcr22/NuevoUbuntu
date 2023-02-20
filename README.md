

Introducción:Permite a la aplicacion enviar y recibir datos utilizando los métodos HTTP (GET, POST, PUT, DELETE, etc.). La API expone recursos a través de URLs bien definidas, las cuales pueden ser accedidas y manipuladas mediante los verbos HTTP. Los datos se representan en formato JSON (JavaScript Object Notation) o XML (Extensible Markup Language), lo que facilita la interoperabilidad entre diferentes lenguajes de programación. El primer paso que se realizo fue la instalación de la maquina virtual desde la pagina oficila de Oracle(https://www.oracle.com/es/virtualization/technologies/vm/downloads/virtualbox-downloads.html?source=:ow⭕p:nav:mmddyyVirtualBoxHero_es&intcmp=:ow⭕p:nav:mmddyyVirtualBoxHero_es), junto a la imagen ISO de Ubuntu en su pagina oficial igualmente(https://releases.ubuntu.com/22.04/) Luego al haber instalado el Ubuntu en la virtual box se hace la configuración de esta misma para la instalación de Node.js y express Los pasos siguientes para configurar e instalar lo necesario fueron: 1-Instala los paquetes de nodejs con el comando: sudo apt install nodejs y luego lo actualiza con el comando: sudo apt update 2-Instala el NVM con el comando: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash 3-Usa wgety con el comando: wget -q0- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash 4-Cierra y vuelva a abrir la terminal para que el sistema reconozca los cambios con el comando: source ~/.bashrc 5-Revisa si esta instalado debidamente el NVM:nvm --version 6-Comprueba la versión del sistema: nvm ls 7-Busca nuevas versiones: nvm ls-remote 8-Ultimamente instala la ultima versión: nvm install [numero de versión] Luego se instala el PosTgreSQL con la instalación de la base de datos: 1-Se instala el PostgreSQL: sudo apt-get install postgresql postgresql-contrib 2-Instalación del PGadmin: sudo apt-get install pgadmin3 3-Conexión por terminal: sudo -u postgres psql 4-Salir de la terminal: \q 5-Cambio de contraseña: alter user postgres with password ''; Por último se hace la instalación del visual code: 1-Se actualiza el sistema: sudo apt update && sudo apt upgrade -y 2-Se instalan los paquetes: sudo apt install software-properties-common apt-transport-https wget -y 3-Importa los repositorios: wget -O- https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor | sudo tee /usr/share/keyrings/vscode.gpg 4-Actualizar el sistema nuevamente: sudo apt update 5-Instala el editor: sudo apt install code 6-Y ya esta preparado todo para ser usado




Esta es una aplicación creada con NodeJS y Express JS que proporciona una API REST conectada a un modelo de base de datos PostgreSQL

## Tecnologías utilizadas

- JavaScript
- NodoJS
- ExpressJS
-PostgreSQL

## Configuración/Instalación

- Clone este repositorio en su computadora local.
- En una terminal ejecuta esto para instalar todas las dependencias

```
    instalar npm
```

- Archivo .env

## Ejecuta la aplicación

    npm ejecutar dev

# API REST

La API REST se describe a continuación.

Hay rutas para varias tablas de bases de datos:

- /users
- /pedidos


## Obtenga una lista de [Nombre de la ruta]

### Pedido

`GET /[Nombre de la ruta]/`

`POST /[Nombre de la ruta]/`

`PUT /[Nombre de la ruta]/:id/`

`DELETE /[Nombre de la ruta]/id`

## BD

CREATE DATABASE api;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);


CREATE TABLE pedidos (
    id_pedido SERIAL PRIMARY KEY,
    id_usuario INTEGER REFERENCES users(id),
    fecha_pedido DATE,
    total_pedido NUMERIC(10,2)
);

INSERT INTO pedidos (id_usuario, fecha_pedido, total_pedido)
VALUES
    (1, '2021-01-01', 100.50),
    (2, '2021-02-05', 200.25),
    (3, '2021-03-10', 150.75),
    (4, '2021-04-15', 75.00),
    (1, '2021-05-20', 125.50),
    (2, '2021-06-25', 75.25),
    (3, '2021-07-30', 50.00),
    (4, '2021-08-31', 300.00),
    (1, '2021-09-15', 175.50),
    (2, '2021-10-20', 250.75);