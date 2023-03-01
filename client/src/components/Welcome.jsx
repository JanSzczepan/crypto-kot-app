import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

import './Welcome.scss'

const Welcome = () => {
   const { connectWallet, currentAccounts } = useContext(TransactionContext)

   return (
      <header className='header text-light px-4 px-sm-5 pb-5'>
         <h1 className='text-header mt-5 mb-0'>
            Send Crypto
            <br />
            across the World!
         </h1>
         <p className='text-sub-header text-muted my-4'>
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            CryptoKot.
         </p>
         {!currentAccounts && (
            <button
               type='button'
               className='connect-btn btn btn-lg rounded-pill mt-4 text-light mb-n4'
               onClick={connectWallet}
            >
               Connect wallet
            </button>
         )}
      </header>
   )
}

export default Welcome
