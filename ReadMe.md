# [`extenso`](https://npmjs.com/extenso)

> Escrever um número por extenso.

## Instalação

Com [NPM](https://github.com/npm/npm):

```
$ npm install extenso
```

## Uso

```js
var extenso = require('extenso');
```

**Exemplos:**

```js
extenso(123); //=> 'cento e vinte e três'
extenso(-123); //=> 'menos cento e vinte e três'
```

```js
extenso('1.000.000'); //=> 'um milhâo'
```

```js
extenso('1,0'); //=> 'um'
extenso('0,5'); //=> 'cinco décimos'
extenso('1,5'); //=> 'um inteiro e cinco décimos'
```

Números com mais de 15 dígitos **devem** ser passados como *string*:

```js
extenso('10000000000000001'); //=> 'dez quatrilhões e um'
```

## Licença

[MIT](http://theuves.mit-license.org/)
