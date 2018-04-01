import { Command } from "../command";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { LoggingService as Log } from '../../services/logging/logging.service';
import { NewProjectOptions } from '../../models/command-options/new-project-options/new-project-options';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';

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
            (resolve:Function, reject: Function)=>{
                const indexPath: string = path.join(
                    __dirname,"../","../","../","files","project","src","index.js"
                );
                fs.readFile(indexPath,"utf8",(err:any,data)=>{
                    if(err) {
                        return reject(err);
                    }
                    const template = handlebars.compile(data);
                    const rendered: string = template({project:{name:opts.name}});
                    const projectPath: string = path.join(
                        process.cwd(),opts.name
                    );
                    fs.mkdir(projectPath,(err:any)=>{
                        if(err) {
                            return reject(err);
                        }
                        const projectIndex: string = path.join(
                            projectPath, "index.js"
                        );
                        fs.writeFile(projectIndex,rendered,(err:any)=>{
                            if(err) {
                                return reject(err);
                            }
                            resolve();
                        });
                    });
                });
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