import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import bootstrap from 'bootstrap'

import './Transactions.scss'
import { useEffect } from 'react'

const Transactions = () => {
   useEffect(() => {
      const tooltips = document.querySelectorAll('.tt')
      tooltips.forEach(t => {
         new bootstrap.Tooltip(t)
      })
    }, [])

   return ( 
      <main className="px-4 px-sm-5 py-5">
         <ul className="nav mb-3">
            <li className="nav-item">
               <a className="nav-link text-light text-decoration-underline" aria-current="page" href="#">Send Crypto</a>
            </li>
            <li className="nav-item">
               <a className="nav-link text-muted" href="#">History</a>
            </li>
         </ul>
         <form action="/" className="transaction-form px-4 py-5">
            <div className="crypto-card py-3 px-4 d-flex flex-column justify-content-between text-light">
               <div className="d-flex justify-content-between">
                  <div className="eth-symbol-container mb-2">
                     <FontAwesomeIcon className="eth-icon" icon={faEthereum} />
                  </div>
                  <div className="i-symbol-container tt" data-bs-placement="top" title="This is Ethereum card with your address">
                     <FontAwesomeIcon className="i-icon" icon={faInfo} />
                  </div>
               </div>
               <div className="eth-card-text">
                  <p className="address-text mb-1">#dh2jd9asj2</p>
                  <h3 className="eth-title m-0">Ethereum</h3>
               </div>
            </div>
            <div className="inputs-container">
               <input className="transaction-input form-control mb-3 text-light" type="text" placeholder="Address To" aria-label="default input example" />
               <input className="transaction-input form-control mb-3 text-light" type="text" placeholder="Amount (ETH)" aria-label="default input example" />
               <input className="transaction-input form-control mb-3 text-light" type="text" placeholder="Keyword (Gif)" aria-label="default input example" />
               <input className="transaction-input form-control mb-3 text-light" type="text" placeholder="Enter Message" aria-label="default input example" />
               <button type="submit" className="transaction-btn btn btn-light btn-lg w-100 rounded-pill">Send Now</button>
            </div>
         </form>
      </main>
    );
}
 
export default Transactions;