import React, { useState, useCallback, useEffect } from 'react';

import './navbar.scss';
import NavbarItem from './components/navbar_item';

import { debounce } from '../utils/helpers';

export default function NavBar() {

    const [previousPos, setPreviousPos] = useState();

    const handleScroll = debounce(() => {
        const currentPos = window.pageYOffset;
        document.getElementById('navbar').style.top = previousPos - currentPos > 70 ? '0' : '-50px';
        setPreviousPos(() => window.pageYOffset);
    }, 60);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log('called use effect');
        return() => window.removeEventListener('scroll', handleScroll);
    },[previousPos, handleScroll]);
      
    return <nav id = 'navbar'>
        <NavbarItem name = 'about'/>
        <NavbarItem name = 'skills'/>
        <NavbarItem name = 'hero'/>
        <NavbarItem name = 'projects'/>
        <NavbarItem name = 'contact'/>
    </nav>
}