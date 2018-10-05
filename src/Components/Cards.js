import React, {Component} from 'react';

export default class Cards extends Component {
    render() {
        return (
            <div className="second-section">
                <div className="row mx-0">
                    <div className=" c0l-12 col-md-4 mx-auto">
                        <h5 className="d-flex justify-content-center">Latest Posts</h5>
                        <div className="nr pt-2"/>
                    </div>
                </div>
                <div className="row mx-0 box">
                    <div className=" col-sm-12 col-md-4 box d-flex align-items-center">
                        <div>
                            <div
                                className="card cc" style={{ width: '75%'}}>
                                <img className="card-img-top" src="./images/slide1.png" alt="Card image"/>
                                <div className="card-body">
                                    <h4 className="card-title">Find Great Places to Work While Travelling</h4>
                                    <p className="card-text">He seems sinking under the evidence could not only
                                        grieve and a visit. The father is to bless and placed in his length hid...
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More &nbsp;
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 box d-flex align-items-center">
                        <div className="cc">
                            <div
                                className="card cc"
                                style={{
                                width: '75%'
                            }}>
                                <img className="card-img-top" src="./images/slide2.png" alt="Card image"/>
                                <div className="card-body">
                                    <h4 className="card-title">Find Great Places to Work While Travelling
                                    </h4>
                                    <p className="card-text">He seems sinking under the evidence could not only
                                        grieve and a visit. The father is to bless and placed in his length hid...
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More &nbsp;
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 box d-flex align-items-center">
                        <div>
                            <div
                                className="card cc"
                                style={{
                                width: '75%'
                            }}>
                                <img className="card-img-top" src="./images/slide3.png" alt="Card image"/>
                                <div className="card-body">
                                    <h4 className="card-title">Find Great Places to Work While Travelling
                                    </h4>
                                    <p className="card-text">He seems sinking under the evidence could not only
                                        grieve and a visit. The father is to bless and placed in his length hid...
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More &nbsp;
                                        <i className="fa fa-long-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}