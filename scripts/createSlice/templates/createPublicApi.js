const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const publicApiTemplate = require('./publicApiTemplate');

module.exports = async (layer, sliceName) => {
    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            publicApiTemplate(sliceName)
        );
    } catch (e) {
        console.log('Couldn\'t create PUBLIC API', e);
    }
};
