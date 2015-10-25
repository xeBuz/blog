---
author: xeBuz
comments: true
date: 2012-04-23 20:58:48+00:00
layout: post
slug: solucionar-problemas-despues-de-actualizar-gnome-3-4-1
title: Solucionar problemas después de actualizar Gnome 3.4.1
wordpress_id: 1091
categories:
- Arch Linux
- GNU/Linux
tags:
- arch
- bashrc
- bofh
- gnome
- linux
- sysadmin
- terminal
- tips
---

Hoy, como para que el lunes arranque con todo, actualicé Arch y después no pude ingresar más la sesión de Gnome3. Aparecía la PC con carita triste y me decía que iba a desactivar las extensiones, pero no soluciona nada. Y cómo se actualizaron muchas drivers, el kernel y gnome no sabía bien donde estaba el problema.

Al parecer la nueva versión de Gnome (3.4.1) tiene como dependencia networkmanager y si no lo encuentra explota por todos lados, pueden verificar el archivo /var/logs/messages.log, deberían tener algo así:
[spoiler title="messages.log" open="0" style="1"]
`[...]
Apr 23 17:26:56 localhost gnome-session[13301]: DEBUG(+): GsmDBusClient: obj_path=/org/gnome/SessionManager/Presence interface=org.freedesktop.DBus.Properties method=GetAll
Apr 23 17:26:56 localhost gnome-session[13301]: DEBUG(+): GsmDBusClient: obj_path=/org/gnome/SessionManager/Presence interface=org.freedesktop.DBus.Properties method=GetAll
Apr 23 17:26:59 localhost gnome-session[13301]: DEBUG(+): GsmDBusClient: obj_path=/org/freedesktop/DBus interface=org.freedesktop.DBus method=NameOwnerChanged
Apr 23 17:26:59 localhost gnome-session[13301]: DEBUG(+): GsmDBusClient: obj_path=/org/freedesktop/DBus interface=org.freedesktop.DBus method=NameOwnerChanged
Apr 23 17:28:24 localhost gnome-session[13301]: DEBUG(+): GsmDBusClient: obj_path=/org/gnome/SessionManager interface=org.gnome.SessionManager method=IsInhibited
Apr 23 17:28:24 localhost gnome-session[13301]: DEBUG(+): GsmDBusClient: obj_path=/org/gnome/SessionManager interface=org.gnome.SessionManager method=IsInhibited
Apr 23 17:29:24 localhost dbus[661]: [system] Activating service name='org.freedesktop.NetworkManager' (using servicehelper)
Apr 23 17:29:24 localhost dbus[661]: [system] Activated service 'org.freedesktop.NetworkManager' failed: Launch helper exited with unknown return code 1
Apr 23 17:36:54 localhost gnome-session[13301]: DEBUG(+): Searching for 4194307 in 4194307,4194308
Apr 23 17:36:54 localhost gnome-session[13301]: DEBUG(+): Watch 1 fired, idle time = 600053
Apr 23 17:36:54 localhost gnome-session[13301]: DEBUG(+): GsmPresence: setting idle: 1
Apr 23 17:36:54 localhost gnome-session[13301]: DEBUG(+): Using ConsoleKit for session tracking
Apr 23 17:36:54 localhost gnome-session[13301]: DEBUG(+): Updating ConsoleKit idle status: 1
Apr 23 17:36:54 localhost gnome-session[13301]: DEBUG(+): GsmDBusClient: obj_path=/org/gnome/SessionManager interface=org.gnome.SessionManager method=IsInhibited
Apr 23 17:36:54 localhost gnome-session[13301]: DEBUG(+): GsmDBusClient: obj_path=/org/gnome/SessionManager interface=org.gnome.SessionManager method=IsInhibited
[...]`[/spoiler]

Si quieren verificar si el problema se da por esto, pueden correr el siguiente comando (Control + Alt + F1) e intentar entrar a la sesión (Control + Alt + F7/F8):

    
    sudo /etc/rc.d/networkmanager start


Para hacer el cambio permanente, agreguen **networkmanager** a los DAEMONS del /etc.rc.conf

Espero que les sirva, a mi me hizo renegar mucho, y es algo bastante simple de solucionar.

Edit: Según la [wiki de Arch](https://wiki.archlinux.org/index.php/NetworkManager#Edit_daemons), hay que sacar el daemon de network y poner el de networkmanager después de dbus
