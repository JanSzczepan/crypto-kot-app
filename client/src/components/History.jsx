import React, { useContext, useEffect, useRef, useState } from 'react'

import { TransactionContext } from '../context/TransactionContext'

import './Transactions.scss'

import dummyData from '../utils/dummyData'
import { shortenAddress } from '../utils/shortenAddress'

import { motion } from 'framer-motion'

const TransactionCard = ({ addressTo, addressFrom, timestamp, amount, message, url }) => {
   return (
      <div className="col">
         <div className="transaction-card card h-100">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div className="transaction-body-card card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
         </div>
      </div>
   )
}

const History = (props) => {

   const { currentAccounts } = useContext(TransactionContext)

   const [width, setWidth] = useState(0)
   const container = useRef()
   const containerInner = useRef()

   // const [isPressedDown, setIsPressedDown] = useState(false)
   // const [cursorXSpace, setCursorXSpace] = useState(0)
   // const [cardsLeft, setCardsLeft] = useState(0)

   // const container = useRef(null)
   // const cards = useRef(null)

   //////////////////////////
   // const boundCards = () => {
   //    const container_rect = container.current.getBoundingClientRect()
   //    const cards_rect = cards.current.getBoundingClientRect()
   //    if (parseInt(cardsLeft) > 0) {
   //      setCardsLeft(0)
   //    } else if (cards_rect.right < container_rect.right) {
   //      setCardsLeft(-(cards_rect.width - container_rect.width))
   //    }
   // }

   // const handleMouseDown = (e) => {
   //    setIsPressedDown(true)
   //    setCursorXSpace(e.nativeEvent.offsetX - cards.current.offsetLeft - 12)
   //    // container.current.style.cursor = "grabbing"
   // }

   // const handleMouseMove = (e) => {
   //    if(!isPressedDown) return
   //    e.preventDefault()
   //    setCardsLeft(e.nativeEvent.offsetX - cursorXSpace)
   //    // boundCards()
   // }

   // const handleMouseUp = () => {
   //    // container.current.style.cursor = "grab"
   // }

   // useEffect(() => {
   //    window.addEventListener("mouseup", () => {
   //       setIsPressedDown(false)
   //    })
   // }, []);
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
               {dummyData.reverse().map((transaction, index) => (
                  <TransactionCard key={index} {...transaction}/>
               ))}
            </motion.div>
         </motion.div>
      </section>
   );
}
 
export default History;