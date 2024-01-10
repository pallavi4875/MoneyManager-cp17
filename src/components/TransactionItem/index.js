// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, handleDeleteTransaction} = props
  const {id, title, amount, option} = transaction
  return (
    <>
      <div key={id}>
        <p>{title}</p>
        <p>{amount}</p>
        <p>{option.displayText}</p>
        <button
          data-testid="delete"
          onClick={() => handleDeleteTransaction(id)}
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default TransactionItem
