# Extenso.js

> Uma biblioteca avançada para escrever números por extenso (em português).

## Features

- [x] Números até duodecilhões.
- [x] Números negativos.
- [x] Números decimais.
- [x] Valores monetários (BRL, EUR e mais).
- [x] Preferências de dialetos (Brasil, Portugal e mais).
- [x] Preferências de gênero.

## Instalação

Instale-o com seu gerenciador preferido:

- **npm**: `npm install extenso`
- **Yarn**: `yarn add extenso`

## Uso

```js
var extenso = require('extenso')
```

## Sintaxe

```
extenso(number[, options])
```

### `number`

**Obs.**: Parâmetro obrigatório.

- **Tipo**: `string` ou `number`

> O número que deverá ser escrito por extenso.

Se o valor for do tipo `number`, então ele deve ser um número com parte inteira segura, ou seja, o valor deve ser válido na verificação com `Number.isSafeInteger()`. No entanto, é muito recomendado que os números sejam encapsulados em *string* devivo ao fato que no JavaScript números (do tipo `number`) maiores que 9 quatrilhões perdem valores sendo imprecisos ([experimente este artigo para mais informações](https://bit.ly/tableless-bigint) *[Tableless]*).

Números envolvidos em *strings* deverão seguir o formato natural de escrita de números. Você poder usar `-` no início para representar números negativos e vírgula (`,`) ou ponto (`.`) para separação de milhares e decimais, onde por padrão segue-se o formato de escrita do Brasil podendo alterar as prefencias (como será visto no parâmetro `number.decimalSeparator`).

### `options`

**Obs.**: Parâmetro opcional.

- **Tipo**: `object`

> Configurações opcionais de escrita.

- `mode` (*string*)
- `locale` (*string*)
- `negative` (*string*)
- `currency` (*object*)
- `currency.type` (*string*)
- `number` (*object*)
- `number.gender` (*string*)
- `number.decimal` (*string*)
- `number.decimalSeparator` (*string*)

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
extenso('-42') // 'quarenta e dois negativo'
extenso('-42', { negative: 'formal' }) // 'quarenta e dois negativo'
extenso('-42', { negative: 'informal' }) // 'menos quarenta e dois'
```

#### `locale`

> Define a localização para o modo de escrita.

A escrita de alguns números pode váriar de país para país (e talvez até de região para região), por exemplo, o número 16 é escrito *dezesseis* no Brasil, enquanto que em Portugal é escrito *dezasseis*. A configuração dessas diferenças é feita aqui.

- `br` (*valor padrão*) - Para escrever no dialeto do Brasil.
- `pt` - Para escrever no dialeto de Portugal.

##### Exemplo

```js
extenso('16') // 'dezesseis'
extenso('16', { locale: 'br' }) // 'dezesseis'
extenso('16', { locale: 'pt' }) // 'dezasseis'
```

#### `currency.type`

> Define o código [ISO](https://pt.wikipedia.org/wiki/ISO_4217) da moeda em que o número deverá ser escrito.

- `BRL` (*valor padrão*) - Para escrever valores em Real brasileiro.
- `EUR` - Para escrever valores em Euro.
- `CVE` - Para escrever valores em Escudo cabo-verdiano.
- `MZN` - Para escrever valores em Metical moçambicano.

##### Exemplo

```js
extenso('42', { mode: 'currency' }) // 'quarenta e dois reais'
extenso('42', { mode: 'currency', currency: { type: 'BRL' } }) // 'quarenta e dois reais'
extenso('42', { mode: 'currency', currency: { type: 'EUR' } }) // 'quarenta e dois euros'
extenso('42', { mode: 'currency', currency: { type: 'CVE' } }) // 'quarenta e dois escudos'
extenso('42', { mode: 'currency', currency: { type: 'MZN' } }) // 'quarenta e dois meticais'
```

#### `number.gender`

> Define o gênero do número que será escrito.

Alguns números podem ser representados tanto no modo masculino quanto no modo feminino, por exemplo, *42* pode ser escrito como *quarenta e dois* ou *42* ou *quarenta e duas*.

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
extenso('3,14') // 'três inteiros e quatorze centésimos'
extenso('3,14', { number: { decimal: 'formal' } }) // 'três inteiros e quatorze centésimos'
extenso('3,14', { number: { decimal: 'informal' } }) // 'três vírgula quatorze'
```

#### `number.decimalSeparator`

> Define o separador de inteiro e decimal.

- `comma` (*valor padrão*) - Para usar **vírgula** como separador (ex. `3,14`).
- `dot` - Para usar **ponto** como separador (ex.: `3.14`)

##### Observação

Quando o separador de decimal é o `.` (ponto) automaticamente o separador de
milhar será o `,` (vírgula) e vice-versa.

##### Exemplo

```js
extenso('3,14')
extenso('3,14', { number: { decimalSeparator: 'comma' } })
extenso('3.14', { number: { decimalSeparator: 'dot' } })

// 'três inteiros e quatorze centésimos'
```

## Contribuição

Oi, você é de Portugal, Angola, Moçambique ou qualquer outro país que usa fala português? Viu alguma escrita de números que é diferente no seu país? Então abra uma *issue* e vamos discutir como adaptar essas caracteristicas ao projeto para deixá-lo o mais completo possível.

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
  - **Regra 1**: Deve ter o formato: *Deve(m) + verbo + descrição*.
  - **Regra 2**: Nunca use ponto final na descrição.
- Mensagem de *commits* em **português**.
  - **Regra 1**: Inicie-os sempre em caixa alta.
  - **Regra 2**: Nunca use ponto final na descrição.

## *TODO*

- [ ] Traduzir o `README.md` em inglês (`README-en.md`).

## Licença

MIT &copy; Matheus Alves
