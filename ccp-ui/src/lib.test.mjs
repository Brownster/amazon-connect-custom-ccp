import assert from 'assert';
import { spacesToCamel, valueToOption, genLogger } from './lib.js';

assert.equal(spacesToCamel('call disposition'), 'callDisposition');
assert.equal(spacesToCamel('Hello World'), 'helloWorld');
assert.deepStrictEqual(valueToOption('A'), { value: 'A', label: 'A' });

let calledArgs = null;
const origLog = console.log;
console.log = (...args) => {
  calledArgs = args;
};
const logger = genLogger('test');
logger.log('message');
console.log = origLog;
assert.deepStrictEqual(calledArgs, ['test', '-', 'message']);

console.log('All tests passed');
