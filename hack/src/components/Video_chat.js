import React from 'react'

//components
import Navbar from './Navbar';

class Video_chat extends React.Component {
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
                            <div className="banner_content text-center">
                                <h2>Video_chat</h2>
                                <div className="page_link">
                                    <a href="index.html">Home</a>
                                    <a href="about.html">Video_chat</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Video_chat