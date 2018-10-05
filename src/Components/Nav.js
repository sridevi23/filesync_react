import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        return (

            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="#">
                            <img src="./images/shards-logo-green.svg"/>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active ">
                                    <a className="nav-link text-white" href="#">File Sync</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#section">Our Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#first-section">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#sec">Contact</a>
                                </li>
                            </ul>
                            <span className="navbar-text d-flex">
                                <li className="list-unstyled px-2">
                                    <a>
                                        <i className="fa fa-facebook white" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="list-unstyled px-2">
                                    <a>
                                        <i className="fa fa-twitter white" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="list-unstyled px-2">
                                    <a>
                                        <i className="fa fa-globe white" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="list-unstyled px-2">
                                    <a>
                                        <i className="fa fa-github white" aria-hidden="true"/>
                                    </a>
                                </li>
                            </span>
                        </div>
                    </nav>
                    <div className="row flex-row-reverse">
                        <div className=" col-sm-12 col-md-7 text-center">
                            <img src="./images/iphone-app-mockup.png " width="280px/" height="503px"/>
                        </div>
                        <div className=" col-sm-12 col-md-5">
                            <div className="new1 d-flex justidy-content-center align-items-center px-2">
                                <div>
                                    <h1 className=" text text-white">Keep Your Files Sync</h1>
                                    <p className="text-white">Sync just a few files or sync all your files.</p>
                                    <button className="btn btn-success">
                                        <i className="fa fa-download" aria-hidden="true"/>&nbsp;Download</button>
                                    <div className="py-3 sml">
                                        <img src="./images/badge-apple-store.png" height="40px/"/>
                                        <img
                                            className="mx-1"
                                            src="./images/badge-google-play-store.png"
                                            height="40px/"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}