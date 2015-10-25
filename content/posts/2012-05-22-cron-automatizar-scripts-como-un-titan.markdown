---
author: xeBuz
comments: true
date: 2012-05-22 16:48:07+00:00
layout: post
slug: cron-automatizar-scripts-como-un-titan
title: Cron, automatizar scripts como un titán
wordpress_id: 1150
categories:
- GNU/Linux
- Tips
tags:
- arch
- cron
- linux
- vi
---

Hace un tiempo escribí sobre [la utilización del comando **at**](http://blog.jesusroldan.com/2012/01/23/comando-at-automatizar-scripts-sin-usar-crontab/), ahora le toca el turno a **cron**. ¿Tron? No, cron. ¡Troz! (?).
¿Qué es cron? Es un administrador de procesos que se ejecuta a un interválo de tiempo específico. Si vienen del Dark Side, sería el equivalente a las _Tareas Programadas_ de W.

La instalación es simple (está en los repos o incluso ya instalada, en toda distribución que se jacte de ser tal), en fín, en Arch podrían hacer:

    
    pacman -S --needed cronie



Al principio puede resultar extraña la configuracion de crontab, pero con el tiempo termina siendo más simple de lo que aparenta y se puede lograr cosas muy buenas de una forma muy sencilla.

Primero, tenemos 5 espacios para colocar los tiempos, que se dividen en minutos, horas, días del mes, meses y días de la semana; si alguno de estos datos no se rellena, se debe colocar un asterísco, que significa "todos" (para que sea entendible y hasta leíble). Después de eso se coloca la ruta completa del script que quieren que se ejecute en ese determinado lapso de tiempo.

En cualquier campo, asumiendo que ya entendimos los rangos de cada uno, podemos colocar tanto un valor específico, varios valores separados por coma o un rango separado por un guión. Por ejemplo:

[code lang="bash"]
#Se ejecuta a las 5 de la mañana, en punto
0 5 * * * * /home/jesus/Scripts/tomar_cafe.sh

#Se ejecuta a las 5 y a las 17 horas, en punto
0 5,17 * * * /home/jesus/Scripts/loquesea.sh

#Se ejecuta *desde* las 5, cada hora "en punto" *hasta* las 17hs.
0 5-17 * * * /home/jesus/Scripts/latigo.sh

#Similar al anterior, pero ejecuta cada minuto entre las 5 y las 17
#miren el primer valor, le estan dicieno "todos"
* 5,17 * * * echo "trabajen mas duro"
[/code]

¿Cómo ver las tareas pendientes en cron?
**crontab -l** lista las del usuario activo, para ver las de otro usuario, deben ejecutar crontab -u user -l

¿Cómo se modifican las tareas?
Con **crontab -e** se nos abre el archivo para modificar, con el editor que tengamos por defecto. Para cambiarlo debemos cambiar: _export EDITOR="/usr/bin/nano"_. Como por defecto se abre con vi, por favor no toquen el teclado si no saben como funciona y llamen a un mayor responsable a cargo.
También pueden editar los archivos de otros usuarios, con **contab -u user -e **.

Ahora bien, aquí viene lo bueno jóven, algunos ejemplos:

[code lang="bash"]
#Corre cada minuto, siempre.
* * * * * /home/xebuz/script/cada_minuto.sh

#Cada 5 minutos
*/5 * * * * /home/xebuz/script/cada_cinco_minutos.sh

#Cada hora, de 8 a 18, de lunes a viernes
00 08-18 * * 1-5 /home/xebuz/script/laboral.sh

#Una vez cada mes y medio
* * */15 */1 * /home/xebuz/goldequilmes.sh

#Cada 4 años
* * * */48 * /home/xebuz/script/mundial.sh
[/code]

¿Muy engorroso para escribir? ¿Sos un lazy-sysadmin? Existen también algunos (llamémosle) [alias](http://blog.jesusroldan.com/2011/09/02/tips-para-linux-alias-para-todos/), para agilizar la administración, són cómodos y reemplazan a todos los campos de tiempo, es decir, sólo deben poner el alias y despues el script.

[code lang="bash"]
#Tiempos específicos
@hourly
@daily
@weekly
@monthly
#Este se ejecuta (como lo indica el nombre), cuando se resetea el equipo
@reboot
[/code]

_Gracias, vuelva prontos._
