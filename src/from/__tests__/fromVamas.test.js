import { readFileSync } from 'fs';
import { join } from 'path';

import { fromVamas } from '../fromVamas';

describe('fromVamas', () => {
  const text = readFileSync(
    join(__dirname, '../../../testFiles/multiplex.vms'),
    'utf8',
  );

  it('multiplex', () => {
    let result = fromVamas(text);

    console.log(result.spectra[0]);
  });
});
