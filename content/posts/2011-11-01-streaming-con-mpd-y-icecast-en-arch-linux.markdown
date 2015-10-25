---
author: xeBuz
comments: true
date: 2011-11-01 19:09:58+00:00
layout: post
slug: streaming-con-mpd-y-icecast-en-arch-linux
title: Hacer un radio casera con MPD y con Icecast
wordpress_id: 403
categories:
- GNU/Linux
- Tutoriales
tags:
- icecast
- linux
- mpd
---

Empecemos... pero _¿Qué e' lo que e' eso?_
**MPD**: Básicamente, es un servidor para escuchar música. Con la particularidad de que es muy configurable y nos permite acceder a traves de la red para controlar la lista de reproducción. [Esta](http://images.wikia.com/mpd/images/6/68/Mpd-overview.png) imagen lo explica bien.
**Clientes MPD**: El servidor por sí sólo nos gestiona los archivos, los salidas de audio y la lista de reproducción, para acceder a esto necesitamos clientes, que visualmente son similares a las clasicas aplicaciones para escuchar música. 
Algunos a destacar: Sonata, Ario, ncmpcpp, MPDroid y una [larga lista más](http://mpd.wikia.com/wiki/Clients).
**Icecast** : Es un proyecto open source para hacer streaming, que aparece como competencia libre de SHOUTcast (también compatible con este).

**1.- Instalar el servidor MPD**
La instalación es simple, también esta en los repositorios de las principales distros. La configuración y puesta a punto es lo que va a llevar mas tiempo y pueden surgir tantos problemas como lineas de configuración tenga el archivo /etc/mpd.conf
Lo importante (a este nivel) es dejar bien la base de datos y los archivos básicos, cualquier tipo de configuración de salida de audio (excepto en el paso 3) o detalles excede lo que tenemos que hacer para que funcione el streaming. TODO lo que necesitan saber está en la [wiki oficial](http://mpd.wikia.com/wiki/Configuration).

    
    music_directory       "/media/music/"
    playlist_directory    "/var/lib/mpd/playlists"
    db_file               "/var/lib/mpd/mpd.db"
    log_file              "/var/log/mpd/mpd.log"
    pid_file              "/var/run/mpd/mpd.pid"
    state_file            "/var/lib/mpd/mpdstate"
    user                  "mpd"


Nota: Es importante que la música esté bien taggeada.

**2.- Instalar y configurar Icecast**
Supongamos que ya lo instalaron, el archivo de configuración es un XML, está en /etc/icecast.xml. Algunos detalles de configuración:

    
    <!-- Dato de conexion --->
    <listen-socket>
        <port>8899</port>
        <shoutcast-mount>/stream</shoutcast-mount> 
    </listen-socket>
    
    <!-- Para publicar en los directorios --->
    <directory>
        <yp-url-timeout>30</yp-url-timeout>
        <yp-url>http://dir.xiph.org/cgi-bin/yp-cgi</yp-url>
    </directory>



La configuración escencial se hace en /etc/mpd.conf, ahi agregamos una salida de audio que direccione a nuestro Icecast. Para esto hay que agregrar:

    
    audio_output {
        type        "shout"
        encoding    "ogg"
        name        "KBBL me va a dar algo estupido"
        host        "localhost"   # lo sacan de la configuración de Icecast
        port        "8000"        # lo sacan de la configuración de Icecast
        mount       "/mpd.ogg"    # Importante para conectarse
        password    "xxxxx"       # lo sacan de la configuración de Icecast
        quality     "5.0"
        bitrate     "192"         # http://en.wikipedia.org/wiki/Bit_rate#Audio     
        format      "44100:16:2"  # Default 44100:16:1
        user        "source"
        description "Descripción mas larga, util para directorios"
        genre       "powa"
        public      "yes"          # Para publicación en un directorio
    }



**3.- Conectarse**
Primero, levantan los servicios (primero mpd, despues icecast), si todo va bien, ya pueden entrar con algún cliente MPD para armar la playlist. Si no hay nada reproduciéndose cuando quieran abrir la conexión de streaming va a dar error 404.
Una forma facil de testear la reproducción es con mplayer de forma local.

    
    mplayer -playlist http://127.0.0.1:8000/mpd.ogg.m3u


Casi cualquier reproductor está preparado para streaming, hasta pueden hacerlo desde el celular, en Android uso "A Radio Player", anda de 10.
Si dejan la configuración de arriba van a poder figurar en el [Directorio de Icecast](http://dir.xiph.org/), con un link al streaming por M3U y otro por XSPF.


Post para @elpibepantalla y @Nestor_Navarro y gracias a @Rhapsody_Girl por ser la tester :P
