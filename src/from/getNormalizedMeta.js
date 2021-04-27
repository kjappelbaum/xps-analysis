export function getNormalizedMeta(meta = {}) {
  const normalized = {};
  normalized.speciesLabel = meta['species label'];

  const increment = meta['abscissa increment'];
  normalized.from = meta['abscissa start'];
  normalized.to =
    meta['abscissa start'] + increment * (meta.nbOrdinateValues - 1);

  normalized.abscisseLabel = meta['abscissa label'];
  normalized.analyserMode = meta['analyser mode'];

  /*
'analyser mode': 'FAT',
        'analyser pass energy or retard ratio or mass resolution': 40,
        'magnification of analyser transfer lens': 1e+37,
        'analyser work function or acceptance energy of atom or ion': -4.5,
        'target bias': 1e+37,
        'analysis width x': 1e+37,
        'analysis width y': 1e+37,
        'analyser axis take off polar angle': 1e+37,
        'analyser axis take off azimuth': 1e+37,
        'species label': 'W',
        'transition or charge state label': '4f',
        'charge of detected particle': -1,
        'abscissa label': 'Kinetic energy',
        'abscissa units': 'eV',
        'abscissa start': 1441.715,
        'abscissa increment': 0.15,
        'number of corresponding variables': 2,
        'signal mode': 'pulse counting',
        'signal collection time': 0.44776,
        'number of scans to compile this block': 6,
        'signal time correction': 0,
        'sample normal polar angle of tilt': 1e+37,
        'sample normal tilt azimuth': 1e+37,
        'sample rotation angle': 1e+37,
        'number of additional numerical parameters': 3,
        additionalNumericalParameters: [
          { label: 'ESCAPE DEPTH TYPE', unit: 'd', value: '1' },
          { label: 'MFP Exponent', unit: 'd', value: '0' },
          { label: 'PROPAGATION_CONVERGED', unit: 'd', value: '1' }
        ],
        nbOrdinateValues: 268
      }
*/

  return normalized;
}
