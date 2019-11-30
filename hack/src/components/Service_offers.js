import React from 'react'

class Service_offers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <section className="features_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="main_title">
                                    <h2>service offers </h2>
                                    <p>
                                        Is give may shall likeness made yielding spirit a itself togeth created 
                                        after sea <br/> is in beast beginning signs open god you're gathering ithe
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row feature_inner">
                            <div className="col-lg-3 col-md-6">
                                <div className="feature_item">
                                    <img src="img/services/s1.png" alt=""/>
                                    <h4>Video Call</h4>
                                    <p>Watching Your love crying over a video call and all you coul. Enjoy it</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature_item">
                                    <img src="img/services/s2.png" alt=""/>
                                    <h4>Live Chat</h4>
                                    <p>Tele-tweets Click to Chat feature allows you to begin a chat with someone </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature_item">
                                    <img src="img/services/s3.png" alt=""/>
                                    <h4>Couple Board</h4>
                                    <p>What are the best conversations between your spouse?</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature_item">
                                    <img src="img/services/s4.png" alt=""/>
                                    <h4>Tweet update</h4>
                                    <p>Tweet update allows you to receive the updates posted by someone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Service_offers;