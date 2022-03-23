import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from 'components/button'

describe('src/containers/household-claim/components/checkbox', () => {
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
