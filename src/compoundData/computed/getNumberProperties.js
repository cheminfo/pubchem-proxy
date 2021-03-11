import { getComputedDataSection } from './getComputedDataSection.js';
import { getComputedPropertySection } from './getComputedPropertySection.js';

export function getNumberProperties(data, sectionName) {
  let output = {
    value: null,
    label: null,
    reference: {
      description: null,
    },
  };

  try {
    const computationalData = getComputedDataSection(data);
    let section = getComputedPropertySection(
      computationalData[0],
      sectionName,
    )[0];

    output.value = section.Value.Number[0];
    output.label = sectionName;
    output.reference.description = section.Reference[0];
    if (section.Value.Unit) {
      output.units = section.Value.Unit;
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}

  return output;
}
