import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'

const Calculator = () => {
  return (
    <h2>Calculator</h2>
  )
}

describe('Calculator', () => {
  afterEach(cleanup)

  it('Should render', () => {
    render(<Calculator />)
  })

  it('Should render title correctly', () => {
    render(<Calculator />) // <-- check component if it's rendered
    screen.getByText('Calculator') // <-- check if component has title name called 'Calculator'
  })

  it('Should render title correctly with <h2> tag', () => {
    render(<Calculator />)
    const titleElement = screen.getByText('Calculator')

    expect(titleElement.tagName).toBe('H2')
  })
})
