---
author: xeBuz
comments: true
date: 2012-01-23 16:34:56+00:00
layout: post
slug: comando-at-automatizar-scripts-sin-usar-crontab
title: Comando at, automatizar scripts sin usar crontab
wordpress_id: 660
categories:
- GNU/Linux
- Tips
tags:
- arch
- at
- bash
- bofh
- cron
- linux
- sysadmin
- terminal
- tips
---

A diferencia de **cron**, **at** permite programar un comando/script para que sea ejecutado sólo una vez y no periodicamente.

Antes que nada deben instalarlo, no suele venir en las distribuciones por defecto. Usen pacman, aptitude, yum o lo que sea, tiene que estar en los repositorios.
Una vez instalado, deben correr el servicio y por que no agregarlo en el /etc/rc.conf para que arranque solo. Si no hacen esto no van a correrse los scripts.

Para utilizarlo tenemos varias alternativas, la primera es _especificarle la fecha y hora_, luego escribir el script (es importante que una vez que terminemos, presionemos Control+D):

    
    at 10:31am Jan 23 
    warning: commands will be executed using /bin/sh
    at> yaourt -Syu      
    at> (Control +D) <eot>
    job 5 at Mon Jan 23 10:31:00 2012



También acepta otros _formatos_ de fechas, por ejemplo, para ejecutar algo mañana a esta misma hora, sería 

    
    at now tomorrow
    at> blah blah
    at> meh
    at> (Control +D) <eot>





Para mostrar los comandos que están en cola de ejecución, basta con hacer **at -l** o **atq**, esto nos traerá un id, la fecha/hora en la que se ejecuta y el usuario que lo creó. 

    
    at -l
    6	Mon Jan 23 11:41:00 2012 a xebuz
    7	Wed Jan 25 00:01:00 2012 a xebuz
    5	Mon Jan 23 10:31:00 2012 a xebuz



Para cancelar o eliminar una tarea pendiente, se utiliza **atrm** o **at -r** o **at -d** :P, seguida del id de la tarea (obtenida desde el comando anterior).
Por último, si quieren ver todo el contenido del script, con **at -c _id_** lo obtienen completo.


