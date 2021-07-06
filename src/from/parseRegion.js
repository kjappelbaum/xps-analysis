const XPS_REGEX =
  /(?<element>[a-zA-Z]{0,3})\s(?<shell>[1-6])(?<angularMomentum>[a-z])/;
const AUGER_REGEX = /(?<element>[a-zA-Z]{0,3})\s(?<transition>[a-zA-Z]{0,3})/;

export function parseRegion(string) {
  const result = {
    name: string.trim(),
    orbital: { element: null, shell: null, angularMomentum: null },
    auger: { element: null, transition: null },
  };
  let xpsMatches = XPS_REGEX.exec(string);
  let augerMatches = AUGER_REGEX.exec(string);
  if (xpsMatches && xpsMatches.groups.shell) {
    result.orbital.element = xpsMatches.groups.element;
    result.orbital.shell = parseInt(xpsMatches.groups.shell, 10);
    result.orbital.angularMomentum = xpsMatches.groups.angularMomentum;
  }
  if (augerMatches && augerMatches.groups.transition) {
    result.auger.element = augerMatches.groups.element;
    result.auger.transition = augerMatches.groups.transition;
  }

  return result;
}
