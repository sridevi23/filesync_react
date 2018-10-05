import React, {Component} from 'react';

export default class Testimonials extends Component {
    render() {
        return (
            <div className="first-section">
                <div className="row mx-0">
                    <div className=" col-12 col-md-4"/>
                    <div className=" col-12 col-md-4">
                        <h5 className="d-flex justify-content-center">Testimonials</h5>
                        <div className="nr pt-2"/>
                    </div>
                    <div className=" col-12 col-md-4"/>
                </div>
                <div className="row mx-0">
                    <div
                        className=" col-sm-12 col-md-4 text-center fec d-flex align-items-center px-0">
                        <div>
                            <img
                                className="img1"
                                src="./images/avatar-1.jpeg"
                                width="100px"
                                height="100px/"/>
                            <h4>Obscure Tranter</h4>
                            <h6>CEO at Megacorp</h6>
                            <p>The best app i ever saw. Transfers SMS, videos, photos, contacts from an old phone.I recommend to use this app.</p>
                        </div>
                    </div>
                    <div
                        className=" col-sm-12 col-md-4 text-center fec d-flex align-items-center px-0">
                        <div>
                            <img
                                className="img1"
                                src="./images/avatar-2.jpeg"
                              
                                width="100px"
                                height="100px/"/>
                            <h4>Obscure Tranter</h4>
                            <h6>CEO at Megacorp</h6>
                            <p>The best app i ever saw. Transfers SMS, videos, photos, contacts from an old phone.I recommend to use this app.</p>
                        </div>
                    </div>
                    <div
                        className=" col-sm-12 col-md-4 text-center fec d-flex align-items-center px-0">
                        <div>
                            <img
                                className="img1"
                                src="./images/avatar-3.jpeg" 
                                width="100px"
                                height="100px/"/>
                            <h4>Obscure Tranter</h4>
                            <h6>CEO at Megacorp</h6>
                            <p>The best app i ever saw. Transfers SMS, videos, photos, contacts from an old phone.I recommend to use this app.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}