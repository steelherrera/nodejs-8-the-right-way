'use strict';
import { watch } from 'fs';
const filename = process.argv[2];
if (!filename) {
    throw Error('A file to watch must be specified!');
}
watch(filename, () => console.log(`File ${filename} changed!`));
console.log(`Now watching ${filename} for changes...`);