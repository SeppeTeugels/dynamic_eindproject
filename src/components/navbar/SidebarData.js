import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        loggedin: true
    },
    {
        title: 'orders',
        path: '/buyPage',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text',
        loggedin: true
    },
    {
        title: 'Standslist',
        path: '/standlistpage',
        icon: <FaIcons.FaWarehouse/>,
        cName: 'nav-text',
        loggedin: true
    },
    {
        title: 'login',
        path: '/login',
        icon: <IoIcons.IoMdLogIn/>,
        cName: 'nav-text',
        loggedin: false
    },
    {
        title: 'Signup',
        path: '/signup',
        icon: <IoIcons.IoMdCreate />,
        cName: 'nav-text',
        loggedin: false
    },
    {
        title: 'Logout',
        path: '/',
        icon: <IoIcons.IoMdLogOut />,
        cName: 'nav-text',
        loggedin: true
    }
];