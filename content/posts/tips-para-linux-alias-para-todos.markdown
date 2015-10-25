---
author: xeBuz
comments: true
date: 2011-09-02 21:33:09+00:00
layout: post
slug: tips-para-linux-alias-para-todos
title: 'Tips Linuxeros: Alias para Todos'
wordpress_id: 270
categories:
- GNU/Linux
- Tips
tags:
- linux
- tips
---

Los alias en Linux son shortcuts o _sinónimos_ que podemos emplear para ejecutar comandos en la terminal.
Son muy útiles para correr comandos largos o simplemente crear nombres mas amigables, para algún comando que nos resulte deficil de recordar o a los que usemos mas seguido.
Para crearlos debemos escribir en el archivo **~.bashrc** para dejarlos disponibles al usuario, o en /etc/bash.bashrc para dejarlos disponibles en todo el sistema.

Las sintaxis es muy sencilla: _alias nombre='comando'_.

**Algunos ejemplos...**

```bash
    #Gestión rapida de paquetería
    alias instalar='sudo apt-get install'
    alias clearcache='yaourt -Scc'
    alias update='emerge --update --deep'

    #Vaciado de archivos
    alias empty=':> $1'

    #Copiado con barra de progreso, velocidad y estadísticas
    alias copy='rsync -avz --stats --progress'

    #Compartir la carpeta, via HTTP (http://127.0.0.1:8000)
    alias sharehttp='python -m SimpleHTTPServer'

    #Mostrar unidades montadas, en columnas
    alias mountt='mount | column -t'

    #Mostrar top 10 deprocesos que consuman mas memoria
    alias pstop='ps aux | sort -nk +4 | tail'

    #Buscar proceso
    alias psx='ps aux | grep '

    #Me olvide de poner sudo en el comando anterior
    alias grrrrrrr='sudo !!'

    #Listar los puertos abiertos
    alias openports='netstat --all --numeric --programs --inet'

    # Tambien podemos modificar el prompt o la terminal
    # Agregandole la hora
    alias hora='export PS1="${PS1%\$*}"' t $ '
    # o mejor aun, poniendola en la parte superior
    alias horasuperior='while sleep 1;do tput sc;tput cup 0 $(($(tput cols)-29));date;tput rc;done &'

    #Alias con parametros (en realidad es una funcion)
    #Crear un directorio y posicionarnos sobre el mismo
    MKdir() { mkdir $1 && cd $1 }

```

**Hacer los comandos "human-readeable" por defecto**

```bash
    alias ls='ls -h'
    alias du='du -h'
    alias df=-df -h'
```



**Simplificar los parámetros**

```bash
    alias ls='ls -hF --color=always'
    alias lr='ls -hR'                    # recursive ls
    alias ll='ls -hl'
    alias la='ll -hA'
    alias lx='ll -hBX'                   # sort by extension
    alias lz='ll -hrS'                   # sort by size
    alias lt='ll -rt'                    # sort by date
    alias lm='la | more'
```


**También podemos crear alias que solo funcionen para usuarios con privilegios de root**


```bash
    if [ $UID -ne 0 ]; then
        alias scat='sudo cat'
        alias svim='sudo vim'
        alias root='sudo su'
        alias reboot='sudo reboot'
        alias halt='sudo halt'
        alias netcfg='sudo netcfg2'
    fi



<!-- more -->
Si queren saber cuales son los comandos que más se utilizan en el sistema, como para ver si pueden agilizar creando alias mas cortos, pueden correr esto:


    
     history | awk '{print $2}' | awk 'BEGIN {FS="|"}{print $1}' | sort | uniq -c | sort -n | tail -n 20 | sort -nr



  

[quote style="1"] See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too ;-) [/quote]


**_Linus Torvalds_**
