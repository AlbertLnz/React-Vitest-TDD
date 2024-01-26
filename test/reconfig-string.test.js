import { describe, expect, it } from 'vitest'

const reconfigString = (from, to) => {
  // if (from === undefined) throw new Error("'from' param is required")
  if (typeof from !== 'string') throw new Error("'from' param must be a string")
  if (typeof to !== 'string') throw new Error("'to' param must be a string")
}

describe('reconfigString', () => {
  // it('Should be a function', () => { // 1st test -> REDUNDANT
  //   expect(reconfigString).toBeTypeOf('function')
  // })

  it('Should throw if first param is missing', () => { // 2nd test
    expect(() => reconfigString()).toThrow()
  })

  it('Should throw if first param is not a string', () => { // 3rd test
    expect(() => reconfigString(2)).toThrow()
  })

  it('Should throw if second param is not a string', () => { // 4th test
    expect(() => reconfigString('a')).toThrow()
  })
})
