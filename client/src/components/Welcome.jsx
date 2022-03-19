import './Welcome.scss'

const Welcome = () => {
   return ( 
      <header className="header text-light px-4 px-sm-5 pb-5">
         <h1 className="text-header mt-5 mb-0">Send Crypto<br />across the World!</h1>
         <p className="text-sub-header text-muted my-4">Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
         <button type="button" className="connect-btn btn btn-lg rounded-pill mt-4 text-light">Connect wallet</button>
      </header>
    );
}
 
export default Welcome;