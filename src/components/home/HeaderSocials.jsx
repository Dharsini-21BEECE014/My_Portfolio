import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
// import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='#home' className='home__social-link' target='_blank' rel='noreferrer'>
            </a>

            <a href='https://github.com/Dharsini-21BEECE014' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a>

            <a href='https://dev.to/gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>  */}

            <a href='https://www.linkedin.com/mwlite/in/dharsini-harsha-377112249' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/profile.php?id=100079705487637' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            {/*<a href='https://x.com/Master_Arun29' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaTwitter />
            </a>*/}
        </div>
    );
};

export default HeaderSocials;
