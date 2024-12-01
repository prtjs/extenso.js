"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const int_util_1 = require("./int-util");
const parts_util_1 = require("./parts-util");
exports.default = (int, locale, scale) => {
    // TODO: Melhorar isso
    const number = (0, parts_util_1.write)((0, parts_util_1.addComma)((0, parts_util_1.addConjunction)((0, parts_util_1.singularize)((0, parts_util_1.clear)((0, parts_util_1.name)((0, int_util_1.split)(int), locale, scale))), int)), locale);
    return number.join(' ');
};
