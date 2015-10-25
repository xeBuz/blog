---
author: xeBuz
comments: true
date: 2012-07-04 18:40:32+00:00
layout: post
slug: un-bot-de-twitter-con-python-en-un-par-de-minutos
title: Un "bot" de Twitter, con Python en un par de minutos
wordpress_id: 1197
categories:
- Programación
- Python
tags:
- bot
- foursquare
- programacion
- python
- tweepy
- twitter
---

<blockquote>Hace falta un bot que busque los tweets de Foursquare y responda "WHO CARES?!"

— Commander Shepard (@MissFillys) [July 3, 2012](https://twitter.com/MissFillys/status/220272671894671360)</blockquote>



Todo comenzó con ese tweet de @MissFillys y cómo estaba aburrido lo intenté hacer. Ante mi sorpresa fué mas simple de lo que pensaba. Primero deben registrar la aplicación en el [área de desarrollo de Twitter](https://dev.twitter.com/apps), particularmente usé una cuenta nueva, porque seguro lo reportan como spam o algún tipo de violación a las políticas de Twitter y no quería que caiga mi cuenta también. Para interactuar con Twitter desde Python usé **[tweepy](https://github.com/tweepy/tweepy)**, una librería bastante completa, y sobre todo, muy simple de usar

Esto es lo necesario para conectarse, los datos de Costumer_Key y Access_Key los sacan cuando registran la aplicación. Bastante simple, con este código ya podemos interactuar con la API

    
    
    #!/usr/bin/python
    # -*- coding: utf-8 -*-
    
    import tweepy
    
    #Twitter information
    CONSUMER_KEY = "AsdAsdDsa"
    CONSUMER_SECRET="QwertrQWEREwtr"
    ACCESS_KEY="Asdasd-qeq123123123"
    ACCESS_SECRET="asdasd342-123213123wqeqweqw"
    
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
    API = tweepy.API(auth)



Para este caso, lo que hago es buscar en la public timeline. Como la librería no tiene implementada la búsqueda por source, no queda otra que traer los 20 resultados y validar si alguno viene desde desde Foursquare. Es un bucle bastante simple, en caso de que exista, se utiliza el método API.update_status() con el username, in_reply_to y algún texto que querramos ponerle.

    
    
    ...
    public = API.public_timeline()
    for tweet in public:
        if tweet.source =='foursquare':
    	API.update_status( "@"+ tweet.author.screen_name + "WHO CARES?!" , tweet.id)



También pueden usar búsquedas más específicas. Por ejemplo, _personas_ que hablan de Tinelli. [Acá](https://dev.twitter.com/docs/using-search) pueden sacar ayuda sobre cómo realizar búsquedas y [acá](http://packages.python.org/tweepy/html/api.html) pueden leer la documentación de la librería

    
    
    ...
    assholes = API.search('Tinelli')
    for tweet in assholes:
    	API.update_status( "@"+ tweet.author.screen_name + "Se te está pudriendo el cerebro..." , tweet.id)

	

El código final quedó [más o menos así](https://gist.github.com/3044158), sólo necesitan ponerlo en un loop donde quieran. Quizás les sirva y puedan hacer algo interesante, como por ejemplo @pepperMaido :D
