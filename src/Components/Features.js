import React, {Component} from 'react';

export default class Features extends Component {
    render() {
        return (
            <div className="featuresheight">
                <div className="section position-relative" id="section">
                    <div className="row mx-0">
                        <div className=" col-sm-12 col-md-3 new ">
                            <img className="scnd-sec" src="./images/iphone-app-screenshot.png" width="280px/"/>
                        </div>
                        <div className=" col-sm-12 col-md-9 bg-white right-sec">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="my-5 col-sm-12 col-md-6 d-flex align-items-center">
                                    <div>
                                        <div className="title mx-4">
                                            <h4>Features</h4>
                                        </div>
                                        <div className="sec-top d-flex my-4">
                                            <div
                                                className=" col-3 col-md-3  d-flex justify-content-center align-items-baseline">
                                                <div className=" frst-sec d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-refresh fa-2x text-white" aria-hidden="true"/>
                                                </div>
                                            </div>
                                            <div className=" col-9 col-md-9 ">
                                                <h5>Sync</h5>
                                                <p>Sync just a few files or sync all your files.The file are continuously backed up in real time.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sec-top d-flex my-2">
                                            <div
                                                className=" col-3 col-md-3  d-flex justify-content-center align-items-baseline">
                                                <div className=" frst-sec d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-shield fa-2x text-white" aria-hidden="true"/>
                                                </div>
                                            </div>
                                            <div className=" col-9 col-md-9">
                                                <h5>Security</h5>
                                                <p>Invite specific people to access your files and control whether they can only view them or edit them too.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sec-top d-flex my-2">
                                            <div
                                                className="col-3 col-md-3 d-flex justify-content-center align-items-baseline">
                                                <div className=" frst-sec d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-share fa-2x text-white" aria-hidden="true"/>
                                                </div>
                                            </div>
                                            <div className=" col-9 col-md-9">
                                                <h5>Sharing</h5>
                                                <p>share files via using whatsapp, facebook and any social networking Apps.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sec-top d-flex my-2">
                                            <div
                                                className=" col-3 col-md-3  d-flex justify-content-center align-items-baseline">
                                                <div className=" frst-sec d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-globe fa-2x text-white" aria-hidden="true"/>
                                                </div>
                                            </div>
                                            <div className=" col-9 col-md-9 ">
                                                <h5>Access AnyWhere</h5>
                                                <p>Can access to your files from anywhere, from any PC, Mac, iOS, or Android device.Start editing a file on your office PC and finish it at home on your home Mac.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}