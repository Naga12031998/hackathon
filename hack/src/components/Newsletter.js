import React from 'react'

class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        alert(`${this.state.email} - will get instant updates`)
        this.setState({
            email : ''
        })
    }

    render() {
        return(
            <div>
                <section className="newsletter_area">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-12">
                                <div className="subscription_box text-center">
                                    <h2 className="text-uppercase text-white">get update from anywhere</h2>
                                    <p className="text-white">
                                        New updates will follow you by just registering the below field.  
                                    </p>
                                    <div className="subcribe-form" id="mc_embed_signup">
                                        <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscription relative">
                                            <input onChange={this.handleChange} name="email" value={this.state.email} placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" required="" type="email"/>
                                            <div style={{position: "absolute", left: -5000}}>
                                                <input tabindex="-1" type="text"/>
                                            </div>
                                            <button className="primary-btn hover d-inline" onClick={this.handleClick}>Get Started</button>
                                            <div className="info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Newsletter