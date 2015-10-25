---
author: xeBuz
comments: true
date: 2011-08-07 19:52:28+00:00
layout: post
slug: cambios-en-grub-con-el-nuevo-kernel
title: Cambios en Grub con el nuevo Kernel
wordpress_id: 122
categories:
- GNU/Linux
- Tutoriales
tags:
- arch
- grub
- kernel
- linux
---

Quizás si instalan la ultima version de grub (0.97-19) y del kernel (3.0.1-1 y para posteriores actualizaciones tambien es válido) y reinicien les pase como a mi que no arrancaba el sistema, debido a unos cambios de nombre en los archivos

La corrección es fácil, pueden crear un enlance al archivo correcto, o en su defecto lo que me parecio mas simple, editar el archivo /boot/grub/menu.lst de la siguiente forma:
`
# (0) Arch Linux
title  Arch Linux
root   (hd0,0)
kernel /**vmlinuz-linux** root=/dev/disk/by-uuid/d45327e7-5965-4aa7-b3b3-d57d1eecad0a ro
initrd /**initramfs-linux.img**

# (1) Arch Linux
title  Arch Linux Fallback
root   (hd0,0)
kernel /**vmlinuz-linu**x root=/dev/disk/by-uuid/d45327e7-5965-4aa7-b3b3-d57d1eecad0a ro
initrd /**initramfs-linux-fallback.img**`

<!-- more -->
Si no cambiaron el archivo antes de reiniciar y no inicia, después de putear, entren  en el menu de grub, para editar la linea presionan la **e** y despues inician con **b**
