# Extenso

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

Escreve números de `-1e+42` a `1e+42`.

```js
extenso(1234); //=> 'mil duzentos e trinta e quatro'
extenso(1024); //=> 'mil e vinte e quatro'
```

Use `string` números maiores que 999 trilhôes.

```js
extenso('4000000000000000'); //=> 'quatro quatrilhões'
extenso('8000000000000000'); //=> 'oito quatrilhões'
```

Números negativos.

```js
extenso(-123); //=> 'menos cento e vinte e três'
extenso(-256); //=> 'menos duzentos e cinquenta e seis'
```

## Licença

[MIT](http://theuves.mit-license.org/)
