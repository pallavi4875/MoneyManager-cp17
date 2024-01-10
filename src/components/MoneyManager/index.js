import React, {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactions: [],
    titleInput: '',
    AmountInput: '',
    selectedOption: transactionTypeOptions[0],
  }

  handleTitleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  handleAmountChange = event => {
    this.setState({amountInput: event.target.value})
  }

  handleOptionChange = event => {
    const selectedOptionId = event.target.value
    const foundOption = transactionTypeOptions.find(
      option => option.optionId === selectedOptionId,
    )
    this.setState({selectedOption: foundOption})
  }

  handleAddTransaction = () => {
    const {transactions, titleInput, amountInput, selectedOption} = this.state

    const newTransaction = {
      id: transactions.length + 1,
      title: titleInput,
      amount: +amountInput,
      option: selectedOption,
    }

    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
      titleInput: '',
      amountInput: '',
      selectedOption: transactionTypeOptions[0],
    }))
  }

  handleDeleteTransaction = id => {
    const updatedTransactions = this.state.transactions.filter(
      transaction => transaction.id !== id,
    )
    this.setState({transactions: updatedTransactions})
  }

  calculateTotals = () => {
    const totalIncome = this.state.transactions
      .filter(transaction => transaction.option.optionId === 'INCOME')
      .reduce((acc, transaction) => acc + transaction.amount, 0)

    const totalExpenses = this.state.transactions
      .filter(transaction => transaction.option.optionId === 'EXPENSES')
      .reduce((acc, transaction) => acc + transaction.amount, 0)

    const totalBalance = totalIncome - totalExpenses

    return {totalIncome, totalExpenses, totalBalance}
  }

  render() {
    const {totalIncome, totalExpenses, totalBalance} = this.calculateTotals()

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your{' '}
            <span className="highlightedText">Money Manager</span>
          </p>
        </div>

        <div className="form-card">
          <form>
            <h1 className="heading">Add Transaction</h1>
            <label for="title">TITLE</label>
            <input
              id="title"
              type="text"
              value={this.state.titleInput}
              onChange={this.handleTitleChange}
              placeholder="TITLE"
            />
            <label for="amount">AMOUNT</label>
            <input
              id="amount"
              type="text"
              value={this.state.amountInput}
              onChange={this.handleAmountChange}
              placeholder="AMOUNT"
            />
            <label for="type">TYPE</label>
            <select
              onChange={this.handleOptionChange}
              value={this.state.selectedOption.optionId}
            >
              {transactionTypeOptions.map(option => (
                <option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </option>
              ))}
            </select>
          </form>
          <button onClick={this.handleAddTransaction}>Add</button>
        </div>

        <div>
          <MoneyDetails
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />
        </div>
        <>
          <h1>History</h1>
          <ul>
            {this.state.transactions.map(transaction => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                handleDeleteTransaction={this.handleDeleteTransaction}
              />
            ))}
          </ul>
        </>
      </div>
    )
  }
}

export default MoneyManager
