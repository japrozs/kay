import fs from "fs";
import path from "path/posix";

export const report = (loc: string) => {
    const location = path.resolve(loc);
    const string = `
# Security Policy

## Reporting a Vulnerability

DM me on [SOCIAL_MEDIA_USERNAME] or [DISCORD_LINK]
	`;

    fs.writeFileSync(location, string);
};
