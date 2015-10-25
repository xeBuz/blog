---
author: xeBuz
comments: true
date: 2011-07-25 22:32:56+00:00
layout: post
slug: agregar-aplicaciones-al-inicio-de-gnome3
title: Agregar aplicaciones al inicio de Gnome3
wordpress_id: 84
categories:
- GNU/Linux
- Tutoriales
tags:
- autostart
- gnome
- linux
- terminal
---

Este procedimiento es bastante 'rustico', pero funciona. Es una de las cosas (de muchas, lo sé) en las que falla Gnome3: no hay una forma de gestionar que aplicaciones se lanzan al inicio de sesión o por lo menos no encontré forma de hacerlo.

Para esto, deben crear un archivo (por cada aplicacion) en **~/.config/autostart/** con extension .desktop. 
Como ejemplo voy a usar [Guake](http://guake.org/) de la siguiente forma:

    
     cat ~/.config/autostart/guake.desktop
    
    [Desktop Entry]
      Type=Application
      Exec=/usr/bin/guake
      Hidden=false
      X-GNOME-Autostart-enabled=true
      Name=guake
      Comment=Guake
    



<!-- more -->
Pueden leer un poco mas al respecto [ aca ](http://developer.gnome.org/autostart-spec/)

Posiblemente ya exista alguna aplicación que haga eso, pero no la encontré
