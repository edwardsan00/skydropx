import { render, fireEvent } from '@testing-library/react'
import { Input } from '@/components/atoms/input'

describe('components/atoms/input', () => {
  it('Should render component', () => {
    const input = render(<Input name="Test" />)
    expect(input).not.toBeNull()
  })
  it('Should dispatch event onChange', () => {
    const { getByLabelText } = render(<Input fullWidth />)
    const input = getByLabelText('input') as HTMLSelectElement
    expect(input.value).toEqual('')
    fireEvent.change(input, { target: { value: 'newValue' } })
    expect(input.value).toEqual('newValue')
  })
})
