import React, { useState } from "react";
import "./projects.css";
import Work1 from "../../../../assets/Faculty/native-jobs.png";
import Work2 from "../../../../assets/Faculty/cryptoverse.png";
import Work3 from "../../../../assets/Faculty/travel.png";
import Work4 from "../../../../assets/Faculty/blog-1.svg";


import { RiGithubLine, RiLink } from "react-icons/ri";

import { motion } from "framer-motion";

const Projects = ({Projects}) => {
	//  console.log(Projects)
	const tempImages=[Work1,Work2,Work3,Work4];
	
	const [activeFilter, setActiveFilter] = useState(0);
	const filterItems = (categoryItem) => {
		const updatedItems = Projects.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});

		setItems(updatedItems);
	};

	return (
		<section className="portfolio container section" id="portfolio">
			<h2 className="h2 section__title">Recent Projects</h2>

			<div className="portfolio__filters">
				<span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { ''; setActiveFilter(0) }}>
					All
				</span>
				<span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Frontend"); setActiveFilter(1) }}>
				Software Engineering
				</span>
				<span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Backend"); setActiveFilter(2) }}>
					AI & ML
				</span>
				<span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Angular"); setActiveFilter(3) }}>
				Data Science and Big Data
				</span>
				<span className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("React"); setActiveFilter(4) }}>
				Computer Networks and Distributed Systems
				</span>
			</div>

			<div className="portfolio__container grid">
			
				{Projects.map((elem) => (
					
					    <motion.div 
						layout
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="text-2xl portfolio__card"
					    key={elem.id} > 

                             <div className="portfolio__thumbnail">
						 		<img src={elem.image || tempImages[elem.id%tempImages.length]} alt="" className="portfolio__img" height="267" 
								 onError={
									(e)=>{e.target.onerror=null; e.target.src= tempImages[elem.id%tempImages.length]}
								   }
								 />
						 		<div className="portfolio__mask"></div>
						 	</div>
							 <span className="portfolio__category">{elem.category.join(', ')}</span>
						 	<h3 className="h3 portfolio__title">{elem.title}</h3>
						 	<a href={elem.url} target="_blank" rel="noreferrer" className="portfolio__button flex justify-center items-center">
						 		<RiLink className="portfolio__button-icon" />
						 	</a>
						 	<a href={elem.repositoryUrl || ''} target="_blank" rel="noreferrer" className="portfolio__github-button flex justify-center items-center">
						 		<RiGithubLine className="portfolio__button-icon" />
						 	</a>
						
						
						  </motion.div>

					

					
						
					)
				)}
			</div>
		</section>
	);
};

export default Projects;
