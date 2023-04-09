import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Balance from '../pages/balance_page/index';
import Home from '../pages/home/index';
import Login from '../pages/login/LoginPage';
import Register from '../pages/register/index';
import TransferPage from '../pages/transfer_page/TransferPage';


const Routing = ()=>{
    return(
        <Router>
            <Routes>
                <Route path='/balance_page' element={<Balance/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/transferPage' element={<TransferPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default Routing;