import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const getEthereumContract = () => {
   const provider = new ethers.providers.Web3Provider(ethereum)
   const signer = provider.getSigner()
   const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
   )

   return transactionContract
}

export const TransactionProvider = ({ children }) => {
   const [currentAccounts, setCurrentAccounts] = useState('')
   const [formData, setFormData] = useState({
      addressTo: '',
      amount: '',
      keyword: '',
      message: '',
   })
   const [isLoading, setIsLoading] = useState(false)
   const [transactionCount, setTransactionCount] = useState(
      localStorage.getItem('transactionCount')
   )
   const [transactions, setTransactions] = useState([])

   const handleChange = (e, name) => {
      setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
   }

   const getAllTransactions = async () => {
      try {
         if (!ethereum) return alert('Please install Metamask!')

         const transactionsContract = getEthereumContract()
         const availableTransactions =
            await transactionsContract.getAllTransactions()
         console.log(availableTransactions)

         const structuredAvailableTransactions = availableTransactions.map(
            (transaction) => ({
               addressTo: transaction.receiver,
               addressFrom: transaction.sender,
               timestamp: new Date(
                  transaction.timestamp.toNumber() * 1000
               ).toLocaleString(),
               message: transaction.message,
               keyword: transaction.keyword,
               amount: parseInt(transaction.amount._hex) / 10 ** 18,
            })
         )
         console.log(structuredAvailableTransactions)

         setTransactions(structuredAvailableTransactions)
      } catch (error) {
         console.log(error)
      }
   }

   const checkIfWalletIsConnected = async () => {
      console.log('ok2')
      try {
         if (!ethereum) return alert('Please install Metamask!')

         const accounts = await ethereum.request({ method: 'eth_accounts' })

         if (accounts.length) {
            setCurrentAccounts(accounts[0])
            getAllTransactions()
            chechIfTransactionExist()
         } else {
            console.log('No accounts found')
         }

         console.log(accounts)
      } catch (error) {
         console.log(error)
         throw new Error('No ethereum object!')
      }
   }

   const chechIfTransactionExist = async () => {
      try {
         if (ethereum) {
            console.log('ok')
            const transactionsContract = getEthereumContract()
            const currentTransactionCount =
               await transactionsContract.getTransactionCount()

            window.localStorage.setItem(
               'transactionCount',
               currentTransactionCount
            )
         }
      } catch (error) {
         console.log(error)

         throw new Error('No ethereum object')
      }
   }

   const connectWallet = async () => {
      try {
         if (!ethereum) return alert('Please install Metamask!')

         const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
         })

         setCurrentAccounts(accounts[0])
      } catch (error) {
         console.log(error)
         throw new Error('No ethereum object!')
      }
   }

   const sendTransaction = async () => {
      try {
         if (!ethereum) return alert('Please install Metamask!')

         const { addressTo, amount, keyword, message } = formData
         const transactionContract = getEthereumContract()
         const parsedAmount = ethers.utils.parseEther(amount)

         ethereum.request({
            method: 'eth_sendTransaction',
            params: [
               {
                  from: currentAccounts,
                  to: addressTo,
                  gas: '0x5208', // 0,000021 ETH
                  value: parsedAmount._hex,
               },
            ],
         })

         const transactionHash = await transactionContract.addToBlockchain(
            addressTo,
            parsedAmount,
            message,
            keyword
         )

         setIsLoading(true)
         console.log(`Loading - ${transactionHash.hash}`)
         await transactionHash.wait()
         setIsLoading(false)
         console.log(`Success - ${transactionHash.hash}`)

         const transactionCount =
            await transactionContract.getTransactionCount()
         setTransactionCount(transactionCount.toNumber())

         window.location.reload()
      } catch (error) {
         console.log(error)
         throw new Error('No ethereum object!')
      }
   }

   useEffect(() => {
      checkIfWalletIsConnected()
      // chechIfTransactionExist();
      window.ethereum.on('accountsChanged', function (accounts) {
         window.location.reload()
      })
   }, [transactionCount])

   return (
      <TransactionContext.Provider
         value={{
            connectWallet,
            currentAccounts,
            formData,
            handleChange,
            sendTransaction,
            transactions,
            isLoading,
         }}
      >
         {children}
      </TransactionContext.Provider>
   )
}
