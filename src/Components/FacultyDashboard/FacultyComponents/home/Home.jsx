import React from 'react';
import './Home.css';
import Me from '../../../../assets/Faculty/avatar-4.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import MegaMaam from '../../../../assets/megamaam.jpeg';

const Home = ({data}) => {

     
    
     

    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={data.img[0].Profile ||MegaMaam|| Me} alt="" className='home__img w-32 h-32 rounded-3xl' width='120'
                onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop if the fallback image also fails
                    e.target.src = MegaMaam; // Fallback image URL if data.img is not a valid image
                  }}
                /> 
                
                <h1 className="h1 font-serif home__name">{data.name}</h1>
                <span className="my-text font-sm font-serif font-semibold">{data.education}</span>

                <HeaderSocials Social={data.socials} />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )

}

export default Home