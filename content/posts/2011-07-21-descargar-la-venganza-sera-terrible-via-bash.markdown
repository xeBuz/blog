---
author: xeBuz
comments: true
date: 2011-07-21 02:31:17+00:00
layout: post
slug: descargar-la-venganza-sera-terrible-via-bash
title: Descargar La Venganza Será Terrible, via Bash
wordpress_id: 13
categories:
- Bash
- GNU/Linux
- Programación
tags:
- bash
- cron
- descarga
- dolina
- linux
---

Este es un pequeño script que descarga (via wget) el programa La Venganza Sera Terrible de [Alejando Dolina](http://www.alejandrodolina.com.ar/); utilizando los archivos que genera a diario el sitio [Venganzas del Pasado](http://venganzasdelpasado.com.ar/)
 
[sourcecode language="bash"]
#!/bin/bash

# Medio rustico, pero si lo ejecuto hoy..
# necesito bajar el programa de anoche 
day=`date +%d '--date=-1 day'`
month=`date +%m '--date=-1 day'`
year=`date +%Y '--date=-1 day'`

# Directorio en donde se guarda el archivo
folder="$HOME/Dolina/"$year"/"$month"/"

#Si lo ejecuto un lunes o un domingo, no hay nada para bajar
if [ `date +%u` = 1 ] || [ `date +%u` = 7 ]; then
echo "Anoche no hubo programa"
else
wget -q -w 600 -P $folder "http://venganzasdelpasado.com.ar/"$year"/lavenganza_"$year"-"$month"-"$day".mp3"
fi
[/sourcecode]

Yo lo tengo corriendo con crontab, a las 5 madrugada, cosa de que al levantarme ya lo haya bajado :)
Así como esta deberia funcionar solo en Linux, estaba haciendo algo con wxWidgets para jugar un rato con eso, que deberia ser multiplataforma, despues (o sea, cuando funcione) lo subo.

Disponible en [Github](https://gist.github.com/1079511)
