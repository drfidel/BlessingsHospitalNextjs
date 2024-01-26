/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import NavigationBar from '../Navigation'

describe('Navigation Bar', () => {
  it('renders a navigation bar', () => {
    render(<NavigationBar />)

  })
})