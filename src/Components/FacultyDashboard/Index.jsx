
import Sidebar from './FacultyComponents/sidebar/Sidebar';
import Home from './FacultyComponents/home/Home';
import About from './FacultyComponents/about/About';
import Services from './FacultyComponents/services/Services';
import Resume from './FacultyComponents/resume/Resume';
import Portfolio from './FacultyComponents/portfolio/Portfolio';
import Testimonials from './FacultyComponents/testimonials/Testimonials';
import Blog from './FacultyComponents/blog/Blog';
import Contact from './FacultyComponents/contact/Contact';
import useLocalStorage from 'use-local-storage'
import {MyTheme} from '../../Context/ThemeContext';
import { Profiler, useContext, useState } from 'react';



const Index = () => {
    
    
    const { Theme,setTheme} = useContext(MyTheme);

     const [data, setData] = useState({
        name: 'Dr. Sunil',
        education: "Ph.D. (Computer Engineering)",
        img:[
            {
            Profile:"https://law-teachers.in/teacher-img/passportsize%20photo.jpg",
            Cover:"https://law-teachers.in/teacher-img/cover%20photo.jpg",
            big:"https://law-teachers.in/teacher-img/cover%20photo.jpg",

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
            
            desc: `Hello! I'm Greg, and I'm based in Johannesburg, South Africa. I studied at Varisty College Sandton, where I completed my diploma in Software Development.<br /><br />Fastforward to today, and I can honestly say it's been a beautiful journery and I hope to grow even further as Software Engineer. My current focus these days is on expanidng my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br /> Here are a few technologies I’ve been working with recently:`,
            skills: [
                'JavaScript (ES6+)',
                'TypeScript',
                'React',
                'Node.js',
                'Postgres SQL',
                'NestJS'
            ],
            Resume: "https://portal.abuad.edu.ng/lecturer/documents/1554208765DATA_AND_INFORMATION.pdf",
            Experience: 12,
            publications: 5,
            projects: 10,
            awards: 3
        
        },
        publications: [
            {
                title: 'Publication 1',
                link: 'https://www.google.com',
                img: 'https://www.google.com',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi nec nulla tincidunt fringilla'
            },
            {
                title: 'Publication 2',
                link: 'https://www.google.com',
                img: 'https://www.google.com',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi nec nulla tincidunt fringilla',
            }, 
            {
                title: 'Publication 3',
                link: 'https://www.google.com',
                img: 'https://www.google.com',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi nec nulla tincidunt fringilla',
            },
            {
                title: 'Publication 4',
                link: 'https://www.google.com',
                img: 'https://www.google.com',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi nec nulla tincidunt fringilla',
            },
            {
                title: 'Publication 5',
                link: 'https://www.google.com',
                img: 'https://www.google.com',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi nec nulla tincidunt fringilla',
            },
        ],

    })


      

    return (
        <div className="app" data-theme={Theme}>
            <Sidebar />
            <main className='ml-[110px] md:ml-0'>
                <Home data={data} />
                <About data={data}/>
                <Services data={data.publications}/>
                <Resume />
                <Portfolio />
                <Testimonials />
                <Blog />
                <Contact theme={Theme} />
            </main>
        </div>
    );
}

export default Index;
