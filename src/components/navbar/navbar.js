import React, { useState, useCallback, useEffect } from 'react';

import './navbar.scss';
import NavbarItem from './components/navbar_item';

import { debounce } from '../utils/helpers';

export default function NavBar() {

    const [previousPos, setPreviousPos] = useState();

    const handleScroll = debounce(() => {
        const currentPos = window.pageYOffset;
        document.getElementById('nav-bar').style.top = previousPos - currentPos > 70 ? '0' : '-50px';
        
        setPreviousPos(() => window.pageYOffset);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log('called use effect');

        return() => window.removeEventListener('scroll', handleScroll);
    },[previousPos, handleScroll]);
      
    return <nav id = 'nav-bar'>
        <NavbarItem name = 'About'/>
        <NavbarItem name = 'Skills'/>
        <NavbarItem name = 'Projects'/>
        <NavbarItem name = 'Contact'/>
    </nav>
}