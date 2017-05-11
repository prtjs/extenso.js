# Extenso.js

> Escrever números por extenso.

![](https://travis-ci.org/theuves/extenso.js.svg?branch=master)

Instale-o com `npm i extenso` ou `bower i extenso.js`.

```js
extenso(123); //=> "cento e vinte e três"
extenso(-123); //=> "menos cento e vinte e três"
extenso(1000000); //=> "um milhão"
extenso("1000000"); //=> "um milhão"
extenso("1.000.000"); //=> "um milhão"
extenso("1,0"); //=> "um"
extenso("0,5"); //=> "cinco décimos"
extenso("1,5"); //=> "um inteiro e cinco décimos"
extenso(1, {feminino: true}); //=> "uma"
extenso(2, {feminino: true}); //=> "duas"
extenso(10000000000000001); //=> undefined
extenso("10000000000000001"); //=> "dez quatrilhões e um"
```
