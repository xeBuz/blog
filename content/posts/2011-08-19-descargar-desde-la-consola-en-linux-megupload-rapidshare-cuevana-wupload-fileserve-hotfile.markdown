---
author: xeBuz
comments: true
date: 2011-08-19 01:24:47+00:00
layout: post
slug: descargar-desde-la-consola-en-linux-megupload-rapidshare-cuevana-wupload-fileserve-hotfile
title: Descargar desde la consola
wordpress_id: 134
categories:
- GNU/Linux
tags:
- cuevana
- descarga
- linux
- megaupload
- plowshare
- pyload
- rapidshare
- terminal
---

Existen varias opciones para bajar desde Megaupload, Rapidshare, MediaFire, Hotfile, Wupload y otro servicios gratuitos de hosting de archivos... Dentro de las principales opciones tenemos:


###### **[plowshare](http://code.google.com/p/plowshare/)**


Una vez instalada, nos da 4 comandos: _plowdel, plowdown, plowlist, plowup_ pero la verdad es que termiamos usando sólo uno: plowdown, quizas 2, con plowup (uno descarga otro sube, si!)
Uso básico, para no hacerlo muy extenso::



	
  * **-r** limita la velocidad, pongan el valor con k, m o g (

	
  * **-c** verifica que los links esten activos (no descarga nada)

	
  * **-m** _file.txt_ va comentando en el archivo los links que descarga


Tienen el "man plowdown" mucho más detallado y con buenos ejemplos.


###### **[megaupload-dl](http://mundogeek.net/megaupload-dl/)** y **[rapidshare-dl](http://mundogeek.net/rapidshare-dl/)**


El uso es bastante simple, con parametros faciles: podemos ponerle el link o los links con espacio de por medio, un archivo de texto, o -c para pasarle lo que tengamos en el portapeles.


###### **[slimrat](http://code.google.com/p/slimrat/)**


Bastante similar a las anteriores, escrita en Perl, de uso muy simple, le pueden pasar como parametro un link, o con -l una lista en un archivo de texto.
Se le puede pasar como parametro un . Particularmente me falló bastante, uso plowshare, pero es una opción más a tener en cuenta.
Una dependencia importante, a mi no me la pidió solo la sugirió, es _aview_. Tambien está disponible la versión con GUI.

Opciones con GUI: **[pyLoad](http://pyload.org/)**, **[jDownloader](http://jdownloader.org/download)**, **[Tucan](http://www.tucaneando.com/)**, **[FatRat](http://fatrat.dolezel.info/)**.



###### **[CuevanaLinks](http://packages.python.org/CuevanaLinks/)**


Si! Cuevana! Para aquellos que prefieren bajar la peli antes que esperar a las 10 de la noche a que entren todos para intentar ver algo, que se caiga y putear ;)
Uso:

    
    cuevanalinks [parametros] "nombre" [temporada x capitulos]





	
  * **-d** Descarga el archivo

	
  * **-s** Descarga subtitulos. con -l pueden descargar en otro idioma

	
  * **-m** _file.txt_ va comentando en el archivo los links que descarga

	
  * **-r X** Limita la descarga a X Kilobytes


Es muy practico para las series, pueden bajar toda la temporada con un solo comando, por ejemplo

    
    cuevanalinks -s -d "The Office" S01


En el [blog del autor](http://nqnwebs.com/blog/article/cuevanalinks-ahora-para-seres) pueden ver que tambien existen una versión QUI basada en QT

<!-- more -->
_Imagino que todos o la gran mayoría deben estar disponibles desde los repositorios de la distro que usen_
