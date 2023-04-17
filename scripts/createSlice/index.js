const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Enter layer name ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('Enter slice name');
}

createTemplate(layer, sliceName);
