import { React, createContext } from 'react';
import { useNavigate, useLocation } from 'react-router';


import Logo from '../../assets/img/logotipo.svg'
import ListItem from './ListItem';

import './NavBar.css'


const NavBar = (props) => {
    const items = props.items;

    const ItemsList = items.map((item) =>
        <ListItem key={item.key} value={item} />);
    
        const navigate = useNavigate() 
        const location = useLocation();

        const navigateHome = () => {
            if(location.pathname.startsWith('/user'))
                navigate('/user/balance');
            else
                navigate('/')
        }

    return (
        <nav className='nav'>
            <img src={Logo} alt="Logo" width='20%' onClick={navigateHome} className='logo' />
            <ul>
                {ItemsList}
            </ul>
        </nav>
      );
}
 
export default NavBar;