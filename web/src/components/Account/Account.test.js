import { render } from '@redwoodjs/testing'

import Account from './Account'

describe('Account', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Account />)
    }).not.toThrow()
  })
})
