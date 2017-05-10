"use strict";

var test = require("ava");
var extenso = require("./");

test("extenso", function (t) {
  t.is(extenso(123), "cento e vinte e três");
  t.is(extenso(-123), "menos cento e vinte e três");
  t.is(extenso(1000000), "um milhão");
  t.is(extenso("1000000"), "um milhão");
  t.is(extenso("1.000.000"), "um milhão");
  t.is(extenso("1,0"), "um");
  t.is(extenso("0,5"), "cinco décimos");
  t.is(extenso("1,5"), "um inteiro e cinco décimos");
  t.is(extenso(1, {feminino: true}), "uma");
  t.is(extenso(2, {feminino: true}), "duas");
  t.is(extenso("10000000000000001"), "dez quatrilhões e um");
});
