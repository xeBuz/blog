---
author: xeBuz
comments: true
date: 2012-08-10 13:55:24+00:00
layout: post
slug: script-para-generar-playlists-dinamicas-en-mpd
title: 'Script para generar playlists dinámicas en MPD '
wordpress_id: 80
categories:
- Programación
- Python
tags:
- git
- last.fm
- mpd
- python
- script
---

Revisando scripts viejos, me encontré con este que quizás a alguno le puede servir. La idea es ir generando dinámicamente la lista de reproducción de un server [MPD](http://mpd.wikia.com/) usando la [API](http://www.last.fm/api) de [Last.fm](http://www.last.fm/user/xeBuz) para encontrar artistas similares en el disco.
Si bien ya hay clientes que tienen esta funcionalidad, como [Ario](http://mpd.wikia.com/wiki/Client:Ario), suelo conectarme por SSH al server y me resulta cómodo correr el script este cuando no se que escuchar.


    
    #!/usr/bin/env python
    # -*- coding: utf-8 -*-
    import os
    import random
    from mpd import (MPDClient, CommandError)
    from audioscrobbler import AudioScrobblerQuery
    
    """ MPD """
    mpd_host = 'localhost'
    mpd_port = '6600'
    mpd_connection = {'host': mpd_host, 'port': mpd_port}
    client = MPDClient()
    
    COUNT_SONGS = 5
    
    def mpd_connect():
        try:
            client.connect(**mpd_connection)
        except SocketError:
            return False
        return True
    
    
    def main():
        if not mpd_connect():
            sys.exit(1)
    
        # Meh, no se si se hace esto, pero bueh
        recommended_artists = []
        recommended_songs = []
    
        # Obtengo la cancion que esta sonando en este momento
        current = client.currentsong()
    
        # Saco sólo el artista del diccionario que me devuelve current
        current_artist = AudioScrobblerQuery(artist=current['artist'])
    
        # En base a todos los artistas similares, me fijo cuales tengo en el
        # server MPD, y los almaceno para usarlos despues.
        for artist in current_artist.similar():
            if float(client.count("artist", artist.name)['songs']) > 0:
                recommended_artists.append(artist.name)
    
    
        # Podria hacerlo mas efectivo, pero la idea es hacerlo lo mas random que
        # pueda, asi que desordeno la lista de similares, que siempre viene ya
        # ordenada por compatibilidad del current_artist
        random.shuffle(recommended_artists)
    
        while len(recommended_songs) < COUNT_SONGS:
            artist = random.choice(recommended_artists)
            recommended_songs.append(
                        random.choice(client.search('artist', artist)))
    
        for song in recommended_songs:
            print song["artist"], "-", song["title"]
            client.add(song["file"])
    
    if __name__ == '__main__':
        main()



Descarga desde aca: [GIST](https://gist.github.com/1100627), seguramente la iré modificando, la idea es dejarla corriendo como un servicio.
