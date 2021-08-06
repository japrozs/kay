"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.report = void 0;
const fs_1 = __importDefault(require("fs"));
const posix_1 = __importDefault(require("path/posix"));
const report = (loc) => {
    const location = posix_1.default.resolve(loc);
    const string = `
# Security Policy

## Reporting a Vulnerability

DM me on [SOCIAL_MEDIA_USERNAME] or [DISCORD_LINK]
	`;
    fs_1.default.writeFileSync(location, string);
};
exports.report = report;
//# sourceMappingURL=report.js.map