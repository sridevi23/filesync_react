import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row mx-0 d-flex">
                    <div className=" col-sm-12 col-md-4">
                        <div className="row mx-0  ftr d-flex align-items-center">
                            <div className="col-3"/>
                            <div className=" col-sm-12 col-md-4 shrdagncy text-white">File Sync</div>
                            <div className="col-3"/>
                            <div className="col-2"/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <ul
                            className="d-flex ftr ftrx justify-content-center align-items-center f-column list-unstyled mb-0">
                            <li className="text-white">Home</li>
                            <li className="txt">Our Services</li>
                            <li className="txt">Blog</li>
                            <li className="txt">Testimonials</li>
                            <li className="txt">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}