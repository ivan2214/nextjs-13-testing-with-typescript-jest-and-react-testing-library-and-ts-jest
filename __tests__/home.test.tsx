import HomeTest from '@/app/HomeTest'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

describe('Calculator', () => {
  it('renders a calculator', () => {
    render(<HomeTest />)
    // check if all components are rendered
    expect(screen.getByTestId('result')).toBeInTheDocument()
    expect(screen.getByTestId('num1')).toBeInTheDocument()
    expect(screen.getByTestId('num2')).toBeInTheDocument()
    expect(screen.getByTestId('add')).toBeInTheDocument()
    expect(screen.getByTestId('subtract')).toBeInTheDocument()
    expect(screen.getByTestId('multiply')).toBeInTheDocument()
    expect(screen.getByTestId('divide')).toBeInTheDocument()
  })
})
