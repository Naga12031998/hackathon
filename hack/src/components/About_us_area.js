import React from 'react'

//react-router-dom
import {Redirect} from "react-router-dom";

class About_us extends React.Component{
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
               <section className="about_area section_gap">
                    <div className="container">
                        <div className="row justify-content-start align-items-center">
                            <div className="col-lg-5">
                                <div className="about_img">
                                    <img className="" src="img/about-us.png" alt=""/>
                                </div>
                            </div>

                            <div className="offset-lg-1 col-lg-5">
                                <div className="main_title text-left">
                                    <h2>let’s <br />
                                        Introduce about <br />
                                        this project</h2>
                                    <p>
                                        Tele-tweet is a freeware, cross-platform messaging and Voice over IP service
                                    </p>
                                    <p>
                                        We created this project by using bootstrap, React, Canvas, Socket
                                    </p>
                                    <p>
                                        And one more interesting feature is that you can express your thoughts by drawing. 
                                    </p>
                                    <button className="primary_btn" onClick={this.handleClick} ><span>Go try it</span></button>
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

export default About_us;