import { ethers } from 'ethers'
import { Form, TextField, Submit, Label } from '@redwoodjs/forms'
import { useState, useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import RepoCell from 'src/components/RepoCell'
import Token from 'src/artifacts/contracts/Token.sol/Token.json'

const tokenAddress = '0xe3c9f1F4f0a054F64048f3f6301dbde4A7426c8b'

const RepoPage = ({ repoName }) => {
  const [balance, setBalance] = useState('')
  const [owners, setOwners] = useState([])

  async function getOwners() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
      const receivedOwners = await contract.getOwners(repoName)
      setOwners(receivedOwners)
      console.log({ owners })
      return owners
    }
  }

  async function requestAccount() {
    const [account] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    // setAccount(account || 'No account connected')
  }

  useEffect(() => getOwners(), [])

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
    console.log({ Receiver, Amount, repoName })
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
          <>
            Shares have not been minted... no owners exist. Connect wallet
            before minting
          </>
          <button onClick={mintShares}>Mint Shares</button>
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
      <div>Are you an owner? Send shares to a colleague below</div>
      <Form onSubmit={sendShares}>
        <Label name="Receiver" />
        <TextField name="Receiver"></TextField>
        <Label name="Amount" />
        <TextField name="Amount" />
        <Submit>Send Shares</Submit>
      </Form>
      <RepoCell name={repoName} />
      <button onClick={getBalance}>Get Balance</button>
      <button onClick={getOwners}>Get Owners</button>
    </>
  )
}

export default RepoPage
