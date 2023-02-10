'use strict';
import { writeFile } from 'fs';
writeFile('target.txt', 'hello world', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('File saved!');
});