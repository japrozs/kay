"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const package_json_1 = require("../package.json");
const process_1 = __importDefault(require("process"));
const init_1 = require("./init");
commander_1.program.name(package_json_1.name).version(package_json_1.version).description(package_json_1.description);
commander_1.program
    .option("-d, --default", "Standard file generation")
    .option("-l, --license", "Generate license file")
    .option("-c, --contribute", "Generate contributing file")
    .option("-C, --codeOfConduct", "Generate code_of_conduct.md file")
    .option("-r, --readme", "Generate readme file")
    .option("-R, --report", "Generate report.md file");
commander_1.program.command("init <dir>").action((dir) => {
    const options = commander_1.program.opts();
    init_1.init(options, dir);
});
commander_1.program.parse(process_1.default.argv);
//# sourceMappingURL=index.js.map