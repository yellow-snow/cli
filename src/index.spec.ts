import * as chai from "chai";
import { main } from './index';

const expect = chai.expect;

describe('main', () => {
    it('should return 0', () => {
        expect(main()).to.equal(0);
    });
});
