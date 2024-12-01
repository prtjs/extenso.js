"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastNumber = exports.split = void 0;
const split = (int) => {
    return [...int.match(/\d{1,3}(?=(\d{3})*$)/g) || []];
};
exports.split = split;
const getLastNumber = (int) => {
    const splitted = (0, exports.split)(int);
    const last = splitted[splitted.length - 1];
    const integer = parseInt(last);
    return integer;
};
exports.getLastNumber = getLastNumber;
