import { EthContext } from 'src/context/EthContext'

const EthLayout = ({ children }) => (
  <EthContext.Consumer>
    {({ ethAccount, requestAccount }) => (
      <>
        {ethAccount === 'No account connected' ? (
          <>
            <>{`${ethAccount}, click below to connect to Metamask`}</>
            <button onClick={requestAccount}>Connect</button>
          </>
        ) : (
          <div>{`Connected to ${ethAccount}`}</div>
        )}
        {children}
      </>
    )}
  </EthContext.Consumer>
)

export default EthLayout
