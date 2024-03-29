import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import bootstrap from 'bootstrap/dist/js/bootstrap'

import './Transactions.scss'

import { useContext, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext'

import { shortenAddress } from '../utils/shortenAddress'
import Loader from './Loader'

const Input = ({ placeholder, name, type, value, handleChange }) => (
   <input
      placeholder={placeholder}
      type={type}
      step='0.0001'
      value={value}
      onChange={(e) => handleChange(e, name)}
      className='transaction-input form-control mb-3 text-light'
   />
)

const SendCrypto = () => {
   const {
      formData,
      handleChange,
      sendTransaction,
      currentAccounts,
      isLoading,
   } = useContext(TransactionContext)

   const handleSubmit = (e) => {
      const { addressTo, amount, keyword, message } = formData

      e.preventDefault()

      if (!addressTo || !amount || !keyword || !message) return

      sendTransaction()
   }

   useEffect(() => {
      const tooltips = document.querySelectorAll('.tt')
      tooltips.forEach((t) => {
         new bootstrap.Tooltip(t)
      })
   }, [])

   return (
      <form
         action='/'
         className='transaction-form px-4 py-5'
         onSubmit={handleSubmit}
      >
         <div className='crypto-card py-3 px-4 d-flex flex-column justify-content-between text-light'>
            <div className='d-flex justify-content-between'>
               <div className='eth-symbol-container mb-2'>
                  <FontAwesomeIcon
                     className='eth-icon'
                     icon={faEthereum}
                  />
               </div>
               <div
                  className='i-symbol-container tt'
                  data-bs-placement='top'
                  title='This is Ethereum card with your address'
               >
                  <FontAwesomeIcon
                     className='i-icon'
                     icon={faInfo}
                  />
               </div>
            </div>
            <div className='eth-card-text'>
               <p className='address-text mb-1'>
                  {shortenAddress(currentAccounts)}
               </p>
               <h3 className='eth-title m-0'>Ethereum</h3>
            </div>
         </div>
         <div className='inputs-container'>
            <Input
               placeholder='Address To'
               name='addressTo'
               type='text'
               handleChange={handleChange}
            />
            <Input
               placeholder='Amount (ETH)'
               name='amount'
               type='number'
               handleChange={handleChange}
            />
            <Input
               placeholder='Keyword (Gif)'
               name='keyword'
               type='text'
               handleChange={handleChange}
            />
            <Input
               placeholder='Enter Message'
               name='message'
               type='text'
               handleChange={handleChange}
            />
            {isLoading ? (
               <Loader />
            ) : (
               <button
                  type='submit'
                  className='transaction-btn btn btn-light btn-lg w-100 rounded-pill'
               >
                  Send Now
               </button>
            )}
         </div>
      </form>
   )
}

export default SendCrypto
