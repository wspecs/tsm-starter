import * as lib from '../lib/utils';
import { expect } from 'chai';

describe('util file', () => {
  beforeEach(() => {
    // Add before each test
  });

  it('can add two numbers', () => {
    expect(lib.add(5, 2)).to.equal(7);
  });
});
