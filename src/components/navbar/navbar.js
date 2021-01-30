import './navbar.scss';
import NavbarItem from './components/navbar_item';

export default function NavBar() {
    return <nav className = 'nav-bar'>
        <NavbarItem name = 'About'/>
        <NavbarItem name = 'Skills'/>
        <NavbarItem name = 'Projects'/>
        <NavbarItem name = 'Contact'/>
    </nav>
}