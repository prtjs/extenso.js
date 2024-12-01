"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = void 0;
const getType = (place) => {
    switch (place % 3) {
        case 1:
            return 'décimo';
        case 2:
        default:
            return 'centésimo';
    }
};
exports.getType = getType;
