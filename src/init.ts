import { gen } from "./gen";
import { OptionTypes } from "./types";

const filenames: string[] = [];

export const init = (opts: OptionTypes, location: string) => {
    if (opts.default) {
        filenames.push("LICENSE", "README", "CONTRIBUTING", "CODE_OF_CONDUCT");
    } else {
        Object.keys(opts).forEach((key) => {
            // converts codeOfConduct to code_of_conduct
            key = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
            // convert code_of_conduct to CODE_OF_CONDUCT
            key = key.toUpperCase();
            filenames.push(key);
        });
    }

    gen(filenames, location);
};
