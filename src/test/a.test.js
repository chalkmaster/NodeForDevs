const mocha = require('mocha');
const expect = require('chai').expect;

describe('a teste', () => {
  before(() => {
    console.log('init');
  });

  after(() => {
    console.log('finish');
  });

  describe('testing', () => {
    it('hello man', () =>{
      expect(true).to.be.true;
    });
  });
});