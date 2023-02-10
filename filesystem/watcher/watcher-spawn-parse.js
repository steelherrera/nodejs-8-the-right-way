'use strict';
import { watch } from "fs";
import { spawn } from "child_process";
const filename = process.argv[2];

if (!filename) {
    throw Error('A file to watch must be specified!');
}

watch(filename, () => {
    const ls = spawn('ls', ['-l', '-h', filename]);
    let output = '';

    ls.stdout.on('data', chunk => output += chunk);

    ls.on('close', () => {
        const parts = output.split(/\s+/);
        console.log([parts[0], parts[4], parts[8]]);
    });
});
console.log(`Now watching ${filename} for changes...`);