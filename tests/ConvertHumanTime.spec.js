import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertHumanTime';

describe('ConvertToHumanTime', () => {
    it('Should receive 0ms and convert to 0:00', () => {
        expect(convertToHumanTime(0)).to.be.equal('0:00')
    });

    it('Should receive 1000ms and convert to 0:01', () => {
        expect(convertToHumanTime(1000)).to.be.equal('0:01')
    });

    it('Should receive 11000ms and convert to 0:11', () => {
        expect(convertToHumanTime(11000)).to.be.equal('0:11')
    });

    it('Should receive 60000ms and convert to 1:00', () => {
        expect(convertToHumanTime(60000)).to.be.equal('1:00')
    });
});
