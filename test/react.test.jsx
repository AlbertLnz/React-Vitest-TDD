import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { useState } from 'react'
import { evaluate } from 'mathjs'

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
  const [value, setValue] = useState('')

  const handleElement = (element) => {
    setValue(value.concat(element))
  }

  return (
    <section>
      <h2>Calculator</h2>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map(number => <button onClick={() => handleElement(number)} key={number}>{number}</button>)}
          </div>
        ))}
      </div>
      {
        operations.map(operation => (
          <button key={operation} onClick={() => handleElement(operation)}>{operation}</button>
        ))
      }
      <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
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

  it('Should user input after clicking a number', () => { // Test nº9
    render(<Calculator />)

    const numberOne = screen.getByText('1')
    fireEvent.click(numberOne)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('Should user input after clicking a number several numbers', () => { // Test nº10
    render(<Calculator />)

    const numberOne = screen.getByText('1')
    fireEvent.click(numberOne)

    const numberTwo = screen.getByText('2')
    fireEvent.click(numberTwo)

    const numberThree = screen.getByText('3')
    fireEvent.click(numberThree)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('Should show user input after clicking numbers and operations', () => { // Test nº11
    render(<Calculator />)

    const numberOne = screen.getByText('1')
    fireEvent.click(numberOne)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(numberOne)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })

  it('Should calculate based on user input and show the result', () => { // Test nº12
    render(<Calculator />)

    const numberOne = screen.getByText('1')
    fireEvent.click(numberOne)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(numberOne)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })
})
