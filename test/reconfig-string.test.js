import { describe, expect, it } from 'vitest'

const reconfigString = (from) => {
  if (from === undefined) throw new Error("'from' param is required")
}

describe('reconfigString', () => {
  it('Should be a function', () => { // 1st test
    expect(reconfigString).toBeTypeOf('function')
  })

  it('Should throw if first param is missing', () => { // 2nd test
    expect(() => reconfigString()).toThrow()
  })
})
