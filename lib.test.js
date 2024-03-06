import { describe, test, expect } from 'vitest';
import { add } from './lib';


describe('test de la fonction add', () => {
  test('additionne correctement deux nombres', () => {
    expect(add(1, 2)).toBe(3);
    
    expect(add(5, 5)).toBe(10);
  });
});
