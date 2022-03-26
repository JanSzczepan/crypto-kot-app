import React, { useContext, useEffect, useRef, useState } from 'react'

import { TransactionContext } from '../context/TransactionContext'

import './Transactions.scss'

import { shortenAddress } from '../utils/shortenAddress'
import dummyData from '../utils/dummyData'
import useFetch from '../hooks/useFetch'

import { motion } from 'framer-motion'

const TransactionCard = ({ addressTo, addressFrom, timestamp, keyword, amount, message, url, arr, index }) => {

   const gifUrl = useFetch({ keyword })
   
   return (
      <div className="col">
         <div className="transaction-card card h-100">
            <div className="transaction-body-card card-body">
               <h5 className="card-title mb-3 mt-2">Transaction {arr.length - index}</h5>
               <div className="card-text-container pe-2">
                  <a className="text-decoration-none" href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                     <p className="text-light m-0">
                        From: {shortenAddress(addressFrom)}
                     </p>
                  </a>
                  <a className="text-decoration-none" href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                     <p className="text-light m-0">
                        To: {shortenAddress(addressTo)}
                     </p>
                  </a>
                  <p className="m-0">
                     Amount: {amount} ETH
                  </p>
                  {message && (
                     <p className="message-text m-0">
                        Message: {message}
                     </p>
                  )}
               </div>
               <img src={gifUrl || url} className="card-img img-fluid mt-3" alt="gif" />
               <div className="time-container mt-n3 mx-auto py-1 px-3 text-center">
                  <p className="time-text m-0">
                     {timestamp}
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

const History = (props) => {

   const { currentAccounts, transactions } = useContext(TransactionContext)

   const [width, setWidth] = useState(0)
   const container = useRef()
   const containerInner = useRef()

   const setContainer = () => {
      setWidth(container.current.scrollWidth - container.current.offsetWidth)
   }
   const changeComponentToTransaction = () => {
      props.setChangeComponent('SendCrypto')
   }

   useEffect(() => {
      setContainer();
      window.addEventListener("resize", changeComponentToTransaction)
      return () => { window.removeEventListener("resize", changeComponentToTransaction) }
   });

   return ( 
      <section className="history">
         {currentAccounts ? (
            <h3 className="history-title text-light my-5">Latest Transactions</h3>
         ) : (
            <h3 className="history-title text-light my-5">Please connect your wallet to see latest transactions</h3>
         )}
         <motion.div className="cards-container-container" ref={container} whileTap={{ cursor: "grabbing" }}>
            <motion.div className="cards-container row flex-nowrap g-4 text-light" ref={containerInner} drag="x" dragConstraints={{ right: 0, left: -width }}>
               {[...transactions].reverse().map((transaction, index, transactionsArr) => (
                  <TransactionCard key={index} {...transaction} arr={transactionsArr} index={index}/>
               ))}
            </motion.div>
         </motion.div>
      </section>
   );
}
 
export default History;