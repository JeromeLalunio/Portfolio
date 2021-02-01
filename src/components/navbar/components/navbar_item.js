import { Link } from "react-scroll";

export default function NavbarItem(props){
    return ( 
        <div className = 'navbar-item' id = {`nav-${props.name}`}>
            <Link
                activeClass="active"
                to={props.name}
                spy={true}
                smooth={true}
                duration={500}
            >
                {props.name}
            </Link>
        </div>
    );
}