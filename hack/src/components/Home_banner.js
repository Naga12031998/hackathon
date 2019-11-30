import React from 'react'

//react-router-dom
import {Redirect} from "react-router-dom";

class Home_banner extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            flag : false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            flag : true
        })
    }

    render() {
        return(
            <div>
                <section className="home_banner_area">
                    <div className="banner_inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="banner_content">
                                        <h3 className="text-uppercase">Hello</h3>
                                        <h1 className="text-uppercase">I am Tele Tweet</h1>
                                        <h5 className="text-uppercase">Talk To Your Close One</h5>
                                        <div className="d-flex align-items-center">
                                            <button className="primary_btn" onClick={this.handleClick} style={{width : 310}}><span>Get Started</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="home_right_img">
                                        <img className="" src="img/banner/home-right.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    {this.state.flag? <Redirect to="/livemessage"/>:null}
                </div>
            </div>
        )
    }
}

export default Home_banner