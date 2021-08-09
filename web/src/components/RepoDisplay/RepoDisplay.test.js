import { render } from '@redwoodjs/testing'

import RepoDisplay from './RepoDisplay'

describe('RepoDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RepoDisplay />)
    }).not.toThrow()
  })
})
