import React from 'react'

//components
import Navbar from './Navbar';

class Contact_us extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <Navbar />
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content text-center" >
                                <h3 style={{color : 'white'}}>Naga Sowmya Narayanan</h3>
                                <h4 style={{color : 'white'}}>gmail : nagasowmyanarayanan@gmail.com</h4>
                            </div>
                            <div className="banner_content text-center">
                                <h3 style={{color : 'white'}}>Hrishahb Dubey</h3>
                                <h4 style={{color : 'white'}}>gmail : rishabhofficial88@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact_us