---
author: xeBuz
comments: true
date: 2011-10-20 18:26:48+00:00
layout: post
slug: zsh
title: zsh, una shell con Z de "ZOMG que buena shell"
wordpress_id: 406
categories:
- GNU/Linux
- Tutoriales
tags:
- bash
- linux
- tips
---

**Z Bash**, o mejor **zsh**, es un interprete de comándos (_shell_), excelente alternativa al Bash que viene por defecto (_Bourne-again Shell_). Como mejoras, se destaca:


- Mejorado en el autocompletado.
- Muy customizable.
- Corrección de tipeo.
- Mejor manejo de funciones.
- Es una shell mas hipster (?)._ (En realidad no, tiene mas de 20 años, y se usa bastante...pero no viene por defecto)_

---

La instalación es simple, son unos poco kilobytes y seguro esta disponible en la distro que usen. En mi caso basta con:

```bash
    pacman -S zsh
```

Una vez instalada, debería figurar en el archivo /etc/shells, para setearla como shell por defecto tenemos que correr:

```bash
    chsh -s $(which zsh)
```

La primera vez que ingresan, la shell les sugiere que ejecuten **zsh-newuser-install**, lo cual es recomendable, da una pequeña pero útil instroducción, con asistentes de configuración.

Ahora sí, veamos algunas cosas que tiene para ofrecernos...

**Autocompletado de parametros**

Antes pensaba que bash era buena con el autocompletado, claro que viniendo del cmd de Windows cualquier cosa es mejor; zsh vino a abrir una nueva puerta a la comodidad en la línea de comandos.
Es rápidisimo y funciona con todos* los comandos, sólo pongan el - y para que liste las opciones.

**Historial de bash, compatible con zsh**

Una de las primeras cosas que necesité migrando de shell fue el historial. Pueden copiar _~/.bash_history _a _~/.histfile_ y van a tener lo mismo que bash, imprescindible si usan **Control + R**.
Tambien es compatible el archivo _~/.bashrc _con el _~/.zshrc_ y el_ ~/.bash_profile_ con _~/.zprofile_, pero en mi caso preferí hacer copias a mano de lo que necesitaba. Sólo cuestión de gustos.
Además, permite compartir el historial entre sesiones, muy comodo si entramos desde ssh y localmente a una PC.

**zsh-yaourt**

Este paquete está en el AUR, y si, adivinaron, agrega autocompletado de paquetes a yaourt, es increiblemente útil, a lo _apt-get _si quieren una comparación, es muy bueno y rápido.

**Paginador 'inteligente'**

No se si Paginador es la palabra apropiada, tampoco se si inteligente sería el adjetivo indicador. Todos somos unos vagos, por eso usamos la terminal, que mejor que escribir cat LEAME, cat LEAME | less, si, escribir solo LEAME, bueno, zsh nos entiende, así que funciona así.

**Diferentes "key bindings"**

En este caso, zsh los meneja de otra forma, y es frustrante mover las fechas de dirección y no obtener lo que pretendemos. No me resultó cómodo (porque no le dí tiempo a ver como funcionaba, ya estoy viejo para algunas cosas). Para dejarlo funcionando "a lo Bash", tienen que editar el archivo _~/.zshrc_

```bash
    bindkey "e[1~" beginning-of-line # Home
    bindkey "e[4~" end-of-line # End
    bindkey "e[5~" beginning-of-history # PageUp
    bindkey "e[6~" end-of-history # PageDown
    bindkey "e[2~" quoted-insert # Ins
    bindkey "e[3~" delete-char # Del
    bindkey "e[5C" forward-word
    bindkey "eOc" emacs-forward-word
    bindkey "e[5D" backward-word
    bindkey "eOd" emacs-backward-word
    bindkey "ee[C" forward-word
    bindkey "ee[D" backward-word
    bindkey "e[Z" reverse-menu-complete # Shift+Tab
    # for rxvt
    bindkey "e[7~" beginning-of-line # Home
    bindkey "e[8~" end-of-line # End
    # for non RH/Debian xterm, can't hurt for RH/Debian xterm
    bindkey "eOH" beginning-of-line
    bindkey "eOF" end-of-line
    # for freebsd console
    bindkey "e[H" beginning-of-line
    bindkey "e[F" end-of-line
```


**Correccion de typos**

Para los dislexicos como uno, esto es muy bueno, nos autocorrige directorios, comandos, archivos... probandolo es muy bueno, no perfecto, pero ayuda a la hora de escribir rapido.



**Links recomendados y fuentes para el post**

- [Guía oficial (en inglés)](http://zsh.sourceforge.net/Guide/zshguide.html)
- [Wiki de Zsh, para Arch](https://wiki.archlinux.org/index.php/Zsh)
- [zhs-lovers](http://pwet.fr/man/linux/commandes/zsh_lovers)
- [Una wiki muy completa](http://zshwiki.org/home/start)
- [Buena info para el .zshrc, en español](http://fausto23.wordpress.com/2010/01/31/zsh-esa-shell/)


