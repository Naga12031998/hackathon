import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <header className="header_area" style={{marginBottom : 40}}>
                    <div className="main_menu">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <a className="navbar-brand logo_h" href="/"><h1>HOME</h1></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul class="nav navbar-nav menu_nav justify-content-end">
                                        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/videochat">Video Chat</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/livemessage">Live Message</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/coupleboard">Couple Board</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/contactus">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Navbar