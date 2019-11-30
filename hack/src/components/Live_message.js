import React from 'react'

//components
import Navbar from './Navbar';

class Live_message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            roomno: '',
            message : '',
            status: true
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInputChange = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    handleSend = (e) => {
        e.preventDefault()
        alert(`${this.state.message}`)
        this.setState({
            message : ''
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        // alert(`${this.state.username} ${this.state.roomno}`)
        if(this.state.username == '') {
            this.setState({
                status : true
            })
            alert('Please fill the required fields')
        }
        else if(this.state.roomno == '') {
            this.setState({
                status : true
            })
            alert('Please fill the required fields')
        }
        else {
            this.setState({
                username: '',
                roomno: '',
                status: false
            })
        }
    }

    render() {
        return (
           <div>
            <Navbar />
                {this.state.status ? (
                    <div>
                        <section className="newsletter_area">
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-12">
                                        <div className="subscription_box text-center">
                                            <h2 className="text-uppercase text-white">Just fill-in the data and join</h2>
                                            <div className="subcribe-form" id="mc_embed_signup">
                                                <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscription relative">
                                                    <input className='mt-3' onChange={this.handleChange} name="username" value={this.state.username} placeholder="User Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'User Name'" required="" type="text"/><br />
                                                    <input className='mt-3' onChange={this.handleChange} name="roomno" value={this.state.roomno} placeholder="Room No" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Room no'" required="" type="text"/><br />
                                                    <div style={{position: "absolute", left: -5000}}>
                                                        <input tabindex="-1" type="text"/>
                                                    </div>
                                                    <button className="primary-btn hover d-inline mt-3" onClick={this.handleClick}>Join</button>
                                                    <div className="info"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ) : (
                    <section className="newsletter_area">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-12">
                                    <div className="subscription_box text-center">
                                        <div className="card grey lighten-3 chat-room">
                                            <div className="card-body">
                                                <div className="row px-lg-2 px-2">
                                                    <div className="col-md-6 col-xl-4 px-0">
                                                        <h6 className="font-weight-bold mb-3 text-center text-lg-left">Members</h6>
                                                        <div className="white z-depth-1 px-3 pt-3 pb-0">
                                                            <ul className="list-unstyled friend-list">
                                                                <li className="p-2">
                                                                    <a href="#" className="d-flex justify-content-between">
                                                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                                                                        <div className="text-small">
                                                                            <strong>Ashley Olsen</strong>
                                                                            <p className="last-message text-muted">I had lunch</p>
                                                                        </div>
                                                                        <div className="chat-footer">
                                                                            <p className="text-smaller text-muted mb-0">Yesterday</p>
                                                                            <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="p-2">
                                                                    <a href="#" className="d-flex justify-content-between">
                                                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                                                                        <div className="text-small">
                                                                            <strong>Kate Moss</strong>
                                                                            <p className="last-message text-muted">I am planning to go for a movie</p>
                                                                        </div>
                                                                        <div className="chat-footer">
                                                                            <p className="text-smaller text-muted mb-0">Yesterday</p>
                                                                            <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="p-2">
                                                                    <a href="#" className="d-flex justify-content-between">
                                                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                                                                        <div className="text-small">
                                                                            <strong>Lara Croft</strong>
                                                                            <p className="last-message text-muted">Bye</p>
                                                                        </div>
                                                                        <div className="chat-footer">
                                                                            <p className="text-smaller text-muted mb-0">Yesterday</p>
                                                                            <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="p-2">
                                                                    <a href="#" className="d-flex justify-content-between">
                                                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                                                                        <div className="text-small">
                                                                            <strong>Brad Pitt</strong>
                                                                            <p className="last-message text-muted">Good night</p>
                                                                        </div>
                                                                        <div className="chat-footer">
                                                                            <p className="text-smaller text-muted mb-0">5 min ago</p>
                                                                            <span className="text-muted float-right"><i className="fas fa-check" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0">
                                                        <div className="chat-message">
                                                            <ul className="list-unstyled chat">
                                                                <li className="d-flex justify-content-between mb-4">
                                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" className="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"/>
                                                                    <div className="chat-body white p-3 ml-2 z-depth-1">
                                                                        <div className="header">
                                                                            <strong className="primary-font">Brad Pitt</strong>
                                                                            <small className="pull-right text-muted"><i className="far fa-clock"></i> 12 mins ago</small>
                                                                        </div>
                                                                            <p className="mb-0" style={{color : 'black'}}>
                                                                               Hai
                                                                            </p>
                                                                    </div>
                                                                </li>
                                                                <li className="d-flex justify-content-between mb-4">
                                                                    <div className="chat-body white p-3 z-depth-1">
                                                                        <div className="header">
                                                                            <strong className="primary-font">Lara Croft</strong>
                                                                            <small className="pull-right text-muted"><i className="far fa-clock"></i> 13 mins ago</small>
                                                                        </div>
                                                                            <p className="mb-0" style={{color : 'black'}}>
                                                                               Hello
                                                                            </p>
                                                                        
                                                                    </div>
                                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" className="avatar rounded-circle mr-0 ml-3 z-depth-1"/>
                                                                </li>
                                                                <li className="d-flex justify-content-between mb-4 pb-3">
                                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" className="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"/>
                                                                    <div className="chat-body white p-3 ml-2 z-depth-1">
                                                                        <div className="header">
                                                                            <strong className="primary-font">Brad Pitt</strong>
                                                                            <small className="pull-right text-muted"><i className="far fa-clock"></i> 12 mins ago</small>
                                                                        </div>
                                                                        <p className="mb-0" style={{color : 'black'}}>
                                                                            Had your lunch?
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li className="white">
                                                                    <div className="form-group basic-textarea">
                                                                        <textarea onChange={this.handleInputChange} name="message" value={this.state.message} className="form-control pl-2 my-0" id="exampleFormControlTextarea2" rows="3" placeholder="Type your message here..."></textarea>
                                                                    </div>
                                                                </li>
                                                                <button type="button" className="btn btn-info btn-rounded btn-sm waves-effect waves-light float-right" onClick={this.handleSend}>Send</button>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                
           </div>
        )
    }
}

export default Live_message;