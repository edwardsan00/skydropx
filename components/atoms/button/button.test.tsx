import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from 'components/atoms/button'

describe('components/atoms/button', () => {
  it('Should dispatch event onClick', () => {
    const handleClick = jest.fn()
    const { getByLabelText } = render(
      <Button onClick={handleClick}>Button</Button>
    )
    const button = getByLabelText('button')
    userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
