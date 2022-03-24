import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { FormBudget } from 'components/organisms/form-budget'

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
  it('Should submit complete data without erros', async () => {
    const expectData = {
      from: '10',
      to: '20',
      weight: '30',
      length: '40',
      width: '50',
      height: '60',
    }
    const handleSubmit = jest.fn()
    render(<FormBudget onHandleSubmitData={handleSubmit} />)
    fireEvent.change(screen.getByLabelText('from'), {
      target: { value: expectData.from },
    })
    fireEvent.change(screen.getByLabelText('to'), {
      target: { value: expectData.to },
    })
    fireEvent.change(screen.getByLabelText('weight'), {
      target: { value: expectData.weight },
    })
    fireEvent.change(screen.getByLabelText('length'), {
      target: { value: expectData.length },
    })
    fireEvent.change(screen.getByLabelText('width'), {
      target: { value: expectData.width },
    })
    fireEvent.change(screen.getByLabelText('height'), {
      target: { value: expectData.height },
    })
    fireEvent.submit(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByLabelText('disclaimer')).not.toHaveClass('underline')
      expect(handleSubmit).toHaveBeenCalledWith(expectData)
    })
  })
})
