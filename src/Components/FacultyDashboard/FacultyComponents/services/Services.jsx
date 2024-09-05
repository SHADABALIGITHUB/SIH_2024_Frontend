import React, { useContext } from 'react';
import './Services.css';
import Image1 from '../../../../assets/Faculty/service-1.svg'
import Image2 from '../../../../assets/Faculty/service-2.svg'
import Image3 from '../../../../assets/Faculty/service-3.svg'
import { MyTheme } from '../../../../Context/ThemeContext';

const Random=[ Image1 , Image2 , Image3 ];


const Services = ({data}) => {
    
    const {Theme} =useContext(MyTheme);

const color=Theme=="dark"?['bg-card']:['bg-orange-200','bg-blue-200','bg-green-200','bg-yellow-200','bg-indigo-200','bg-purple-200','bg-pink-200']

    return (
        <section className="services container section" id="services">
            <h2 className="h2 section__title">Research And Publications </h2>

            <div className="services__container grid gap-5">
                 {data?.map((info,index) => (
                    
                        <div className={`services__card ${color[index%color.length]}`} key={index}>
                            <img src={info.img || Random[index%Random.length]} alt='' className='services__img' width="80" 
                            onError={(e) => {e.target.onerror = null; e.target.src= Random[index%Random.length]}}
                            />

                            <h3 className="h3 services__title ">{info.title}</h3>
                            <p className="services__description text-mytext">{info.desc}</p>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Services