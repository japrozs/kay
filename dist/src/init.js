"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const gen_1 = require("./gen");
const filenames = [];
const init = (opts, location) => {
    if (opts.default) {
        filenames.push("LICENSE", "README", "CONTRIBUTING", "CODE_OF_CONDUCT");
    }
    else {
        Object.keys(opts).forEach((key) => {
            key = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
            key = key.toUpperCase();
            filenames.push(key);
        });
    }
    gen_1.gen(filenames, location);
};
exports.init = init;
//# sourceMappingURL=init.js.map