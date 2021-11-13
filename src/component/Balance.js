import React, { useContext } from 'react'
import GlobalContext from '../Context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount)
  // console.log(amounts)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <>
      <h5 className='balance-heading'>Your Balance</h5>
      <h2 className='balance'>${total}</h2>
    </>
  )
}
export default Balance
