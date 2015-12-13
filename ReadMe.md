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
extenso(1234); // mil duzentos e trinta e quatro
extenso(4321); // quatro mil trezentos e vinte e um
```

```js
extenso(-1234); // menos mil duzentos e trinta e quatro
extenso(-4321); // menos quatro mil trezentos e vinte e um
```

Números com mais de 15 dígitos devem ser passados como uma *string*.

```js
extenso('10000000000000001'); // dez quatrilhões e um
```

## Licença

[MIT](http://theuves.mit-license.org/)
