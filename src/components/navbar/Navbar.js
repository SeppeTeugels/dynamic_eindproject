import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
import {useUserContext} from "../../contexts/userContext";
import {useCartContext} from "../../contexts/ShoppingCartContext";

function Navbar(props) {
    const [sidebar, setSidebar] = useState(false);
    const {loggedIn} = props
    const {user} = useUserContext();
    const {cart} = useCartContext();
    const showSidebar = () => setSidebar(!sidebar);
    const today = new Date()
    const curHr = today.getHours()
    let greeting = ""
    if (curHr > 0 && curHr < 7) {
        greeting = 'good night'
    } else if (curHr < 12) {
        greeting = 'good morning'
    } else if (curHr < 18) {
        greeting = 'good afternoon'
    } else {
        greeting = 'good evening'
    }

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className={sidebar ? "navbar-line active" : "navbar-line"}>
                    <div className='navbar'>
                        <Link to='#' className={'menu-bars'}>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                        {(cart && cart.length > 0) ?
                            <Link to='/buypage' style={{display: "flex", width: "100%"}}>
                                <FaIcons.FaCartPlus style={{fontSize: "30px", marginTop: "10px", marginLeft: "10px"}}>
                                </FaIcons.FaCartPlus>
                                <div
                                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                    style={{
                                        color: "white",
                                        width: "1.5rem",
                                        height: "1.5rem",
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        transform: "translate(-120%, 120%)",
                                    }}
                                >
                                    {cart ? cart.length : 0}
                                </div>
                            </Link> : ""}

                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        <h5 style={{
                            color: 'white',
                            paddingLeft: "20px"
                        }}>{user && user.userName ? `${greeting}, ${user.userName}` : ""}</h5>
                        {loggedIn ? [...SidebarData].filter(s => s.loggedin === true && s.title !== "orders").map((item, index) => {
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
                        }
                        {loggedIn ? [...SidebarData].filter(s => s.loggedin === true && s.title === "orders").map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span style={{marginRight: "10px"}}>{item.title}</span>
                                        <div
                                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                            style={{color: "white", width: "1.5rem", height: "1.5rem"}}>
                                            {cart ? cart.length : 0}
                                        </div>
                                    </Link>
                                </li>
                            );
                        }) : ""}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;