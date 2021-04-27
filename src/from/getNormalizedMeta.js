export function getNormalizedMeta(meta) {
  const normalized = {};
  console.log(meta);
  if (meta['species label']) {
    normalized.speciesLabel = meta['species label'];
  }
  return normalized;
}
