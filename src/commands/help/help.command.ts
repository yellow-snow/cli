import { Command } from "../command";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { LoggingService as Log } from '../../services/logging/logging.service'

export class HelpCommand extends Command {
    protected beforeScript(opts: any): Promise<void> {
        return Promise.resolve();
    }
    protected mainScript(opts: any): Promise<void> {
        Log.info("A REST oriented TypeScript framework.");
        Log.info();
        Log.info("Available commands:");
        [
            {short:"-n",long:"--new",description:"Generate a new project"},
            {short:"-h",long:"--help",description:"Help"}
        ].forEach((cmd)=>{
            Log.info("  %s, %s",cmd.short,cmd.long);
            Log.info("  %s",cmd.description);
            Log.info();
        });
        Log.info("@author: John A. Fedoruk");
        return Promise.resolve();
    }
    protected afterScript(opts: any): Promise<void> {
        return Promise.resolve();
    }
    protected beforeScriptError(err: Error): never {
        throw err;
    }
    protected mainScriptError(err: Error): never {
        throw err;
    }
    protected afterScriptError(err: Error): never {
        throw err;
    }
}