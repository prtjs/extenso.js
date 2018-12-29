# Extenso.js

<!-- Imagem com o status do teste. -->
![Status](https://travis-ci.org/theuves/extenso.js.svg?branch=master)

> Biblioteca completa para escrever números por extenso.

## Características

- [x] Aceita números até duodecilhões.
- [x] Aceita números negativos.
- [x] Aceita números decimais.
- [x] Aceita configuração de dialetos diferentes.
- [x] Aceita configuração de genero (masculino/feminino).
- [x] Aceita valores monetários (Reais, Euros, e está apto para +).

## Instalação

Instale-o com *npm* ou *yarn*:

- **npm**: `npm install extenso`.
- **yarn**: `yarn add extenso`.

## Uso

```js
var extenso = require('extenso')
```

## Sintaxe

```
extenso(number, [options])
```

### `number`

**Obs.**: Existência obrigatório.

- **Tipo**: `string` ou `number`

> O valor numérico que deverá ser escrito por extenso.

Se o valor for do tipo `number`, então ele deve ser um número inteiro seguro,
ou seja, ele deve ser válido com `Number.isSafeInteger()`. Porém, é altamente
recomendado que os números sejam passados dentro de *strings* devido ao fato
que, no JavaScript, números (do tipo `number`) maiores que 9 quatrilhões
perdem valores, ou seja, são imprecisos (leia [este artigo no Tableless para
mais informações](https://bit.ly/2BLo6aP)).

Números envolvidos em *strings* deverão seguir o formato natural de escrita
de números na língua portuguesa. Você pode usar `-` no início do número para
representar a negatividade, `.` para representar a separção de milhares (isso
é só para semântica e não causa efeitos no retorno) e `,` para reprentar a
separação dos números inteiros e dos números decimais.

Observe que o uso do `.` para separar milhares não é obrigatório, no entanto,
se você for usá-lo ele deve obedecer estritamente a regra de escrita, por
exemplo, `1.000.000` é um número válido que será aceito, mas `1.000000`
retornará um erro.

### `options`

**Obs.**: Existência opcional.

- **Tipo**: `object`

> Lista de opções válidas e o tipo do seu valor.

- `mode` - *string*
- `locale` - *string*
- `negative` - *string*
- `currency` - *object*
- `currency.type` - *string*
- `number` - *object*
- `number.gender` - *string*
- `number.decimal` - *string*

#### `mode`

> Define o modo de escrita do número.

Pode ser:

- `number` (*valor padrão*) - Para escrever números simples.
- `currency` - Para escrever valores monetários.

##### Exemplo

```js
extenso('42') // 'quarenta e dois'
extenso('42', { mode: 'number' }) // 'quarenta e dois'
extenso('42', { mode: 'currency' }) // 'quarenta e dois reais'
```

#### `negative`

> Define o modo de escrita do valor negativo.

- `formal` (*valor padrão*) - Para escrever o número no modo formal.
- `informal` - Para escrever o número no modo informal.

##### Exemplo

```js
extenso('42') // 'quarenta e dois negativo'
extenso('42', { negative: 'formal' }) // 'quarenta e dois negativo'
extenso('42', { negative: 'informal' }) // 'menos quarenta e dois'
```

#### `locale`

> Define a localização para o modo de escrita.

A escrita de alguns números pode váriar de país para país (e talvez até de
região para região), por exemplo, o número 16 é escrito *dezesseis* no Brasil,
enquanto que em Portugal é escrito *dezassete*. A configuração dessas
diferenças é feita aqui.

- `br` (*valor padrão*) - Para escrever no dialeto do Brasil.
- `pt` - Para escrever no dialeto de Portugal.

##### Exemplo

```js
extenso('16') // 'dezesseis'
extenso('16', { locale: 'br' }) // 'dezesseis'
extenso('16', { locale: 'pt' }) // 'dezasseis'
```

#### `currency.type`

> Define o código [ISO](https://bit.ly/2QeGHBm) da moeda em que o número deverá
ser escrito.

- `BRL` (*valor padrão*) - Para escrever números simples.
- `EUR` - Para escrever valores monetários.

##### Exemplo

```js
extenso('42', { mode: 'currency' }) // 'quarenta e dois reais'
extenso('42', { mode: 'currency', currency: { type: 'BRL' } }) // 'quarenta e dois reais'
extenso('42', { mode: 'currency', currency: { type: 'EUR' } }) // 'quarenta e dois euros'
```

#### `number.gender`

> Define o gênero do número que será escrito.

Alguns números podem ser representados tanto no modo masculino quanto no modo
feminino, por exemplo, *42* pode ser escrito como *quarenta e dois* ou *42* ou
*quarenta e duas*.

- `m` (*valor padrão*) - Para escrever no modo masculino.
- `f` - Para escrever no modo feminino.

##### Exemplo

```js
extenso('42') // 'quarenta e dois'
extenso('42', { number: { gender: 'm' } }) // 'quarenta e dois'
extenso('42', { number: { gender: 'f' } }) // 'quarenta e duas'
```

#### `number.decimal`

> Define o modo de escrita do valor decimal.

- `formal` (*valor padrão*) - Para escrever no modo formal.
- `informal` - Para escrever no modo informal.

##### Exemplo

```js
extenso('3.14') // 'três inteiros e quatorze centésimos'
extenso('3.14', { number: { decimal: 'formal' } }) // 'três inteiros e quatorze centésimos'
extenso('3.14', { number: { decimal: 'informal' } }) // 'três vírgula quatorze'
```

## Contribuição

Oi, você é de Portugal, Angola, Moçambique ou qualquer outro país que usa fala
português? Viu alguma escrita de números que é diferente no seu país? Então
abra uma *issue* e vamos discutir como adaptar essas caracteristicas ao projeto
para deixá-lo o mais completo possível.

Viu algum erro ou qualquer coisa que pode ser melhorada?

Você pode, portanto:

- Abrir uma *issue*.
- Enviar um *pull request*.
- Comentar no trecho do código que você acredita que pode ser melhorado.

### Regras

Tendo em vista a participação de falantes da língua portuguesa, escreva:

- Nome de váriaveis, funções e outras coisas do tipo em **inglês**.
- Nome dos arquivos e diretórios em **inglês**.
- *Issues*, *pull requests* e comentários em **português**.
- Descrição dos testes em **português**.
  - **REGRA 1**: Deve ter o formato: *Deve(m) + verbo + descrição*.
  - **REGRA 2**: Nunca use ponto final na descrição.
- Mensagem de *commits* em **português**.
  - **REGRA 1**: Inicie-os sempre em caixa alta.
  - **REGRA 2**: Nunca use ponto final na descrição.

## *TODO*

- [ ] Traduzir o `README.md` em inglês (`README-en.md`).

## Licença

MIT &copy; Matheus Alves
