import { render, screen } from '@testing-library/react'
import { FullLoaderScreen } from '@/components/molecules/loader'

describe('components/molecules/loader', () => {
  it('Should render component', () => {
    render(<FullLoaderScreen withText />)
    expect(screen.getByText('Cargando...')).toBeInTheDocument()
  })
})
