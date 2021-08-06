"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readme = void 0;
const fs_1 = __importDefault(require("fs"));
const posix_1 = __importDefault(require("path/posix"));
const readme = (loc, name) => {
    const location = posix_1.default.resolve(loc);
    const string = `# ${name}`;
    fs_1.default.writeFileSync(location, string);
};
exports.readme = readme;
//# sourceMappingURL=readme.js.map