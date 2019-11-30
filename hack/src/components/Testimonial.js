import React from 'react'

class Testimonial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="testimonial_area section_gap_bottom">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="main_title">
                                    <h2>clients say about Us</h2>
                                    {/* <p>Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast <br />
                                        beginning signs open god you're gathering ithe</p> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card-deck">
                                <div className="card mb-3" style={{ maxWidth: 540 }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src="img/naga.png" className="card-img" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="carid-title">Naga Sowmya Narayanan</h5>
                                                <p className="card-text">Learning MERN Stack. Aspiring Full Stack developer at Masai School.</p>
                                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3" style={{ maxWidth: 540 }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src="..." className="card-img" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Hrishabh Dubey</h5>
                                                <p className="card-text">Learning MERN Stack. Aspiring Full Stack developer at Masai School.</p>
                                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial