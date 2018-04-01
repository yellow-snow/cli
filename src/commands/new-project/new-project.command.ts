import { Command } from "../command";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { LoggingService as Log } from '../../services/logging/logging.service';
import { NewProjectOptions } from '../../models/command-options/new-project-options/new-project-options';

export class NewProjectCommand extends Command {
    public async beforeScript(opts:NewProjectOptions): Promise<void> {
        return new Promise<void>(
            (resolve:Function)=>{
                Log.log(`Generating a new project "${opts.name}"`);
                resolve();
            }
        );
    }
    public async mainScript(opts:NewProjectOptions): Promise<void> {
        return new Promise<void>(
            (resolve:Function)=>{
                console.log("started mainScript");
                setTimeout(()=>{                
                    console.log("completed mainScript");
                    resolve();
                },1000);
            }
        );
    }
    public async afterScript(opts:NewProjectOptions): Promise<void> {
        return new Promise<void>(
            (resolve:Function)=>{
                console.log(`Finished in ${this.time}ms`);
            }
        );
    }
    protected beforeScriptError(err:Error): never {
        Log.error("Could not start new project");
        throw err;
    }
    protected mainScriptError(err:Error): never {
        Log.error("Could not start complete project");
        throw err;
    }
    protected afterScriptError(err:Error): never {
        Log.error("Could not start finish project");
        throw err;
    }
}