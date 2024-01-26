import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

const Calculator = () => {
  return (
    <h1>Calculator</h1>
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
})
