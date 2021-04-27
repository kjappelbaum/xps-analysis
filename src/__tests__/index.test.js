import { readFileSync } from 'fs';
import { join } from 'path';

import { fromVamas, toJcamp } from '..';

describe('fromVamas', () => {
  it('VAMAS multiplex', () => {
    const text = readFileSync(
      join(__dirname, '../../testFiles/multiplex.vms'),
      'utf8',
    );
    let result = fromVamas(text);

    let jcamp = toJcamp(result);
    expect(jcamp.length).toBeGreaterThan(35000);
    expect(jcamp.length).toBeLessThan(40000);
  });

  it('VAMAS assigned', () => {
    const text = readFileSync(
      join(__dirname, '../../testFiles/assigned.vms'),
      'utf8',
    );
    let result = fromVamas(text);
    let jcamp = toJcamp(result);
    expect(jcamp.indexOf('CASA')).toBeGreaterThan(30000);
    expect(jcamp.length).toBeGreaterThan(579000);
    expect(jcamp.length).toBeLessThan(600000);
  });
});
