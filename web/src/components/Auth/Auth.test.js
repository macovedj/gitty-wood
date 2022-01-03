import { render } from '@redwoodjs/testing'

import Auth from './Auth'

describe('Auth', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Auth />)
    }).not.toThrow()
  })
})
