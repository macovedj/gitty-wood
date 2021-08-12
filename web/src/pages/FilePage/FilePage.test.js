import { render } from '@redwoodjs/testing'

import FilePage from './FilePage'

describe('FilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FilePage />)
    }).not.toThrow()
  })
})
