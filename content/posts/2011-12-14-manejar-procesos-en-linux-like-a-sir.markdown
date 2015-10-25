---
author: xeBuz
comments: true
date: 2011-12-14 18:24:08+00:00
layout: post
slug: manejar-procesos-en-linux-like-a-sir
title: Manejar procesos en Linux, Like a Sir
wordpress_id: 531
categories:
- GNU/Linux
- Tips
tags:
- bofh
- command
- linux
- tips
---

Particularmente me gusta tener alguna de las aplicaciones listo corriendo en la tty1 y cuando algo falla, porque siempre algo puede malir sal, control + alt +F1 viene como piña para ver el problema rápido.
Me pasó de tener problemas en ambientes Windows, y es una de las cosas que mas se extrañan; el administrador de tareas no hace todo lo que debería (como el de Gnome o KDE, si algo falla en el X o te quedás sin recursos no los vas a poder usar)

**ps y kill**
Estos comandos son los clásicos, por excelencia.
El uso estandar, cavernícola y mas difundido es _ps aux_, tambien _ps aux | grep <app>_ para filtrar, y después un _kill -9 UID_ obtenido con el comando anterior, pero eso no es lo que un Sir haría.

**pgrep y pkill**
Tenemos pgrep funcionaría como pidof, pero con mejor parametrización e información; mientras que pkill sirve para mandar señales, si, como kill, pero permite expersiones regulares y algunos filtros muy interesantes.
Algunos ejemplos: _pgrep -u firebird -l_ mostraría todos los nombres de los procesos que esta usando el usuario firebird, _pkill -9 firefox_ es mucho más cómodo que el ps y después el kill.. dirán "¡Dejate de joder! ¡es igual que killall!" pero no, pueden potenciarlo más, digamos, matar la tty0 o mejor aún una sesión ssh basta correr con _pkill -9 -t pts/5_.

**top**
Visualizador de procesos. Si llegaste hasta acá imagino que ya lo usaste y sabés lo básico, les tengo fe. Sólo para el registro, me gusta activar las opciones B, 1 y z.
De nuevo, es lo más usado, lo mas enseñado y lo mas clásico. Siempre hay mejores opciones.

**htop**
Es como top, pero con esteroides. Mejores shortcuts, colores, permite usar el mouse, mejor navegabilidad, filtros, ordenación, threads y otras chucherías.
Las funcionalidades mas uso: < para ordenar, F9 para matar apps, F3 para buscat, t para treeview,
Ya que estamos, la H es de Hisham, el nombre del desarrollador.

**atop**
Es una de esas aplicaciones que está buena para abrirlas cuando alguien no-linuxero se acerca a tu PC, así piensa que te conectas a la Matrix desde el teclado y le vas pasando órdenes por ósmosis.
Sería una versión mas detallada de las dos aplicaciones anteriores, pero menos interactiva. Les daría algun tip, pero lo uso de poser nada más :P
<!-- more -->
Aca una imágen comparativa, a la izquierda top, a la dercha htop, abajo atop.

[caption id="attachment_541" align="aligncenter" width="695" caption="Comparativa entre Top, Htop y Atop"][![Comparativa entre Top, Htop y Atop](http://blog.jesusroldan.com/wp-content/uploads/2011/12/top-1024x538.png)](http://blog.jesusroldan.com/wp-content/uploads/2011/12/top.png)[/caption]

Espero que les sirva, dígale no al ps blah grep blah kill blah. Iba a escribir también sobre prioridades y estados, pero lo hago otro día, post largo y denso = post que no se lee.
