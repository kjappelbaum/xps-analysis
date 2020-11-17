import { readFileSync } from 'fs';
import { join } from 'path';

import { fromVamas } from '../fromVamas';

describe('fromVamas', () => {
  const text = readFileSync(
    join(__dirname, '../../../testFiles/multiplex.vms'),
    'utf8',
  );

  it('multiplex', () => {
    let result = fromVamas(text).spectra[0];
    expect(Object.keys(result.variables)).toHaveLength(3);
    expect(Object.keys(result.meta)).toHaveLength(61);
  });
});
