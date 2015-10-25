---
author: xeBuz
comments: true
date: 2011-09-26 17:23:59+00:00
layout: post
slug: versionar-el-directorio-etc-con-git
title: Versionar el directorio /etc con Git
wordpress_id: 358
categories:
- GNU/Linux
- Tutoriales
tags:
- bofh
- configuracion
- git
- linux
- sysadmin
- terminal
- tips
---

Una buena práctica, sobre todo si les gusta modificar los archivos de configuración para probar cosas o instalar aplicaciones constantemnte, es versionar el directorio /etc, para el caso en el que nos <del>mandemos alguna cagada</del> equivoquemos en alguna configuración, el problema sea facilmente remediable.
La instalación y configuración es muy sencilla, en este caso es todo manual, si quieren saltearse todo e instalar directamente **[etckeeper](http://kitenet.net/~joey/code/etckeeper/)** es válido igual ;)

Antes que todo, hay que instalar **git** (usé git porque...si)

    
    yaourt -S git


Después vamos al directorio correspondiente y creamos el repositorio:

    
    cd /etc && git init 
    Initialized empty Git repository in /etc/.git/


Agregamos todos los archivos:

    
    git add --all


Hacemos nuestro primer commit:

    
    git commit -m "Mira mama, estoy usando versionado"


Pueden crear un nuevo brach, como para tener una copia inicial del directorio, solo basta hacer:

    
    git branch inicial


Para verificar cambios sin commitear, pueden usar:

    
    git status


En crontab crear commits diarios, no se, esas cosas las manejan a gusto, prefiero hacerlo manual...

Pueden cambiar de branch con "git checkout "...en fin, a partir de ahora los cambios que quieran hacer corren por su cuenta, esta es la configuración basica para que funcione. Mas información de git pueden encontrarla en [http://schacon.github.com/git/gittutorial.html](http://schacon.github.com/git/gittutorial.html)


<!-- more -->
Para ver los cambios, puede usar algunas apps como:
**SmartGit**
Bastante cómoda, y eso que está hecho en [Java](http://gifninja.com/animatedgifs/250429/trollface.gif)! :P
Aca les dejo una imagen de como se ve, por si les interesa
[![SmartGit on pacman.conf](http://blog.jesusroldan.com/wp-content/uploads/2011/09/Screenshot-14-300x197.png)](http://blog.jesusroldan.com/wp-content/uploads/2011/09/Screenshot-14.png)

Pero no conozco más herramientas con GUI, si usan alguna en particular bienvenida sea...
[quote style="1"]Si no te equivocas de vez en cuando, es que no lo intentas.


_ Woody Allen_

[/quote]
