/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Footer from '../Footer';

describe('Footer', () => {
  it('renders footer', () => {
    render(<Footer />)

  })
})