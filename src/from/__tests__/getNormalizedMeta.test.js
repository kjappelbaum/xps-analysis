import { getNormalizedMeta } from '../getNormalizedMeta';

import meta from './meta.json';

test('appendCheminfoMeta', () => {
  console.log(meta);
  const normalized = getNormalizedMeta(meta);
  console.log({ normalized });
});
