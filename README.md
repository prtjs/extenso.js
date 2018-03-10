# Extenso.js

> Escrever número por extenso.

![Status](https://travis-ci.org/theuves/extenso.js.svg?branch=master)

![NPM](https://nodei.co/npm/piii.png?mini=true)

Escreve números:

- [x] Em [Real](https://goo.gl/wgoGxV).
- [x] Negativos e decimais.
- [x] Com até 42 algarismos.

## Instalação

Com [*npm*](https://npmjs.com/):

```
npm install --save extenso
```

Ou importe-o de [*unpkg.com*](https://unpkg.com/extenso).

## Exemplos

```js
extenso(1); // "um"
extenso(42); // "quarenta e dois"
extenso(42, {feminino: true}); // "quarenta e duas"
extenso(-42); // "menos quarenta e dois"
extenso(128); // "cento e vinte e oito"
extenso(1000); // "mil"
extenso("1000"); // "mil"
extenso("1.000"); // "mil"
extenso("1.000,00"); // "mil"
extenso("3,14"); // "tres inteiros e quatorze décimos"
extenso(1, {real: true}); // "um real"
extenso("1.5"); // "um real e cinquenta centavos"
```

## Licença

MIT
