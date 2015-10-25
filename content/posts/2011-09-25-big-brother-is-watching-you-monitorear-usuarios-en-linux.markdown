---
author: xeBuz
comments: true
date: 2011-09-25 16:18:50+00:00
layout: post
slug: big-brother-is-watching-you-monitorear-usuarios-en-linux
title: Big Brother is watching you. Monitorear usuarios en Linux.
wordpress_id: 342
categories:
- GNU/Linux
- Tips
tags:
- bash
- bofh
- linux
- sysadmin
- terminal
- tips
---

Mantener un sistema estable a veces requiere observar que estan haciendo los usuarios.
No significa que tengamos que ponernos la gorra del Partido y salir a perseguir a Emmanuel Goldstein, sino sólo controlar un poco los recursos, evitando picos altos que puedan provocarnos inestabilidad.
Acá les dejo un par de comandos o de aplicaciones que tienen este propósito, espero que alguna les sirva

**who**
El más simple, devuelve una lista de usuarios loggeados, y la tty donde están.

**w**
Similar a who, pero en este caso da un poco mas de información (no demasiada). Lista usuario, tty, tiempo loggeado, carga del sistema general y del usuario y que esta haciendo en ese momento. Un comando rápido, fácil y útil.

**whowatch**
Una aplicación bastante útil, crea un árbol con los usuarios loggeados, y 
Con_ control + k_ mandamos un SIGKILL, con c switcheamos entre "comando/nombre de aplicacion", la _o_ nos muestra el owner.
Pueden bajarla desde aca http://wizard.ae.krakow.pl/~mike/ aunque segurmente esté el los repositorios de la distro que usen.

**last** y **lastlog**
Muestra el ultimo acceso de los usuarios, el segundo es el mas simple y cómodo para leer, lista los usuarios, tty, desde donde y fecha y hora del acceso.

**psacct**
Este es un conjunto de aplicaciones, muy utiles (informacion detallada [aca](http://generationip.com/documentation/system-documentation/113-howto-on-psacct-for-a-complete-monitoring-of-processus-and-users-activities-on-your-system)), dentro de las cuales se encuentra:



        
  * _ac_: Muestra informacion acerca de cuanto tiempo estuvo loggeado el usuario. 

	
  * _lastcomm_: Información sobre el ultimo comando ejecutado. 

	
  * _sa_: Informacion sumarizada con los datos del comando anterior. 

	
  * _last y lastb_: Funciona muy similar al comando nombrado anteriormente, pero el segundo muestra tambien accesos fallidos.




