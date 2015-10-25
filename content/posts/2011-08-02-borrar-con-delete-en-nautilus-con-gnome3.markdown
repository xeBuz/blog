---
author: xeBuz
comments: true
date: 2011-08-02 15:13:02+00:00
layout: post
slug: borrar-con-delete-en-nautilus-con-gnome3
title: Borrar con 'Delete' en Nautilus y Gnome3
wordpress_id: 105
categories:
- GNU/Linux
- Tips
tags:
- configuracion
- gnome
- gsetting
- linux
- shortcut
- terminal
---

Titulo opcional: _Volvé Delete, no te fajo más_

Me es sumamente tedioso borrar archivos con Nautilus en Gnome3, porque por defecto utiliza Ctrl + Delete/Supr, pero por suerte se puede modificar facilmente

Primero, hay que habilitar una opción en la configuración para permitir editar los shortcuts, se puede hacer desde gconf-editor o desde la terminal con gsettings

    
    gsettings set org.gnome.desktop.interface can-change-accels true



Después, desde Nautilus, seleccionen un archivo y vayan a menú. Con el cursor **SOBRE** la acción que desean modificar presionen la/s tecla/s que quieran como nuevo shortcut. (y SOBRE quiere decir "No hagan click, madafackas")

Cuando terminen deben volver la configuración original para evitar modificar accesos por error, solo cambian _true/false _ con gsettings
