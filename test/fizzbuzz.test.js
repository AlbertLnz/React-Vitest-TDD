import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter provided must be a number!!')
  if (Number.isNaN(number)) throw new Error('Parameter provided must be a number!!')

  if (number % 3 === 0) return 'fizz'
  if (number === 5) return 'buzz'

  return number
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
    expect(fizzbuzz(60)).toBe('fizz')
  })

  it('Should return 4 if number provided is 4', () => { // test nº9 --> UNNECESSARY TEST
    expect(fizzbuzz(4)).toBe(4)
  })

  it("Should return 'buzz' if number provided is 5", () => { // test nº10
    expect(fizzbuzz(5)).toBe('buzz')
  })
})
