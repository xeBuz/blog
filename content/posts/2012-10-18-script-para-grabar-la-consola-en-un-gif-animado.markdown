---
author: xeBuz
comments: true
date: 2012-10-18 02:03:52+00:00
layout: post
slug: script-para-grabar-la-consola-en-un-gif-animado
title: Script para grabar la consola en un .gif animado
wordpress_id: 1300
categories:
- Bash
- Programación
tags:
- animado
- animate
- bash
- bofh
- console
- gif
- imagemagick
- linux
---

Hoy me surgió una necesidad, que me pareció bastante simple pero no encontré herramientas simples que me lo solucionaran. Les dejo este script, que graba un gif de la consola durante X segundos (idea de @shinax y @rootmyword). Ese valor se lo pasamos por parámetro (no lo valido ni tiene default, porque la vida es demasiado corta para controlarlo) . Hay que correr el script con un & al final de la línea, asi pasa a correr en background y podemos usar la consola.


    
    #!/bin/bash
    clear
    mkdir temp_gif
    
    segs=`expr $1 \* 5`
    
    for (( i = 1; i <= $segs ; i++ ));
    do
    	printf -v number "%06d" $i
    	import -window $WINDOWID temp_gif/$number.gif 
    	sleep 0.2
    done
    
    convert -delay 20 -loop 0 temp_gif/*.gif animacion.gif
    
    rm -R temp_gif



El código terminó siendo más simple de lo que pensaba, toda la magia la hace **ImageMagick**. Explico por línea, porque la idea siempre es aprender como funciona:
Línea 5. Toma el primer parámetro que le demos, lo multiplica por 5 porque cada imagen la saco cada 0.2 segundos ;)
Línea 9. El **printf** lo utilizo para formatear &i;, neceito hacer un zero-padding, o sea, rellenar con ceros a la izquierda, para que después el conversor me tome el orden correcto. El parámetro -v indica que no lo imprima, sino que lo almacene en una variable.
Línea 10. ImageMagick se encarga de guardar la imágen de la ventana que le digo, para $WINDOWSID creo que es necesario **xorg-xwininfo**, ya lo tenía instalado.
Línea 13. Toma todas las imágenes de la carpeta, las concatena con un delay de 0.2 segundos y hace un loop infinito.
