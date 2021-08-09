import { render } from '@redwoodjs/testing'

import ReposPage from './ReposPage'

describe('ReposPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReposPage />)
    }).not.toThrow()
  })
})
