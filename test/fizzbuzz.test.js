import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error()
}

describe('fizzbuzz', () => {
  it('Should be a function', () => { // test nº1
    expect(typeof fizzbuzz).toBe('function')
  })

  it('Should throw if not number is provided as parameter', () => { // test nº2
    expect(() => fizzbuzz()).toThrow()
  })
})
