'use strict';
import { watch } from 'fs';
import { createServer } from 'net';
const {argv: { 2: filename } } = process;
console.log(filename);