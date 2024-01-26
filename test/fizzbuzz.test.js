import { describe, expect, it } from 'vitest'

const fizzbuzz = () => {

}

describe('fizzbuzz', () => {
  it('Should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('Should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })
})
