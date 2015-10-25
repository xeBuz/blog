---
author: xeBuz
comments: true
date: 2011-07-22 00:16:16+00:00
layout: post
slug: tips-para-linux-manejo-del-historial
title: 'Tips Linuxeros: Manejo del historial'
wordpress_id: 36
categories:
- GNU/Linux
- Tips
tags:
- tips
- linux
---

Quizás una de las mejores funcionalidades en la terminal de Linux, o por lo menos una de las más productivas, es la capacidad de generar un historial de lo que ejecutamos.
Ahora bien, existen varias formas de recorrerlo. La más común y la que seguramente todos usan, es mediante las flechas arriba y abajo, muy util, pero también existen otras formas de hacerlo :)


Podemos hacer una búsqueda utilizando **Ctrl+R** y el texto que deseamos. La búsqueda es incremental, en caso de que la primera opción no es la que queremos, sólo basta volver a presionar **Ctrl+R**. Si queremos hacer la búsqueda en orden inverso, basta utilizar **Ctrl+I**.


Otra opción muy interesante es volver a ejecutar el comando anterior con **!!** (doble signo de admiración). Es genial si nos olvidamos de ejecutar algo con permisos de superuser:

```bash
     sudo !!
```

También se puede utilizar el **!foo** para repetir la última vez que usamos foo, o **!?foo** para volver a ejecutar el ultimo comando _que contenga_ foo.


En caso de que querramos _reemplazar_ parte del script ejectutado anteriormente, por ejemplo, abrimos un archivo con nano pero ahora queremos abrirlo con vi, podemos correr

```bash
    ^nano^vi
```

En caso de que necesitemos mostrar todos los comandos que contengan cierto termino basta con hacer un **grep** de lo que devuelve el comando history:

```bash
     history | grep foo
```

El número de la izquierda es el orden del comando, podemos correr esa linea usando **!numero**

_Un detalle..._
Es posible que si usan múltipes instancias de la terminal (desde tty, gnome-terminal, guake, yakuke, etc), no se guarde el historial, para esto  basta con editar el archivo **~/.bashrc** de esta forma:

```bash
 unset HISTFILESIZE
 HISTSIZE=5000 # cantidad de registros que quieran guardar
 PROMPT_COMMAND="history -a"
 export HISTSIZE PROMPT_COMMAND
```

Y correr una vez el siguiente comando

```bash
     shopt -s histappend
```