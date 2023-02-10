'use strict';
import { readFile } from 'fs';
readFile('target.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});