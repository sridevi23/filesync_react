import React, {Component} from 'react';

export default class Contactus extends Component {
    render() {
        return (
            <div className="last-sec py-5" id="sec">
                <div className="row mx-0">
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <h4>Contact Us</h4>
                            <div className="bb pt-2"/>
                        </div>
                    </div>
                    <div className="card lsc col-md-5 col-sm-12 col-12 mx-auto mt-4 ">
                        <div className="row py-3">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email address"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <label>Message</label>
                                <textarea className="form-control " rows={10} defaultValue={""}/>
                            </div>
                            <div className="col-12 d-flex justify-content-center mt-4">
                                <button type="button" className="btn sym text-white">Send Your Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}