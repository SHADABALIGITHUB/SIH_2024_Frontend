import React from 'react';
import './Testimonials.css';
import Image3 from '../../../../assets/Faculty/avatar-3.svg'
import Image4 from '../../../../assets/Faculty/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const StudentReviews = ({data}) => {

	// const data = [
	// 	{
	// 		id: 1,
	// 		image: Image4,
	// 		title: "Kerren Ortlepp",
	// 		subtitle: "Founder @ Entrostat",
	// 		comment: "Greg worked at Entrostat as a full-stack developer. He was excellent and had a real eye for design. If there was ever a time where we had a complicated frontend or needed to know what the best CSS approach was for something - Greg was our goto man!",
	// 	},
	// 	{
	// 		id: 2,
	// 		image: Image3,
	// 		title: "Thapelo Kekana",
	// 		subtitle: "Frontend Developer @ FNB",
	// 		comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
	// 	},
	// ];

	return (
		<section className="testimonials container section">

			<h2 className="h2 section__title"> Students Reviews </h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image|| Image4} alt="" 
								onError={(e)=> {e.target.onerror = null; // Prevents infinite loop if the fallback image also fails
									     e.target.src = Image3;  }
								}
								className='rounded-full	'
								/>
							</div>

							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default StudentReviews