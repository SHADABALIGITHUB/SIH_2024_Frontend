
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
import { useContext } from 'react';



const Index = () => {
    
    
    const { Theme,setTheme} = useContext(MyTheme);

      

    return (
        <div className="app" data-theme={Theme}>
            <Sidebar />
            <main className='ml-[110px] md:ml-0'>
                <Home />
                <About />
                <Services />
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
