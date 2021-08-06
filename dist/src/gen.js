"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gen = void 0;
const path_1 = __importDefault(require("path"));
const codeOfConduct_1 = require("./templates/codeOfConduct");
const contribute_1 = require("./templates/contribute");
const license_1 = require("./templates/license");
const readme_1 = require("./templates/readme");
const report_1 = require("./templates/report");
const gen = (files, dir) => {
    files.forEach((file) => {
        const location = path_1.default.join(path_1.default.resolve(dir), file + ".MD");
        const name = path_1.default.basename(process.cwd());
        switch (file) {
            case "LICENSE": {
                console.log("here");
                license_1.license(location, name);
                break;
            }
            case "CONTRIBUTE": {
                contribute_1.contribute(location);
                break;
            }
            case "CODE_OF_CONDUCT": {
                codeOfConduct_1.codeOfConduct(location);
                break;
            }
            case "README": {
                readme_1.readme(location, name);
                break;
            }
            case "REPORT": {
                report_1.report(location);
                break;
            }
        }
    });
};
exports.gen = gen;
//# sourceMappingURL=gen.js.map