import { CommandOptions } from "../command-options";

export class NewProjectOptions extends CommandOptions{
    public name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }
}