import './contact.scss';

import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa'


export default function Contact(){
    return (
        <div className = 'contact'>
            <h2 className = 'contact-title'>Contact me via any of these links:</h2>
            <div className = 'contact-icons-container'>
                <a href = 'https://www.facebook.com/profile.php?id=100044679731573' target = '_blank'>
                    <FaFacebook />
                </a>
                <a href = 'https://www.linkedin.com/in/jose-jerome-lalunio-1ba2541a6/' target = '_blank'>
                    <FaLinkedin />
                </a>
                <a href = 'https://mail.google.com/mail/?view=cm&fs=1&to=josejeromelalunio@gmail.com' target = '_blank'>
                    <FaEnvelope />
                </a>
            </div>
        </div>
    );
}