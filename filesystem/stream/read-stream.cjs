'use strict';
require('fs').createReadStream(process.argv[2])
    .on('data', chunk => process.stdout.write(chunk))
    .on('close', console.log)
    .on('error', err => process.stderr.write(`ERROR: ${err.message}\n`));