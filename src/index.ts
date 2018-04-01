import * as program from "commander";
import { LoggingService as Log } from './services/logging/logging.service';

export const main = function (...args: string[]): number {
    Log.log(`
    __ _____  _    _   _    __  _  _  _  _ _ _ 
    \\ V / __|| |  | | / \\  / _|| \\| |/ \\| | | |
     \\ /| _| | |_ | |( o ) \\_ \\| \\\\ ( o ) V V |
     |_||___||___||___\\_/  |__/|_|\\_|\\_/ \\_n_/
    `);
    program
        .version('0.1.0')
        .option('-n, --new [name]', 'Generate a new project', 'hello-world')
        .parse(process.argv);
    if (program.new) Log.log(`Generating a new project "${program.new}"`);
    return 0;
}
