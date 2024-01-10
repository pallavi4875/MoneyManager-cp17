// Write your code here
import './index.css'
const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props
  return (
    <div className="container" d-flex flex-column>
      <div className="BalanceCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <p data-testid="balanceAmount"> Your Balance: {totalBalance}</p>
      </div>
      <div className="incomeCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <p data-testid="incomeAmount"> Your Income: {totalIncome}</p>
      </div>
      <div className="expensesCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <p data-testid="expensesAmount"> Your Expenses: {totalExpenses}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
