import test from 'ava';

import { Parser } from '../src/parser/index.js';

test('defaults the version to 2.9', t => {
  const parser = new Parser();
  t.is(parser.version, '2.9');
});
