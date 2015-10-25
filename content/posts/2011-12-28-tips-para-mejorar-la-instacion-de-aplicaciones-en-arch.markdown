---
author: xeBuz
comments: true
date: 2011-12-28 18:19:48+00:00
layout: post
slug: tips-para-mejorar-la-instacion-de-aplicaciones-en-arch
title: 'Tips Linuxeros: Optimizar pacman y la instalación de aplicaciones en Arch
  Linux'
wordpress_id: 552
categories:
- Arch Linux
- GNU/Linux
tags:
- aplicaciones
- arch
- linux
- pacman
- terminal
- tips
- yaourt
---

La idea del post es hacer un compilado de tips y aplicaciones que puedan llegar a servir para mejorar [pacman](https://wiki.archlinux.org/index.php/Pacman) y la instalación de aplicaciones en Arch Linux. Si, escribí lo mismo que en el título pero con más palabras.
Para el usuario que venga de otras distros, como Ubuntu, le puede resultar díficil no tener esa 'cosa' llamada Centro de Software, pero con un poco de maña se puede potenciar muchisimo la instalación (además no van a escuchar nunca más de los PPA).

Vamos suponiendo que saben como usar **pacman**. Básicamente tenemos:



	
  * _pacman -Ss wally_ para buscar aplicaciones

	
  * _pacman -S chucknorri_s para instalar

	
  * _pacman -Syu_ para actualizar

	
  * _pacman -Rnd cristina_ para eliminar algo



[note color="#cfcfcf"]Antes de empezar, la configuración está en **/etc/pacman.conf **... y lo primero que tienen que agregar es una línea que diga **ILoveCandy**.
Si ya la agregaron, pueden seguir con el post, si no lo hacen no merecen usar Arch Linux.[/note]

Optimizar el cache y la base de datos, tienen que correr **sudo pacman -Sc && sudo pacman-optimize**, pueden ponerlo en cron, es más fácil que acordarselo; **yapos** también suele ser una buena opción para esto.
Instalen **pacman-color**, es eye-candy nunca viene mal. Eso si, deberían crear una [alias](http://blog.jesusroldan.com/2011/09/02/tips-para-linux-alias-para-todos/) pacman='pacman-color' sino creanme que nunca lo van a usar.
**[Reflector](https://wiki.archlinux.org/index.php/Reflector)** me lo recomendaron en un [post](http://blog.jesusroldan.com/2011/09/06/lentitud-en-la-instalacion-de-paquetes-con-pacman/) y está muy bueno, mantiene actualizado el mirrorlist
Se puede optimizar un poco el tamaño de los paquetes a descargar con **xdelta3** (y activando UseDelta en la configuración de pacman), no es una locura, pero algo se logra.


<!-- more -->
Ni hablar de que tienen que instalar **yaourt**, es básico en cualquier Arch Linux, la forma más fácil es agregar el repositorio, actualizar e instalarlo con pacman.

    
    [archlinuxfr]
    Server = http://repo.archlinux.fr/$arch


¿Qué hace? Funciona igual que pacman, pero también permite instalar paquetes del [AUR](https://aur.archlinux.org/), que es basicamente la fucking gloria.

Si se sienten como princesas del bosque de las hadas, también pueden probar algun GUI, de los que usé, creo que **Wakka** - I see what you did there! - es el mejor (sin entrar en la categoría KDE que no la probé). Rápido y simple. Lo que además tiene de bueno es que las acciones que hacemos muestran el comando, entonces, con el tiempo, podemos ir perdiendo el miedo a la consola...


