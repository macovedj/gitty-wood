import { createContext, useState } from 'react'

export const EthContext = createContext('No Account has been linked')

export default ({ children }) => {
  const [ethAccount, setAccount] = useState('No account connected')
  async function requestAccount() {
    const [account] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    setAccount(account || 'No account connected')
  }
  // requestAccount()
  return (
    <EthContext.Provider value={{ ethAccount, requestAccount }}>
      {children}
    </EthContext.Provider>
  )
}
