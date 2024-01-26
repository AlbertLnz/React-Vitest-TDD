import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']
export const equalSign = '='

export const Calculator = () => {
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
