import path from "path";
import { codeOfConduct } from "./templates/codeOfConduct";
import { contribute } from "./templates/contribute";
import { license } from "./templates/license";
import { readme } from "./templates/readme";
import { report } from "./templates/report";

export const gen = (files: string[], dir: string) => {
    files.forEach((file) => {
        const location = path.join(path.resolve(dir), file + ".MD");
        const name = path.basename(process.cwd());
        switch (file) {
            case "LICENSE": {
                console.log("here");
                license(location, name);
                break;
            }
            case "CONTRIBUTE": {
                contribute(location);
                break;
            }
            case "CODE_OF_CONDUCT": {
                codeOfConduct(location);
                break;
            }
            case "README": {
                readme(location, name);
                break;
            }
            case "REPORT": {
                report(location);
                break;
            }
        }
    });
};
