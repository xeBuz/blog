---
author: xeBuz
comments: true
date: 2014-02-26 15:56:32+00:00
layout: post
slug: jquery-selectores-y-traversing
title: 'jQuery: Selectores y Traversing'
wordpress_id: 1398
categories:
- HTML5
- Javascript
- jQuery
- Programación
tags:
- html5
- javascript
- jquery
---

Voy a poner esto acá, haciendo las veces de ayudamemoria. Además para el que no sepa, siempre viene bien tener un listado e investigarlos.
Selectores/Traversing (que no encontré una traducción buena) en jQuery.

**Selectores básicos**

    
    
      $("#idName")          // Por id
      $(".className")       // Por clase
    
      $(document)           // DOM (Document Object Model)
      $(window)             // DOM + imágenes + iframes
    
      $("*")                // todos los elementos
      $("div.title")        // <div class="title"> </div>
      $("div:first")        // Primer div
    
      $("article h1")       // Todos los h1 dentro de article
      $("article > h1")     // Todos los h1 hijos directo de article
    
      $("[href]")           // Todos los elementos que tengan href
      $("li:nth-child(n)")  // El elmento n - *cuenta desde 1*
    
      $("tr:even")          // TableRows pares	
      $("p:hidden")         // Todos los <p> ocultos (con .hide())
    



**Selectores "avanzados"**

    
    
      $(":input")           // Todos los inputs
      $(":text")                 // Todos los elementos type="text"
      $(":checked")              // Todos los elementos chequeados
      $(":focus")                // Todos los elementos que tengan foco
    
      $("[href='index.html']")   // href que sean igual a index.html
      $("[href!='index.html']")  // href que no sean igual a "index.html"
      $("[href$='.html']")       // href que terminen en ".html"
      $("[href^='https://']")    // href que empiezen en "https://"
      $("[href*='cuenta']")      // href que contengan "cuenta"
    
      $("#nav ul li:first-child")   // Primer li dentro de un/los ul que estén dentro de #nav
    



**Traversing **

    
    
      $("#nav ul:first li:eq(2)")   // 3er li, dentro del 1er ul que esté en #nav *inicia en 0*
      $("#nav ul:eq(0) li:eq(-1)")  // Último li, dentro del 1er ul que esté en #nav
      $("#nav ul li:gt(2)")         // Los li que tengan un index mayor a 2
      $("#nav ul li:lt(2)")         // Los li que tengan un index menor a 2
    
      $("#post").not("p")           // Todos los elementos que no sean <p>
      $("#nav ul li").not(":even")  // Todos los li que no sean pares
      $("#nav ul").children(":contains('Simulador')")   // .children() busca todos los hijos del elemento, :contains() filtra por texto
      $("#nav ul li p").parent(".active") // Selecciona el li que tenga un p activo
      
      $( "#nav ul li" ).each(function( index ) { 
          console.log( index + ": " + $( this ).text() );
      });
    
      if ( $("#nav").is("div") ) { ... }    
    
      // Otras opciones:
      // .end() .find() .first() .last() .has() .next() .nextAll() .prev() .prevAll() ...
      // https://api.jquery.com/category/traversing/
    
