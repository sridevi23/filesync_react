import React, {Component} from 'react';

export default class Newsletter extends Component {
    render() {
        return (
            <div className="form-sec">
                <div className="row mx-0">
                    <div className=" col-sm-12 col-md-2"/>
                    <div
                        className="col-sm-12 col-md-8 frmsc d-flex align-items-center justify-content-center text-center">
                        <div>
                            <h4 className="text-white">NewsLetter</h4>
                            <div className="nl pt-2"/>
                            <p className="text-white pt-2">Want the most interesting news from File Share app,Subscribe below to get our latest news and features my providing your mail id.</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <div
                                    className="form-group frmgrp d-flex justify-content-center align-items-center">
                                    <input type="password" className="form-control" placeholder="Email address"/>
                                    <button type="submit" className="btn btn-default text-white px-4">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class=" col-sm-12 col-md-2"></div> */}
                </div>
            </div>

        )
    }
}