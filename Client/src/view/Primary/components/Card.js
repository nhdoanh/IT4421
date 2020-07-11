import React from 'react';
// import { Button, Layout } from 'element-react'
import { Row, Container, Col} from 'reactstrap';
import 'element-theme-default';
import '../../../App.css';
import axios from 'axios'
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/course")
            .then(res => console.log(res.data.JsonData[0].Grade))
            .catch(err => console.log(err))
    }
    
    render() {
     return (
        <>  
            {/* <div className="clearfix"></div> */}
            <Container className="clearfix" fluid={true}>
            <Row className="classBlock">
                <div className="col_5">
                    <div className="thumbnail">
                        <div className="className grade_1">
                            <h2 className="class-title">
                                <a href="/lop-1">Lớp<span>1</span>
                                </a>
                            </h2>
                        </div>
                        <div className="caption">
                            <p><a href="/toan-lop-1">
                                Toán <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                            </a>
                            </p>
                            <p>
                                <a href="/tieng-viet-lop-1">
                                    Tiếng Việt <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col_5">
                    <div className="thumbnail">
                        <div className="className grade_2">
                            <h2 className="class-title">
                                <a href="/lop-2">Lớp<span>2</span>
                                </a>
                            </h2>
                        </div>
                        <div className="caption">
                            <p><a href="/toan-lop-2">
                                Toán <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                            </a>
                            </p>
                            <p>
                                <a href="/tieng-viet-lop-2">
                                    Tiếng Việt <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col_5">
                    <div className="thumbnail">
                        <div className="className grade_3">
                            <h2 className="class-title">
                                <a href="/lop-3">Lớp<span>3</span>
                                </a>
                            </h2>
                        </div>
                        <div className="caption">
                            <p><a href="/toan-lop-3">
                                Toán <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                            </a>
                            </p>
                            <p>
                                <a href="/tieng-viet-lop-3">
                                    Tiếng Việt <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col_5">
                    <div className="thumbnail">
                        <div className="className grade_4">
                            <h2 className="class-title">
                                <a href="/lop-4">Lớp<span>4</span>
                                </a>
                            </h2>
                        </div>
                        <div className="caption">
                            <p><a href="/toan-lop-4">
                                Toán <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                            </a>
                            </p>
                            <p>
                                <a href="/tieng-viet-lop-4">
                                    Tiếng Việt <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col_5">
                    <div className="thumbnail">
                        <div className="className grade_5">
                            <h2 className="class-title">
                                <a href="/lop-5">Lớp<span></span>
                                </a>
                            </h2>
                        </div>
                        <div className="caption">
                            <p><a href="/toan-lop-5">
                                Toán <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                            </a>
                            </p>
                            <p>
                                <a href="/tieng-viet-lop-5">
                                    Tiếng Việt <i className="el-icon-arrow-right el-icon-right pull-right"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Row>
            </Container>
            </>
    )
}
}

export default Card;