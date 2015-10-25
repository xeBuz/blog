---
author: xeBuz
comments: true
date: 2011-09-06 14:12:54+00:00
layout: post
slug: lentitud-en-la-instalacion-de-paquetes-con-pacman
title: Lentitud en la instalacion de paquetes con pacman
wordpress_id: 304
categories:
- Arch Linux
- GNU/Linux
- Tips
tags:
- arch
- linux
- pacman
- yaourt
---

Desde hace unos días noto que al actualizar o instalar nuevos paquetes con pacman o yaourt se toma una eternidad en actualizar.
En un primer momento pensé que era problema de la conexión, pero me pasaba en casa y en el laburo, con dos ISP diferentes, entonces el problema pasaba por otro lado.

Buscando en el foro encontré a alguien que le pasaba algo similar, la solución surgió corriendo:

    
     url=$(pacman -Sp linux | tee /dev/stderr) && curl --verbose "${url}" -o /dev/null


Se puede ver que trata de conectarse a mirror.kernel.org, que esta caído: [http://www.archlinux.org/mirrors/status/](http://www.archlinux.org/mirrors/status/). Basta con editar el archivo /etc/pacman.d/mirrorlist 

Después deben correr pacman -Syy para actualizar los repositorios.

En caso de que deseen ver los más rápidos, pueden seguir los pasos de la wiki, correr rankmirror la verdad que ayuda mucho en la velocidad [https://wiki.archlinux.org/index.php/Mirrors#List_by_speed](https://wiki.archlinux.org/index.php/Mirrors#List_by_speed)


