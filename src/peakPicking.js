import { gsd } from 'ml-gsd';

export function peakPicking(spectrum, options = {}) {
  const { gsd: gsdOptions = { realTopDetection: true } } = options;
  let data = {
    x: spectrum.variables.x.data,
    y: spectrum.variables.y.data,
  };
  let peaks = gsd(data, gsdOptions);

  return peaks;
}
