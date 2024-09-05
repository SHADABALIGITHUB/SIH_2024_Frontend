import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'



const HeaderSocials = ({Social}) => {
    const socialIcons = {
        github: <FaGithub />,
        linkedin: <FaLinkedinIn />,
        twitter: <FaTwitter />,
        facebook: <FaFacebookF />,
        codepen: <FaDev />,
        hashnode: <SiHashnode />
    }
    return (
        <div className='home__socials'>
        {Social?.map((social, index) => (
            <a
                key={index}
                href={social.link}
                className='home__social-link'
                target='_blank'
                rel='noreferrer'
            >
                {socialIcons[social.name] || social.name}
            </a>
        ))}
    </div>
    );
};

export default HeaderSocials;
