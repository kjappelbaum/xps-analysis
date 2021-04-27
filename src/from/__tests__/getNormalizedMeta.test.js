import { getNormalizedMeta } from '../getNormalizedMeta';

import meta from './meta.json';

test('appendCheminfoMeta', () => {
  const normalized = getNormalizedMeta(meta);
  console.log({ normalized });
});
