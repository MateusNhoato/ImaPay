import React from 'react';
import Logo from '../../assets/img/logotipo.svg'
import './NavBar.css'


const NavBar = (props) => {
    const items = props.items;

    const ListItem = (item) =>{
        return <li>{item.value}</li>
    }

    const ItemsList = items.map((item, index) =>
        <ListItem key={index} value={item} />);
    
    return (
        <nav className='nav'>
            <img src={Logo} alt="Logo" width='20%' />
            <ul>
                {ItemsList}
            </ul>
        </nav>
      );
}
 
export default NavBar;