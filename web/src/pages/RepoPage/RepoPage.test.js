import { render } from '@redwoodjs/testing'

import RepoPage from './RepoPage'

describe('RepoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RepoPage />)
    }).not.toThrow()
  })
})
