---
author: xeBuz
comments: true
date: 2014-03-05 15:04:21+00:00
layout: post
slug: crazy-little-thing-called-perl
title: 'Crazy little thing called Perl: Introducción al lenguaje'
wordpress_id: 1431
categories:
- Perl
- Programación
tags:
- dev
- linux
- perl
---

Perl está disponible para múltimples plataformas, pueden descargarlo desde [acá](http://www.perl.org/get.html) o desde el sistema de paquetes que utilicen. Para verificar si tienen instalado perl, en la terminal escriban _perl -v_, si hay salida ya lo tienen instalado.

Para la instalación de librerías se utiliza [**CPAN**](http://www.cpan.org/), que es una colección de módulos libres para Perl. Pueden descargar este script o sino instalarlo desde los repositorios, por ejemplo, en un Linux basado en Debian basta correr:

```bash
    aptitude install cpanminus
```

Una vez instalado, para instalar módulos deben correr desde la consola el siguiente comando (teniendo en cuenta que el nombre del módulo es case-sensitive):

```
    cpan install Modulo
```

![](http://www.tiraecol.net/modules/comic/cache/images/tiraecol-15.png)

**Variables**

Perl maneja tres tipos de variables:

- Scalar
- Array
- Hash


**Scalar**

Las variables escalares representan un valor simple. Los valores escalares pueden ser cadenas, enteros o números de coma flotante y se definen anteponiendo el signo **$** al nombre de la variable.
No hay necesidad de pre-declarar sus tipos de variables, Perl los convertirá automáticamente entre ellos según sea necesario.

```perl
    my $animal = "turtle";
    my $answer = 42;
```

**Array**

Las variables de tipo Array representan una lista de valores. Se declaran anteponiendo el signo **@** al nombre de la variable

```perl
    my @animals = ("turtle", "llama", "cat");
    my @numbers = (23, 42, 69);
    my @mixed   = ("whale", 666, 1.23);
```

Los Arrays son indexados a cero. Se puede acceder a los valores de la siguiente manera:

```perl
    print $animals[0];              # imprime "turtle". Se utiliza $ porque es un valor scalar
    print $animals[1];              # imprime "llama"
``

La variable especial $#nombrearray nos indica el índice del último elemento.

```perl
    print $#mixed;                # imprime 2
    print $mixed[$#mixed];        # último elemento, imprime 1.23
```

Si utilizamos @mixed en contexto escalar, obtendremos el tamaño de nuestro Array:

```perl
    $arrayLength = @mixed;
    print $arraylength;            #imprime 3
```

Para obtener múltiples valores de nuestro Array:

```perl
    @animals[0,1];           # Devuelve ("turtle", "llama"), @ porque devuelve un array;
    @animals[0..2];          # Devuelve ("turtle", "llama", "cat");
    @animals[1..$#animals];  # Devuelve todo excepto el primer elemento
```


**Hash**

Un hash representa un conjunto de pares clave / valor. En realidad hash son tipo de Arrays, con la excepción de que el índice puede ser un número o una cadena. Están precedidos por el signo **%** de la siguiente manera:

```perl
    my %fruta_color = ("manzana", "rojo", "banana", "amarillo");
```

Se pueden utilizar los espacios en blanco y el operador => para dejarlo mas claro:

```perl
    my %fruta_color = (
        manzana => "red",
        banana => "amarillo",
    );
```

Para obtener un elemento del hash:

```perl
    $fruta_color{"manzana"}       # Devuelve "rojo"
```

Podemos obtener una lista con las claves o valores con las funciones predefinidas keys() y values():

```perl
    my @frutas = keys(%fruta_color);
    my colores = values(%fruta_color);
```

**Alcance de las variables**

En la sección anterior declaramos:

```perl
    my $animal = "tortuga";
```

El modificador my no es necesario, también se puede usar:

```perl
    $animal = "tortuga";
```

Sin embargo, el uso anterior creará variables globales a través de su programa, que es mala práctica de programación. my crea variables con ámbito local. Las variables locales están disponibles en el ámbito del bloque (es decir, un grupo de estados rodeadas de llaves) en el que están definidos.

```perl
    my $x = "foo";
    my $condicion = 1;
    if ($condicion) {
        my $y = "bar";
        print $x;           # imprime "foo"
        print $y;           # imprime "bar"
    }
    print $x;               # imprime "foo"
    print $y;               # no imprime nada ; $y no está en ese scope
```



**Tabla de conversiones de tipos**

        <table >
             
                <tr >
                     (1,2,3) [1,2,3] {a=>x} (a=>1) "pepe"
                </tr> 
             
             <tbody >
                <tr >
                    Arity
<td >Lista
</td>
<td >Scalar
</td>
<td >Hash Ref.
</td>
<td >Hash
</td>
<td >Scalar
</td>
                </tr>
                <tr >
                    Elemento
<td >$x[0]
</td>
<td >$x->[1]
</td>
<td >$x->{a}
</td>
<td >$x{a}
</td>
<td >$x
</td>                   
                </tr>
                <tr >
                    Lista
<td >@x
</td>
<td >@{$x}
</td>
<td >%{$x}
</td>
<td >%x
</td>
<td >($x)
</td>
                </tr>   
                <tr >
                    Hash
<td >-
</td>
<td >-
</td>
<td >%{$x}
</td>
<td >%x
</td>
<td >{e=> $x}
</td>
                </tr>
                <tr >
                    Ref.
<td >\@x
</td>
<td >$x
</td>
<td >$x
</td>
<td >\%x
</td>
<td >\$x
</td>
                </tr>
                <tr >
                    Ref. Copia
<td >[@x]
</td>
<td >[@{$x}]
</td>
<td >{%{$x}}
</td>
<td >{%x}
</td>
<td >[$x]
</td>
                </tr>
             </tbody>
        </table>     


**Sintaxis básica**
**if, elsif, else, unless**
 
    
    # La sintaxis es muy similar a otros lenguajes
    if ($var == 3) {
      do_magic();
    }
    
    # unless se usa para un if negativo
    if (!$var) {
      do_magic();
    }
    unless ($var) {
      do_magic();
    }
    
    # Por supuesto también existe else
    if ($var) {
        do_magic();
    } else {
       do_another_magic();
    }
    # y se pueden anidar
    if ($var) {
       do_magic();
    } elsif ($another_var) {
       do_another_magic();
    } else {
       do_something_else();
    }
    



**while, do while, until**
 
    
    my $counter = 10;
     
    while ($counter > 0) {
       say $counter;
       $counter -= 1;
    }
    
    do {
      say $counter;
      $counter += 1;
    } while ($counter < 10);
    
    
    until( $counter > 20 ){
       say "$counter";
       $counter += 1;
    }
    
    say 'tadaaa';



**for, for each**
 

    
    # for ( init; condition; increment )
    for( $i = 1; $i < 20; $i = $i + 1 ){
        print "value: $i\n";
    }
    
    my @list = (1, 20, 33, 45, 59);
    foreach $i (@list){
        say '$i';
    }



**Funciones**
En realidad las funciones son subrutinas, quizás sea porque el lenguaje es viejo :P ... la sintáxis es también bastante común.

    
    sub name{
       # blablabla
       return $x;
    }



Para pasar parámetros se hace de esta forma

    
    sub TestScalar{
       my $x = @_;      #parámetro scalar 
       # blabla
    }
    sub TestArray{
       my @list = @_;   #parámetro array
       # blabla
    }
    sub TestHash {
       my (%hash) = @_; #parámetro hash
       # blabla
    }
    
    # Si esperamos varios parámetros, se pueden acceder desde la variable @_ como un array
    sub TestScalar{
       my $x = @_[0]; 
       my $y = @_[1]; 
       # blabla
    }
    



**Variables privadas **

    
    sub TestPrivateVars{
       my $var; # inaccesible fuera de TestPrivateVars()
       $varx;   # accesible fuera de TestPrivateVars(), no hacerlo
    
       my ($another, @my_array, %my_hash); # declaración múltiple privada
    }




**TDD con Perl**
![TDD](http://www.aaroncohen.me/wp-content/uploads/2013/04/2011-04-28.tdd_-700x299.png)
Para hacer TDD en necesario bajar un paquete de CPAN, Test::More.
Acá un ejemplo de como correr un test, sobre una función específica.
 

    
    # En esta línea declaramos el uso de Test::More
    # y le decimos que solo se corre una vez
    use Test::More test => 1;
    
    # is() es la función que ejecuta el test, consta de 3 parámetros
    # 1ro función a ejecutar con sus respectivos parámetros
    # 2do resultado esperado
    # 3ro nombre descriptivo
    is(replace("hola"), "chau", "Reemplazo de nombres");
    is(replace("chay"), "chau", "Reemplazo de nombres");
    
    # Esta es la función que se ejecuta
    sub replace( my ($text) = @_;
        $text =~ s/\bhola\b/chau/gi;
        return $text;
    }
    
    #Con esta función declaramos el fin del testing
    done_testing()




_Próximo post: Expresiones regulares en Perl. O sea: Perl._
