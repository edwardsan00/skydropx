import { screen, render, fireEvent } from '@testing-library/react'
import { Rate } from '@/types/shipments'
import { CardRate } from '@/components/molecules/card-rate'
import { mockCardRate } from '@/components/molecules/card-rate/__mocks__/card-rate'
describe('components/molecules/card-rate', () => {
  it('Should render component', () => {
    const rate = mockCardRate[0] as Rate
    render(<CardRate rate={rate} />)
    expect(screen.getByLabelText('rate')).toBeInTheDocument()
  })
  it('Should render component and its selected', () => {
    const handleClick = jest.fn()
    const rate = mockCardRate[1] as Rate
    render(<CardRate onChange={handleClick} bestOption rate={rate} />)
    expect(screen.getByLabelText('best-option')).toBeInTheDocument()
    const inputRadio = screen.getByRole('radio') as HTMLInputElement
    fireEvent.change(inputRadio, { target: { value: rate.id, checked: true } })
    expect(inputRadio.value).toEqual(rate.id)
    expect(inputRadio).toBeChecked()
  })
})
