import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter provided must be a number!!')
  if (Number.isNaN(number)) throw new Error('Parameter provided must be a number!!')

  const multiples = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object.entries(multiples).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })

  return output === '' ? number : output
}

describe('fizzbuzz', () => {
  it('Should be a function', () => { // test nº1
    expect(typeof fizzbuzz).toBe('function')
  })

  it('Should throw if not number is provided as parameter', () => { // test nº2
    expect(() => fizzbuzz()).toThrow()
  })

  it('Should throw a specific error message if not number is provided as parameter', () => { // test nº3
    expect(() => fizzbuzz()).toThrow('Parameter provided must be a number!!')
  })

  it('Should be a number param', () => { // test nº4
    expect(() => fizzbuzz(NaN)).toThrow('Parameter provided must be a number!!')
  })

  it('Should return 1 if number provided is 1', () => { // test nº5
    expect(fizzbuzz(1)).toBe(1)
  })

  it('Should return 2 if number provided is 2', () => { // test nº6
    expect(fizzbuzz(2)).toBe(2)
  })

  it("Should return 'fizz' if number provided is 3", () => { // test nº7
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it("Should return 'fizz' if number provided is multiple of 3", () => { // test nº8
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(57)).toBe('fizz')
  })

  it('Should return 4 if number provided is 4', () => { // test nº9 --> UNNECESSARY TEST
    expect(fizzbuzz(4)).toBe(4)
  })

  it("Should return 'buzz' if number provided is 5", () => { // test nº10
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it("Should return 'buzz' if number provided is multiple of 5", () => { // test nº11
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(110)).toBe('buzz')
  })

  it("Should return 'fizzbuzz' if number number is multiple of 3 and 5 === multiple of 15", () => { // test nº12
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
    expect(fizzbuzz(105)).toBe('fizzbuzz')
  })
})
