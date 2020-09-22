import { readFileSync } from 'fs';
import { join } from 'path';

import { fromVamas, toJcamp } from '..';

describe('fromVamas', () => {
  const text = readFileSync(
    join(__dirname, '../../testFiles/multiplex.vms'),
    'utf8',
  );

  it('should return 42', () => {
    let result = fromVamas(text);

    let jcamp = toJcamp(result);
    console.log(jcamp);
  });
});
