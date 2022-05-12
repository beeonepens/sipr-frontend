import { expect, test } from 'vitest';
import { getInitialName } from './formatText';

test('return initial name for user with 1 word name', () => {
  const name = 'Khoirul';
  const initialName = getInitialName(name);

  expect(initialName).toEqual('K');
});

test('return initial name for user with 2 word name', () => {
  const name = 'Khoirul Asfian';
  const initialName = getInitialName(name);

  expect(initialName).toEqual('KA');
});

test('return initial name for user with 3 word name', () => {
  const name = 'Muhammad Khoirul Asfian';
  const initialName = getInitialName(name);

  expect(initialName).toEqual('MA');
});
