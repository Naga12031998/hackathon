import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <footer className="footer_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="footer_top flex-column">
                                    <div className="footer_logo">
                                        <h4>Follow Us</h4>
                                    </div>
                                    <div className="footer_social">
                                        <h5>Naga Sowmya Narayanan</h5>
                                        <div className="mt-3">
                                            <a href="https://www.facebook.com/naga.sowmyanarayanan"><i className="fa fa-facebook"></i></a>
                                            <a href="https://twitter.com/sailesh40"><i className="fa fa-twitter"></i></a>
                                            <a href="https://www.linkedin.com/in/naga-sowmya-narayanan-bb592916b/"><i className="fa fa-linkedin"></i></a>
                                            <a href="https://github.com/Naga12031998"><i className="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                    <div className="footer_social">
                                        <h5>Hrishabh Dubey</h5>
                                        <div className="mt-3">
                                            <a href="https://www.facebook.com/rishabh2cool"><i className="fa fa-facebook"></i></a>
                                            <a href="https://twitter.com/rishabh48637933"><i className="fa fa-twitter"></i></a>
                                            <a href="https://www.linkedin.com/in/hrishabh-dubey-244bb712a/"><i className="fa fa-linkedin"></i></a>
                                            <a href="https://github.com/hrishabh8871"><i className="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p>copyright @ 2019 All rights reserved | This project is made by Naga Sowmya Narayanan & Hrishabh Dubey</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer