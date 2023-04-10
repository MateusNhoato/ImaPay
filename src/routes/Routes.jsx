import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Balance from '../pages/balance_page/index';
import CompleatTransfer from '../pages/CompletedTransfer/CompletedTransfer';
import Error from '../pages/error/error';
import HomePage from '../pages/home';
import LoginPage from '../pages/login/LoginPage';
import PasswordPage from '../pages/password/PasswordPage';
import Register from '../pages/register';
import TransactionHistory from '../pages/transaction_history';
import TransferPage from '../pages/transfer_page/TransferPage';


const Routing = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/balance" element={<Balance/>}></Route>
                <Route path="/completedTransfer" element={<CompleatTransfer/>}></Route>
                <Route path="/*" element={<Error/>}></Route>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/password" element={<PasswordPage/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/transactionHistory" element={<TransactionHistory/>}></Route>
                <Route path="/transferPage" element={<TransferPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default Routing;