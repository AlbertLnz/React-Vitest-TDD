import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Calculator = () => {
  return (
    <div>
      <h2>Calculator</h2>
      {numbers.map((number) => (
        <span key={number}>{number}</span>
      ))}
    </div>
  )
}

describe('Calculator', () => {
  afterEach(cleanup)

  it('Should render', () => { // Test nº1
    render(<Calculator />)
  })

  it('Should render title correctly', () => { // Test nº2
    render(<Calculator />) // <-- check component if it's rendered
    screen.getByText('Calculator') // <-- check if component has title name called 'Calculator'
  })

  it('Should render title correctly with <h2> tag', () => { // Test nº3
    render(<Calculator />)
    const titleElement = screen.getByText('Calculator')

    expect(titleElement.tagName).toBe('H2')
  })

  it('Should render numbers [0-9]', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })
})
