# extenso

> Escrever um número por extenso.

Instale-o com `npm install --save extenso`.

## Caracteristicas

 - aceita número de até 42 digitos
 - aceita números negativos e decimais

## Uso

```js
var extenso = require('extenso');
```

### extenso(*número*[, *opções*])

Onde `número` deve ser um número válido (*number* ou *string*).

E `opções` pode ser:

* `feminino` - para retornar números escritos no feminino
 * Para *um* (*uma*) e *dois* (*duas*).

## Exemplos

Veja alguns exemplos abaixo:

```js
extenso(123); //=> 'cento e vinte e três'
extenso(-123); //=> 'menos cento e vinte e três'
```

```js
extenso('1000000'); //=> 'um milhâo'
extenso('1.000.000'); //=> 'um milhâo'
```

```js
extenso('1,0'); //=> 'um'
extenso('0,5'); //=> 'cinco décimos'
extenso('1,5'); //=> 'um inteiro e cinco décimos'
```

```js
extenso(1, {feminino: true}); //=> 'uma'
extenso(2, {feminino: true}); //=> 'duas'
```

Números com mais de 15 dígitos devem ser passados como uma *string*:

```js
extenso('10000000000000001'); //=> 'dez quatrilhões e um'
```

## Observações

Use `,` para separar decimais e `.` para separar milhares.

## Licença

[MIT](http://theuves.mit-license.org/)
