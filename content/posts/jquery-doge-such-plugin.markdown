---
author: xeBuz
comments: true
date: 2013-12-23 14:31:40+00:00
layout: post
slug: jquery-doge-such-plugin
title: jQuery Doge - such plugin
wordpress_id: 1385
categories:
- HTML5
- Javascript
- Programación
- Sitios
tags:
- def
- fun
- javascript
- jquery
---

Hace unos días había liberado un plugin de jQuery bastante tonto, y ahora hice un update del mismo con unos cuantos bugs corregidos y además ahora pemite parametrizarlo, así pasa a estar un poco mas usable de lo que estaba antes.
Es mi primer plugin así que quizás no está tan optimizado... aunque considero que no es tan inestable como pensé que podía quedar :)

Pueden descargarlo [desde GitHub](https://github.com/xeBuz/jquery-doge).

El uso básico es el siguiente, solo deben pasarle un listado de palabras a mostrar, ya incluye algunas por defecto (wow, so doge y asi):

```javacript
$(document).ready( function() {
   // Create an array with some words
   $('body').doge({
       wordList :[ "such page", "lorem impsum", "so cool", "much jquery", "kitten", "such demo", "Kitten Ipsum"]
   });
});
```


También se puede parametrizar un poco, con estas opciones:


```javacript
$(document).ready( function() {
   $('body').doge({
       wordList : [
           "such page", "lorem impsum", "so cool", "much jquery", "text", "such demo", "Kitten Ipsum"
       ],
       showDoge : true,
       fontSize : "2em",
       fontBorder: true,
       dogeImage : "doge.png",
       colours : [
           "red", "green", "orange", "violet", "aqua", "yellow", "slateblue", "purple", "pink", "lime", "fuchsia", "gold", "indigo"
       ],
       textDuration: 1200,
       textRespawn: 1000,
   });
});
```