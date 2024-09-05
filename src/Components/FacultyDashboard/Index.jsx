
import Sidebar from './FacultyComponents/sidebar/Sidebar';
import Home from './FacultyComponents/home/Home';
import About from './FacultyComponents/about/About';
import Services from './FacultyComponents/services/Services';
import Experience from './FacultyComponents/resume/Experience';
import Projects from './FacultyComponents/Projects/Projects';
import StudentReviews from './FacultyComponents/testimonials/StudentReviews';
import Blog from './FacultyComponents/blog/LatestPost';
import Contact from './FacultyComponents/contact/Contact';
import Events from './FacultyComponents/Events/Events';
import useLocalStorage from 'use-local-storage'
import {MyTheme} from '../../Context/ThemeContext';
import { Profiler, useContext, useState } from 'react';



const Index = () => {
    
    
    const { Theme,setTheme} = useContext(MyTheme);

     const [data, setData] = useState({
        name: 'Dr.Megha Jain',
        education: "Assistant Professor",
        img:[
            {
            Profile:"https://law-teach.in/teacher-img/passportsize%20photo.jpg",
            Cover:"https://law-teachers.in/teacher-img/cover%20photo.jpg",
            big:"https://law-teachers.in/teacher-img/cover%20photo.jpg",
            creation_date:'',
            updation_data:'',

            }
           ],
            
         socials: [  {
                name: 'twitter',
                link: 'https://twitter.com/'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/'
            },
            {
                name: 'github',
                link: 'pop'

            },
            {
                name: 'codepen',
                link: 'https://codepen.io/'
            },
            {
                name: 'hashnode',
                link: 'https://hashnode.com/'
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/'
            }
        ]
        ,
        about: {
            
            desc: `I possess over 17 years of extensive academic experience with a robust track record of scholarly contributions. My research endeavors have resulted in the publication of more than 15 articles in esteemed international journals, including reputable publishers such as Elsevier, Springer, and IGI Global USA. A significant portion of my work is indexed in SCI/Scopus, highlighting its scholarly impact and quality. One of my articles has been recognized and listed as a book chapter by Elsevier. My primary area of expertise and interest lies in blockchain technology. Title of PhD thesis “Designing a Blockchain based Platform for Health Care sector to Prevent Fraudulent activities in Medical Records”. I have also been involved in various research projects and have secured funding from the Department of Science and Technology (DST) and the University Grants Commission (UGC) for my research initiatives. I have also been a part of the editorial board of several reputed journals and have reviewed numerous research papers.`,
            skills: [
                'Blockchain',
                'cloud computing',
                'Artificial Intelligence',
                'Machine Learning',
                'Data Science',
                'Cyber Security',
                
            ],
            Resume: "https://portal.abuad.edu.ng/lecturer/documents/1554208765DATA_AND_INFORMATION.pdf",
            Experience: 12,
            publications: 5,
            projects: 10,
            awards: 3,
            numberofLectures: "200+",
        
        },
        publications: [
            {
              title: 'Exploring Quantum Computing in Modern Cryptography',
              link: 'https://www.journalofcryptography.com/quantum-computing',
              img: 'https://www.journalofcryptography.com/images/quantum.jpg',
              desc: 'A comprehensive study on the impact of quantum computing in modern cryptographic methods, focusing on security challenges.',
              creation_date: "2021-08-12",
              updation_data: "2021-10-05",
            },
            {
              title: 'AI-Powered Healthcare: Transforming Medical Diagnosis',
              link: 'https://www.healthcarejournal.com/ai-diagnosis',
              img: 'https://www.healthcarejournal.com/images/ai-healthcare.jpg',
              desc: 'This paper discusses the integration of AI into healthcare systems for enhanced diagnosis accuracy and patient care.',
              creation_date: "2020-12-15",
              updation_data: "2021-01-20",
            }, 
            {
              title: 'Sustainable Energy Solutions for the 21st Century',
              link: 'https://www.renewableenergyworld.com/sustainable-energy',
              img: 'https://www.renewableenergyworld.com/images/sustainable-energy.jpg',
              desc: 'An analysis of renewable energy technologies, focusing on solar, wind, and bioenergy as sustainable solutions.',
              creation_date: "2022-05-18",
              updation_data: "2022-06-01",
            },
            {
              title: 'Blockchain Technology in Financial Services',
              link: 'https://www.financialtechjournal.com/blockchain-finance',
              img: 'https://www.financialtechjournal.com/images/blockchain.jpg',
              desc: 'A deep dive into how blockchain is revolutionizing the financial sector by enhancing transparency and security.',
              creation_date: "2021-03-22",
              updation_data: "2021-04-10",
            },
            {
              title: 'The Role of Machine Learning in Climate Modeling',
              link: 'https://www.environmentalresearch.com/climate-ml',
              img: 'https://www.environmentalresearch.com/images/climate-ml.jpg',
              desc: 'This publication explores the application of machine learning techniques in climate science for better forecasting and risk assessment.',
              creation_date: "2023-01-30",
              updation_data: "2023-02-12",
            },
          ],
          
        WorkExperience:[
            {
                id: 1,
                title: "Software Engineer",
                company: "Kurtosys",
                yearsActive: "January 2022 - Present",
                information: [
                    "Write modern, performant, maintainable code for a diverse array of internal projects",
                    "Communicate with multi-disciplinary teams of engineers, team leads, and QA Engineers on a daily basis",
                ],
            },
            {
                id: 2,
                title: "Junior Software Developer",
                company: "Entrostat",
                yearsActive: "May 2017 - December 2021",
                information: [
                    "Improved and optimized the company's website for a seamless customer experience",
                    "Created, communicated, and managed project plans & project timelines",
                    "Worked to continually meet the expectation of our clients",
                ],
            },
            {
                id: 3,
                title: "Junior Software Developer",
                company: "Empire State",
                yearsActive: "Feburary 2016 - April 2017",
                information: [
                    "Planned, developed, tested, deployed, and maintained web applications and mobile applications",
                    "Worked well independently and on a team to solve problems."
                ],
            },
            {
                id: 4,
                title: "Software Development Intern",
                company: "The Digital Academy",
                yearsActive: "Novembe 2015 - January 2016",
                information: [
                    "Served as a dedicated and supportive Intern in a fast-paced environment",
                    "Worked to solve complex problems using the latest in Mobile and Web Technologies.",
                ],
            },
            {
                id: 5,
                title: "IT Support Assistant",
                company: "Varsity College",
                yearsActive: "February 2015 - May 2015",
                information: [
                    "Worked to support the senior support staff with day-to-day tasks.",
                    "Assisted with the evaluation and troubleshooting of hardware and software issues.",
                    "Maintaining computer Inventory & surplus equipment."
                ],
            },
            {
                id: 6,
                title: "Teacher Of the Year",
                company: "Varsity College",
                yearsActive: "December 2014 - February 2015",
                information: [
                    "Monitored registration for all prospective student",
                    "Assisted parents and prospective student with necessary registration details",
                ],
            },
        ],
        Projects :[
            {
                id: 1,
                image: 'https://www.google.com',
                title: "Block chain backend App",
                category: ["Python", "Blockchain"],
                Url: "https://github.com/GregSithole/react-native-jobs",
                creation_date: "2022-02-02",
                updation_data: "2022-02-02",
            },
        
            {
                id: 2,
                image: 'https://www/facebook.com',
                title: "Cryptoverse",
                category: ["Decentralized Finance", "Big Data"],
                url: "https://cryptoverse.gregsithole.com",
                repositoryUrl: "https://github.com/GregSithole/crypto-app",
                creation_date: "2022-02-02",
                updation_data: "2022-02-02",
            },
            {
                id: 3,
                image: 'https://www.google.com',
                title: "Travel Advisor and Link",
                category: ["Blockchain-Based KYC"],
                url: "https://travel.gregsithole.com",
                repositoryUrl: "https://github.com/GregSithole/travel-advisor",
                creation_date: "2022-02-02",
                updation_data: "2022-02-02",

            },
            {
                id: 4,
                image: 'Projects',
                title: "Payment Gate way ",
                category: ["Decentralized E-commerce"],
                url: "https://www.npmjs.com/package/wallhaven-cli",
                repositoryUrl: "https://github.com/GregSithole/wallhaven-cli",
                creation_date: "2022-02-02",
                updation_data: "2022-02-02",
            }],

            events: [
                {
                  eventId: "EVT12345",
                  eventName: "National Science Workshop",
                  eventDate: "2024-09-15",
                  eventLocation: "Delhi",
                  eventDesc: "A workshop focused on the latest developments in science education."
                },
                {
                  eventId: "EVT12346",
                  eventName: "Mathematics Teachers Symposium",
                  eventDate: "2024-10-01",
                  eventLocation: "Mumbai",
                  eventDesc: "A symposium dedicated to improving the teaching methodologies of mathematics."
                },
                {
                  eventId: "EVT12347",
                  eventName: "Technology in Education Conference",
                  eventDate: "2024-11-20",
                  eventLocation: "Bangalore",
                  eventDesc: "Exploring the latest technological advancements that can enhance classroom learning."
                },
                {
                  eventId: "EVT12348",
                  eventName: "Physical Education and Sports Seminar",
                  eventDate: "2024-12-05",
                  eventLocation: "Kolkata",
                  eventDesc: "A seminar aimed at promoting the importance of physical education in schools."
                },
                {
                  eventId: "EVT12349",
                  eventName: "Arts and Culture Teachers Conference",
                  eventDate: "2024-08-25",
                  eventLocation: "Chennai",
                  eventDesc: "A conference focused on integrating arts and culture into the school curriculum."
                }
              ],



        studentReviews: [
            {
                id: 1,
                image: "https:randomimage.com",
                title: "Kerren Ortlepp",
                subtitle: "Founder @ Entrostat",
                comment: "Greg worked at Entrostat as a full-stack developer. He was excellent and had a real eye for design. If there was ever a time where we had a complicated frontend or needed to know what the best CSS approach was for something - Greg was our goto man!",
            },
            {
                id: 2,
                image: "https://law-teachers.in/teacher-img/passportsize%20photo.jpg",
                title: "Thapelo Kekana",
                subtitle: "Frontend Developer @ FNB",
                comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
            }
        ],


    })


      

    return (
        <div className="app" data-theme={Theme}>
            <Sidebar />
            <main className='ml-[110px] md:ml-0'>
                <Home data={data} />
                <About data={data}/>
                <Services data={data.publications}/>
                <Experience  WorkExperience={data.WorkExperience}/>
                <Projects Projects={data.Projects} />
                {/* <Events /> */}
                <StudentReviews data={data.studentReviews}/>
                <Blog />
                <Contact theme={Theme} />
            </main>
        </div>
    );
}

export default Index;
