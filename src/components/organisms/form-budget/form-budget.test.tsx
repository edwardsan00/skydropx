import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { FormBudget } from '@/components/organisms/form-budget'

describe('components/organisms/form-budget', () => {
  it('Should be render form with complete inputs', () => {
    const handleSubmit = jest.fn()
    render(<FormBudget onHandleSubmitData={handleSubmit} />)
    expect(screen.getByLabelText('from')).toBeInTheDocument()
    expect(screen.getByLabelText('to')).toBeInTheDocument()
    expect(screen.getByLabelText('weight')).toBeInTheDocument()
    expect(screen.getByLabelText('length')).toBeInTheDocument()
    expect(screen.getByLabelText('width')).toBeInTheDocument()
    expect(screen.getByLabelText('height')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('Sholud be error disclaimer with empty inputs', async () => {
    const handleSubmit = jest.fn()
    render(<FormBudget onHandleSubmitData={handleSubmit} />)
    fireEvent.submit(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByLabelText('disclaimer')).toHaveClass('underline')
      expect(handleSubmit).not.toBeCalled()
    })
  })
})
