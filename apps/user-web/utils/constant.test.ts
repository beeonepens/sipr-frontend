import { expect, test } from 'vitest';
import { isPublicUrl } from './constant';

test('return url status if url is public', () => {
  const url = '/register';
  const urlStatus = isPublicUrl(url);

  expect(urlStatus).toBeTruthy();
});

test('return url status if url is private', () => {
  const url = '/dashboard';
  const urlStatus = isPublicUrl(url);

  expect(urlStatus).toBeFalsy();
});
