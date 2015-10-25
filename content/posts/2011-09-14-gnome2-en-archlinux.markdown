---
author: xeBuz
comments: true
date: 2011-09-14 04:41:31+00:00
layout: post
slug: gnome2-en-archlinux
title: Gnome2 en ArchLinux
wordpress_id: 309
categories:
- Audiolibro
- GNU/Linux
tags:
- arch
- distro
- gnome
- linux
- pacman
---

Como hay mucho usuarios descontentos con el resultado de Gnome 3, incluído Linus Torvals, era evidente que iban a existir formas de volver a la versión anterior, y Arch claro que la permite, y eso que fué de las primeras distros en cambiar :P
Buscando encontré dos, la primera es un fork, la segunda un downgrade directo; me quedo con la primera. Si no se pudieron acostumbrar al cambio, si gnome-shell ya les dió una úlcera y no pueden esperar la versión 3.2, quizás alguna de estas opciones les sea útil.


**Utilizar un fork: Mate**

Primero, tiene que editar el archivo **/etc/pacman.conf**, agregando estas lineas al principio de la lista de repositorios
[code]
[mate]
# Contains official mate desktop packages (gnome2 fork)
Server = http://germ.winpe.com/archlinux/mate/$arch
[/code]

Para instalar Mate, tiene que correr:

    
     pacman -Syyu && pacman -Sf mate-desktop-environment


En mi caso aparecieron varios conflictos, ponga si a todo, no tuve problemas con ninguno

Despues de eso, tiene varios paquetes mas para instalar, todos opcionales pero suman: mate-extract mate-applets mate-terminal mate-image-viewer mate-themes. Así mismo, deberían instalar temas o cualquier eyecandy que necesiten para Gnome 2 que no sea necesario en el 3.

[caption id="attachment_318" align="aligncenter" width="300" caption="Gnome 3.0.2, antes del update"][![Gnome 3](http://blog.jesusroldan.com/wp-content/uploads/2011/09/Screenshot-300x225.png)](http://blog.jesusroldan.com/wp-content/uploads/2011/09/Screenshot.png)[/caption] [caption id="attachment_320" align="aligncenter" width="300" caption="Una vez instalado Mate"][![](http://blog.jesusroldan.com/wp-content/uploads/2011/09/Screenshot-1-300x225.png)](http://blog.jesusroldan.com/wp-content/uploads/2011/09/Screenshot-1.png)[/caption] [caption id="attachment_322" align="aligncenter" width="300" caption="Mate, despúes de instalar themes y modificar la apariencia."][![](http://blog.jesusroldan.com/wp-content/uploads/2011/09/Screenshot-2-300x225.png)](http://blog.jesusroldan.com/wp-content/uploads/2011/09/Screenshot-2.png)[/caption]

**Utilizar una versión antigua de paquetes**

En este caso, lo que vamos a hacer es cambiar el repositorio en donde se encuentra Gnome, utilizar uno que no haya sido actualizado a Gnome3.x e instalar en cambio Gnome2.32.1, supongo que es la última versión estable antes del cambio.

También tenemos que editar el archivo **/etc/pacman.conf**, pero en lugar de agregar un repositorio cambiamos el extra 
[code]
[extra]
# Incluir = / etc / pacman.d / mirrorlist 
Server = http://arm.konnichi.com/2011/04/30/extra/os/$arch
[/code]

Después corren esta aberración:

    
     pacman -Syyfuu -nodep



Cuando terminen (básicamente lo que hace es actualizar los repositorios, forzar el update, y en caso de que sea necesario realizar un downgrade de lo que haya, va a instalar todos los paquetes de Gnome que encuentre, son varios megas), en /etc/pacman.conf dejen el repositorio extra como corresponde y además coloquen esto para que no actualice gnome ni gnome-extra (asi no lo pisa con la versión 3)
[code]
IgnoreGroup = gnome gnome-extra
[/code]
Les debo screenshots de esta prueba, ya borré el snapshot y son muchos megas para descargar como para hacerlo de nuevo sólo para las imágenes :(

<!-- more -->
Ambas pruebas fueron realizadas con una [máquina virtual](http://blog.jesusroldan.com/2011/08/31/virtualboxes-org-descarga-de-maquinas-virtuales/)  con una instalación estandar, con gnome y gnome-extra instalado por defecto, es decir, en ambos casos hice un downgrade de Gnome 3, que me pareció el caso en el que podía detectar mas problemas.
**De las dos opciones, les recomiendo la primera, la segunda da bastantes dolores de cabeza.**
