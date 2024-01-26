import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter provided must be a number!!')
  if (Number.isNaN(number)) throw new Error('Parameter provided must be a number!!')
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
})
