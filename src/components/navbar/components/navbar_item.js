import { Link, animateScroll as scroll } from "react-scroll";

export default function NavbarItem(props){
    return ( 
        <div className = 'navbar-item' id = {`nav-${props.name}`}>
            {/* <a href = {`#${props.name}`}>{props.name}</a> */}
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