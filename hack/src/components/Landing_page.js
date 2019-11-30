import React from 'react'

//components
import Navbar from './Navbar'
import Home_banner from './Home_banner'
import About_us_area from './About_us_area'
import Service_offers from './Service_offers'
import Testimonial from './Testimonial'
import Newsletter from './Newsletter'
import Footer from './Footer'

class Landing_page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Navbar />
                    <Home_banner />
                    <About_us_area />
                    <Service_offers />
                    <Testimonial />
                    <Newsletter />
                    <Footer />
                </React.Fragment>
            </div>
        )
    }
}

export default Landing_page