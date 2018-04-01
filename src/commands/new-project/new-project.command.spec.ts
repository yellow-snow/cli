import * as chai from "chai";
import { Command } from "../command";
import { NewProjectCommand } from "./new-project.command";

const expect = chai.expect;

let command: Command;

describe("NewProject", () => {
    beforeEach(() => {
        command = new NewProjectCommand();
    });
    it('should instantiate', () => {
        expect(command).not.to.be.undefined;
    });
});