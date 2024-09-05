import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';
import { MdOutlineClass } from "react-icons/md";
const AboutBox = ({About}) => {
    const stats = [
        {
            icon: <RiFireLine className='about__icon text-mytext'/>,
            value: About?.Experience||"2+",
            label: 'Years of Experience'
        },
        {
            icon: <RiCupLine className='about__icon text-mytext'/>,
            value: About.publications||"0+",
            label: 'Research Publications'
        },
        {
            icon: <RiGroupLine className='about__icon text-mytext'/>,
            value: About?.projects||"0",
            label: 'Launched Projects'
        },
        {
            icon: <RiTrophyLine className='about__icon text-mytext' />,
            value: About.awards||"1",
            label: 'Awards'
        },
        {
            icon: <MdOutlineClass className='about__icon text-mytext'/>,
            value: About?.numberofLectures||"0",
            label: 'Number of Lectures'
        }
    ];
    return (
        <div className="about__boxes grid">
        {stats.map((stat, index) => (
            <div key={index} className="about__box">
                {stat.icon}
                <div>
                    <h3 className="about__title text-mytext">{stat.value}</h3>
                    <span className="about__subtitle">{stat.label}</span>
                </div>
            </div>
        ))}
    </div>
    )
}

export default AboutBox