---
author: xeBuz
comments: true
date: 2012-10-21 20:49:21+00:00
layout: post
slug: barra-de-progreso-de-arch-linux-para-python
title: Barra de progreso de Arch Linux para Python
wordpress_id: 1313

categories:
- Arch Linux
- Bash
- Programación
- Python

tags:
- dev
- library
- python
---

Hace unos días me puse a _portar_ la barra de progreso que tiene el sistema de paquetes de [**Arch Linux**](http://blog.jesusroldan.com/2011/12/28/tips-para-mejorar-la-instacion-de-aplicaciones-en-arch/) (activando la opción **ILoveCandy**) a Python 3.X y 2.7. De momento está en fase de prueba, pero es dentro de todo funcional, prometo ir actualizándola cuando pueda.

Para poder instalarlo, pueden bajarse los fuentes [desde **GitHub**](https://github.com/xeBuz/pacman-progressbar) o directamente desde PyPi:

```bash
    sudo pip install pacmanprogressbar
```



La utilización es la siguiente (proximamente voy a hacer que se pueda iterar directamente):

```python
    #!/usr/bin/env python
    import time
    from pacmanprogressbar import Pacman

    if __name__ == "__main__":
        p = Pacman(end=100)

        for x in range(p.len):
            p.update()
            time.sleep(.2)
```

Una vez instanciada la clase, tiene dos métodos públicos:
- **update([value])**, actualiza el progreso sumándole el valor del parámetro, por defecto suma 1.
- **progress(value)**, en vez de sumarizar, se le pasa directamente el valor del progreso.




La salida en consola sería más o menos como esta:
![a](http://i.imgur.com/klIcQ2u.gif)
