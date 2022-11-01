import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar(props) {
    const [sidebar, setSidebar] = useState(false);
    const {loggedIn} = props
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className={sidebar ? "navbar-line active" : "navbar-line"}>
                    <div className='navbar'>
                        <Link to='#' className={'menu-bars'}>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {loggedIn ? [...SidebarData].filter(s => s.loggedin === true).map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        }) : [...SidebarData].filter(s => s.loggedin === false).map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;