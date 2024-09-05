import React from 'react';
import './About.css';
import Resume from '../../../../assets/megamaam.pdf';

import AboutBox from './AboutBox';

import Image from "../../../../assets/Faculty/avatar-2.svg"
const About = ({data}) => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="h2 section__title font-Google1 font-normal ">About Me </h2>

            <div className="about__container grid">
                <img src={data.img[0].big||Image} alt="" className='about__img' 
                onError={(e) => {e.target.onerror = null; e.target.src = Image;}}

                />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            {data.about?.desc}
                        </p>
                        <ul className="about__list">
                            {data?.about?.skills?.map((skill, index) => (
                                 <li key={index} className="about__list-item">{skill}</li>
                            ))
                           }
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                   
                </div>
            </div>

            <AboutBox About={data.about}/>
        </section>
    )
}

export default About