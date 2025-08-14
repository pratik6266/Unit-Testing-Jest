import { describe, it, expect } from 'vitest';
import { fizzbuzz, max } from '../src/info';

describe('max', () => {
  it('returns the maximum of two numbers', () => {
    const a: number = 5;
    const b: number = 10;

    const result: number = max(a, b);
    expect(result).toBe(10);
  })
})

describe('fizzbuzz', () => {
  it('returns "fizz" for multiples of 3', () => {
    const result: string = fizzbuzz(3);
    expect(result).toBe('fizz');
  });

  it('returns "buzz" for multiples of 5', () => {
    const result: string = fizzbuzz(5);
    expect(result).toBe('buzz');
  });

  it('returns "fizzbuzz" for multiples of both 3 and 5', () => {
    const result: string = fizzbuzz(15);
    expect(result).toBe('fizzbuzz');
  });

  it('returns the number as a string if not a multiple of 3 or 5', () => {
    const result: string = fizzbuzz(7);
    expect(result).toBe('7');
  });
})