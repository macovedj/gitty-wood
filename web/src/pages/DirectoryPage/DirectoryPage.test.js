import { render } from '@redwoodjs/testing'

import DirectoryPage from './DirectoryPage'

describe('DirectoryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DirectoryPage />)
    }).not.toThrow()
  })
})
