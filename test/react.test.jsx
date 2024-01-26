import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

const operations = ['+', '-', '*', '/']
const equalSign = '='

const Calculator = () => {
  return (
    <section>
      <h2>Calculator</h2>
      <input />
      <div role='grid'>
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map(number => <span key={number}>{number}</span>)}
          </div>
        ))}
      </div>
      {
        operations.map(operation => (
          <span key={operation}>{operation}</span>
        ))
      }
      <span>{equalSign}</span>
    </section>
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

  it('Should render numbers [0-9]', () => { // Test nº4
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('Should render 4 rows', () => { // Test nº5
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('Should render operations', () => { // Test nº6
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('Should render equal sign', () => { // Test nº7
    render(<Calculator />)

    screen.getByText('=')
  })

  it('Should render an input', () => { // Test nº8
    render(<Calculator />)

    screen.getByRole('textbox')
  })
})
