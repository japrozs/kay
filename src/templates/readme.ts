import fs from "fs";
import path from "path/posix";

export const readme = (loc: string, name: string) => {
    const location = path.resolve(loc);
    const string = `# ${name}`;

    fs.writeFileSync(location, string);
};
