import * as program from "commander";
import { LoggingService as Log } from './services/logging/logging.service';
import { Command } from "./commands/command";
import { NewProjectCommand } from "./commands/new-project/new-project.command";
import { HelpCommand } from "./commands/help/help.command";
import { NewProjectOptions } from "./models/command-options/new-project-options/new-project-options";
import { CommandOptions } from "./models/command-options/command-options";


export const main = function (...args: string[]): number {
    let cmd: Command;
    let opts: CommandOptions;
    Log.log(`
    __ _____  _    _   _  _ _ _   __  _  _  _  _ _ _ 
    \\ V / __|| |  | | / \\| | | | / _|| \\| |/ \\| | | |
     \\ /| _| | |_ | |( o ) V V | \\_ \\| \\\\ ( o ) V V |
     |_||___||___||___\\_/ \\_n_/  |__/|_|\\_|\\_/ \\_n_/ 
    `);
    program
        .version('0.1.0')
        .option('-n, --new [name]', 'Generate a new project')
        .option('-h, --help','Help')
        .parse(process.argv);
    
    if (program.new && program.new !== true) {
        const name: string = program.new;
        opts = new NewProjectOptions(name);
        cmd = new NewProjectCommand();
    } else {
        opts = <any>undefined;
        cmd = new HelpCommand();
    }
    cmd.run(opts);

    return 0;
}
