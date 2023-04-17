const firstCharUpperCase = require('../firstCharUpperCase')

module.exports = (sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${sliceName}Schema`;
  return (
`import { ${componentName} } from './ui/${componentName}/${componentName}';
import { type ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';

export {
  ${componentName},
  type ${firstCharUpperCase(schemaName)},
};
`
);}