import * as lib from '../lib/utils';
import { expect } from 'chai';

describe('word parser', () => {
  beforeEach(() => {
  });

  it('initializes', () => {
    expect(lib.DEFAULT_CONFIG).to.equal('');
  });

  it('validates config', () => {
    const config = {
      destination: '/dest',
      name: 'name',
      repository: 'wspecs'
    } as lib.TsmConfig;
    expect(lib.validateConfig(config)).to.equal(true);
  });
});
