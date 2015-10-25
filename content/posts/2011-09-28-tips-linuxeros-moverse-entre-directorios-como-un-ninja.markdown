---
author: xeBuz
comments: true
date: 2011-09-28 14:28:14+00:00
layout: post
slug: tips-linuxeros-moverse-entre-directorios-como-un-ninja
title: 'Tips Linuxeros: Moverse entre directorios como un ninja'
wordpress_id: 385
categories:
- GNU/Linux
- Tips
tags:
- cd
- linux
- sysadmin
- terminal
- tips
---


Seguramente **cd** es uno de los comandos que más usamos, y también de los primeros que aprendemos a usar (junto con ls, rm, mkdir y esas cosas).
Es posible que no usen todo el potencial que tiene, tampoco es la locura, pero tiene algunos detalles con los que vamos a poder ahorrarnos tiempo y optimizar la navegación entre directorios, porque desde la consola todo es mejor y mas rápido :P


El uso estandar sería: **cd directorio/ **

Para ir al home del usuario, podemos hacer **cd $HOME** o **cd ~** o mucho mejor (porque ese símbolo nunca me sale) **cd**, sin espacio.
Para ir al home de otro usuario, basta con **cd ~marvin**

Podemos volver posiciones hacia atrás e incluso seguir navegando a partir de esa posicion, por ejemplo, aca volvemos 2 niveles atras y etramos a otrodir: **cd ../../otrodir/**

Para volver al directorio previo (al directorio donde nos encontrabamos antes, no a un nivel anterior) hay que usar **cd -**

Para crear un directorio y movernos al mismo: **mkdir test && cd $_** (pueden ponerlo en un [alias](http://blog.jesusroldan.com/2011/09/02/tips-para-linux-alias-para-todos/), sería mas comódo)

También existe una solución a la dislexia, los teclados duros, o la utilización de la consola apenas nos levantamos. Si corremos **shopt -s cdspell** (o mejor aún. si lo agregamos al ~bashrc) nos corrige errores de tipeo, por ejemplo, si hacemos cd /hom/xebuz nos lleva a /home/xebuz, muy útil.


Bueno, eso.
