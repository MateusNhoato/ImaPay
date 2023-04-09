import { Route, Routes } from 'react-router-dom';

import './App.css'

import BalancePage from './pages/balance_page'
import Register from './pages/register'
import TransferPage from './pages/transfer_page/TransferPage'
import HomePage from './pages/home'
import ImapayProvider from './context/imapayProvider'
import CompletedTransfer from './pages/CompletedTransfer/CompletedTransfer'
import LoginPage from './pages/login/LoginPage'
import PasswordPage from './pages/password/PasswordPage'
import Transaction_history from './pages/transaction_history/index'


function App() {

  return (
  
    <ImapayProvider>
      <Routes>
        <Route path="/transactionHistory" element={<Transaction_history />} />
        <Route path="/completedTransfer" element={<CompletedTransfer />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ImapayProvider>
  )
}

export default App
