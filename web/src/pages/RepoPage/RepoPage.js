import { ethers } from 'ethers'
import { Form, TextField, Submit, Label } from '@redwoodjs/forms'
import { useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import RepoCell from 'src/components/RepoCell'
import Token from 'src/artifacts/contracts/Token.sol/Token.json'

const tokenAddress = '0xE01daAB23f9Ec10FB2aBe1EF8Ff54Ed50f1029e9'

const RepoPage = ({ repoName }) => {
  const [balance, setBalance] = useState('')
  const [owners, setOwners] = useState([])

  async function getOwners() {
    console.log('FUNCTION IS GETTING CALLED')
    if (typeof window.ethereum !== 'undefined') {
      console.log('IN IF CLAUSE')
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log('LIST OF PROVIDERS')
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
      console.log('CONTRACT DEFINED')
      const receivedOwners = await contract.getOwners(repoName)
      console.log('OWNERS EXIST')
      setOwners(receivedOwners)
      console.log('OWNerS SET')
      console.log({ owners })
      return owners
    }
    console.log('OUT OF IF CLAUSE')
  }

  async function requestAccount() {
    const [account] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    // setAccount(account || 'No account connected')
  }

  // useEffect(() => getOwners(), [])

  async function mintShares() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer)
      await contract.mint(1000000, repoName)
    }
  }

  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
      const balance = await contract.balanceOf(account, repoName)
      console.log('Balance: ', balance.toString())
      if (balance) {
        setBalance(balance.toString())
      }
      return balance
    }
  }

  async function sendShares({ Receiver, Amount }) {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer)
      const transation = await contract.transfer(
        Receiver,
        Number(Amount),
        repoName
      )
      await transation.wait()
      console.log(`${Amount} Shares successfully sent to ${Receiver}`)
    }
  }
  return (
    <>
      {owners.length === 0 ? (
        <>
          {/* <>
            Shares have not been minted... no owners exist. Connect wallet
            before minting
          </> */}
          {/* <button onClick={mintShares}>Mint Shares</button> */}
        </>
      ) : (
        <>
          <div>Owners:</div>
          {owners.map((owner) => (
            <div key={owner}>{owner}</div>
          ))}
          <br></br>
        </>
      )}
      <div>Are you an owner? Send funds to a colleague below</div>
      <Form onSubmit={sendShares}>
        <Label name="Receiver" />
        <TextField name="Receiver"></TextField>
        <Label name="Amount" />
        <TextField name="Amount" />
        {/* <Submit>Send Shares</Submit> */}
      </Form>
      <RepoCell name={repoName} />
      <button onClick={getBalance}>Get Balance</button>
      <button onClick={getOwners}>Get Owners</button>
    </>
  )
}

export default RepoPage
