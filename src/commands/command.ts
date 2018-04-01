import { Observable } from 'rxjs/Observable';
import { CommandOptions } from 'commander';

export abstract class Command {
    private start: Date;
    constructor() {
        this.start = new Date();
    }
    public async run(opts: CommandOptions): Promise<void> {
        try {
            await this.beforeScript(opts);
        } catch(err) {
            this.beforeScriptError(err);
        }
        try {
            await this.mainScript(opts);
        }
        catch(err) {
            this.afterScriptError(err);
        }
        try {
            await this.afterScript(opts);
        }
        catch(err) {
            this.afterScriptError(err);
        }
    }
    protected abstract async beforeScript(opts: any): Promise<void>;
    protected abstract async mainScript(opts: any): Promise<void>;
    protected abstract async afterScript(opts: any): Promise<void>;
    protected abstract beforeScriptError(err:Error): never;
    protected abstract mainScriptError(err:Error): never;
    protected abstract afterScriptError(err:Error): never;
    protected get time(): number {
        return (new Date()).getTime() - this.start.getTime();
    }
}