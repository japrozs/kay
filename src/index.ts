import { program } from "commander";
import { name, version, description } from "../package.json";
import process from "process";
import { init } from "./init";

program.name(name).version(version).description(description);

program
    .option("-d, --default", "Standard file generation")
    .option("-l, --license", "Generate license file")
    .option("-c, --contribute", "Generate contributing file")
    .option("-C, --codeOfConduct", "Generate code_of_conduct.md file")
    .option("-r, --readme", "Generate readme file")
    .option("-R, --report", "Generate report.md file");

program.command("init <dir>").action((dir) => {
    const options = program.opts();
    init(options, dir);
});

program.parse(process.argv);
