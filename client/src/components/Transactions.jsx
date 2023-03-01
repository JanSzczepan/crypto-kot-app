import './Transactions.scss'

import { useState } from 'react'

import Loader from './Loader'
import SendCrypto from './SendCrypto'
import History from './History'

const Transactions = () => {
   const [changeComponent, setChangeComponent] = useState('SendCrypto')

   const handleOnClick = (component) => {
      if (component === changeComponent) return
      setChangeComponent(component)
   }

   let content
   if (changeComponent === 'SendCrypto') content = <SendCrypto />
   else if (changeComponent === 'History')
      content = <History setChangeComponent={setChangeComponent} />

   return (
      <main className='main px-4 px-sm-5 py-5'>
         <ul className='nav mb-3'>
            <li className='nav-item'>
               <button
                  className={`btn main-btn ${
                     changeComponent === 'SendCrypto'
                        ? 'text-white text-decoration-underline'
                        : 'text-muted'
                  }`}
                  type='button'
                  onClick={() => handleOnClick('SendCrypto')}
               >
                  Send Crypto
               </button>
            </li>
            <li className='nav-item'>
               <button
                  className={`btn main-btn ${
                     changeComponent === 'History'
                        ? 'text-white text-decoration-underline'
                        : 'text-muted'
                  }`}
                  type='button'
                  onClick={() => handleOnClick('History')}
               >
                  History
               </button>
            </li>
         </ul>
         {content}
      </main>
   )
}

export default Transactions
