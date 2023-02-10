'use strict';
import { watch } from "fs";
import { spawn } from "child_process";
const filename = process.argv[2];

if (!filename) {
    throw Error('A file to watch must be specified!');
}

watch(filename, () => {
    const ls = spawn('ls', ['-l', '-h', filename]);
    ls.stdout.pipe(process.stdout);
});
console.log(`Now watching ${filename} for changes...`);