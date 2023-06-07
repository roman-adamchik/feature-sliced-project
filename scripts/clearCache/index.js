const fs = require('fs');
const { join: joinPath } = require('path');

const cacheDir = joinPath(__dirname, '..', '..', 'node_modules', '.cache');
fs.rmSync(cacheDir, { recursive: true, force: true });