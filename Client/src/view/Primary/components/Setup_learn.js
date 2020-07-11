import React from 'react';
import 'element-theme-default';
import '../../../index.css';
import { Container, Row, } from 'reactstrap';

function Setup() {
    return (
        <>
            <Container className="bodyItem join_vuihoc" fluid={true}>
                <Container>
                    <Row>
                        <div className="head_title text-center col-xs-12">
                            <h2>
                                THAM GIA <span className="hidden-xs">VUIHOC.VN</span> DỄ DÀNG <span className="hidden-xs">CHỈ</span> VỚI 4
                                BƯỚC
                </h2>
                        </div>
                        <div className="four-step col-xs-12">
                            <div className="step one col-xs-3">
                                <div className="header">
                                    <div className="title">Bước 1</div>
                                    <span className="el-icon-caret-bottom"></span>
                                </div>
                                <div className="content">
                                    <i className="el-icon-search"></i>
                                    <span>CHỌN KHÓA HỌC</span>
                                </div>
                            </div>
                            <div className="step two col-xs-3">
                                <div className="header">
                                    <div className="title">Bước 2</div>
                                    <span className="el-icon-caret-bottom"></span>
                                    <span className="el-icon-caret-right"></span>
                                </div>
                                <div className="content">
                                    <i className="fas fa-book-reader"></i>
                                    <span>HỌC THỬ MIỄN PHÍ</span>
                                </div>
                            </div>
                            <div className="step three col-xs-3">
                                <div className="header">
                                    <div className="title">Bước 3</div>
                                    <span className="el-icon-caret-bottom"></span>
                                    <span className="el-icon-caret-right"></span>
                                </div>
                                <div className="content">
                                    <i className="el-icon-wallet"></i>
                                    <span>NỘP HỌC PHÍ</span>
                                </div>
                            </div>
                            <div className="step four col-xs-3">
                                <div className="header">
                                    <div className="title">Bước 4</div>
                                    <span className="el-icon-caret-bottom"></span>
                                    <span className="el-icon-caret-right"></span>
                                </div>
                                <div className="content">
                                    <i className="el-icon-user-graduate"></i>
                                    <span>VÀO HỌC</span>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Setup;