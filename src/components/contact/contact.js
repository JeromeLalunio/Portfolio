import './contact.scss';

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'


export default function Contact(){
    return (
        <div id = 'contact'>
            <h2 className = 'contact-title'>Contact me via any of these links:</h2>
            <div className = 'contact-icons-container'>
                <a 
                    href = 'https://www.facebook.com/profile.php?id=100044679731573' 
                    target = '_blank' 
                    rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a 
                    href = 'https://www.linkedin.com/in/jose-jerome-lalunio-1ba2541a6/' 
                    target = '_blank' 
                    rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a 
                    href = 'https://github.com/JeromeLalunio' 
                    target = '_blank'
                    rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
            <h2 className = 'contact-title-email'>Or Email me at:</h2>
            <h3 className = 'contact-title-email'>josejeromelalunio@gmail.com</h3>
        </div>
    );
}