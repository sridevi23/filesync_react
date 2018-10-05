import React, {Component} from 'react';
// import './App.css';

import Nav from './Components/Nav';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import Cards from './Components/Cards';
import Newsletter from './Components/Newsletter';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';

class App extends Component {
    render() {
        return (
            <div>

                <Nav/>
                <Features/>
                <Testimonials/>
                <Cards/>
                <Newsletter/>
                <Contactus/>
                <Footer/>
            </div>
        );
    }
}

export default App;
