import React from 'react';
import 'element-theme-default';
import '../css/Dovui.css';
import '../../../index.css';
import { Container, Row, Col } from 'reactstrap';
// Begin math 

function DoVui() {
    return (
        <>
        
            <div className="clearfix"></div>
            <Container className="fun_math bodyItem" id="fun_math_vue" fluid={true}>
                <Container className="math">
                    <Row>
                        <div className="head_title text-center">
                            <h2>ĐỐ VUI</h2>
                        </div>
                        <Row className="math">
                            <Col xs={4}>
                                <div className="thumbnail">
                                    <div className="content">
                                        <img className="img-responsive" alt="Đố vui vui hoc số 17" src="https://vuihoc.vn/upload/5c209fe6176b0/2019/10/31/4a/15/1.PNG" />
                                        <h3>
                                            <a href="/do-vui/do-vui-ky-7-17.html">Đố vui kỳ 7</a>
                                        </h3>
                                        <div className="main-quiz-content">Dáng hình cao ngất, chân gầy. Cổ cao vươn tận ngọn cây trong rừng. Nhưng hiền và tốt vô cùng. Chẳng ăn thịt cá chỉ tìm lá non. Đó là con gì?</div>
                                    </div>
                                    <div className="caption">
                                        <a href="/do-vui/do-vui-ky-7-17.html">
                                            <i className="far fa-eye"></i> Đọc tiếp...
                                    </a>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="thumbnail">
                                    <div className="content">
                                        <img className="img-responsive" alt="Đố vui vui hoc số 16" src="https://vuihoc.vn/upload/5c209fe6176b0/2019/10/24/9d/01/1.PNG" />
                                        <h3>
                                            <a href="/do-vui/do-vui-ky-6-16.html">Đố vui kỳ 6</a>
                                        </h3>
                                        <div className="main-quiz-content">Khổng minh nho nhỏ. Ngồi giữa trại quân. Dàn trận bát quái. Bắt địch đến gần. Đó là con gì?</div>
                                    </div>
                                    <div className="caption">
                                        <a href="/do-vui/do-vui-ky-6-16.html">
                                            <i className="far fa-eye"></i> Đọc tiếp...
                                    </a>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="thumbnail">
                                    <div className="content">
                                        <img className="img-responsive" alt="Đố vui vui hoc số 15" src="https://vuihoc.vn/upload/5c209fe6176b0/2019/10/19/dc/40/1.PNG" />
                                        <h3>
                                            <a href="/do-vui/do-vui-toan-hoc-ky-5-15.html">Đố vui Toán Học kỳ 5</a>
                                        </h3>
                                        <div className="main-quiz-content">Anh lính nọ đã nói gì để lính gác cho ra khỏi sân đường hoàng, vui vẻ?</div>
                                    </div>
                                    <div className="caption">
                                        <a href="/do-vui/do-vui-toan-hoc-ky-5-15.html">
                                            <i className="el-icon-eye"></i> Đọc tiếp...
                                    </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
// End math
export default DoVui;