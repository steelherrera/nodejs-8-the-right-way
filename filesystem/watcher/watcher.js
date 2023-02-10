'use strict';
import { watch } from 'fs';
watch('target.txt', () => console.log('File changed!'));
console.log('Now watching target.txt for changes...');