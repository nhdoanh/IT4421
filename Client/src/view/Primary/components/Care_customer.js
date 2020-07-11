import React from 'react';
import 'element-theme-default';
import '../css/CareCustomer.css';
import '../../../index.css';
import '../../../App.css';
import {Container, Row, Col} from 'reactstrap';

function CareCustomer() {
    return (
        <>
        <div className="clearfix"></div>
            <Container className="navigation" id="layout_navigation" fluid={true}>
                <Container className="customer">
                    <Row>
                            <Col md={6}>
                                <div className="fn-title">CHĂM SÓC KHÁCH HÀNG</div>
                                <Row className="org_row">
                                    <Col md={6}>
                                        <p className="text-left"><a href="/ho-tro"><b>Trung tâm Trợ giúp</b></a></p>
                                        <p className="text-left"><span className="gray">Email:</span> <a href="mailto:vuihoc.hotro@gmail.com">vuihoc.hotro@gmail.com</a>
                                        </p>
                                        <p className="text-left"><span className="gray">Đường dây nóng:</span> <a href="tel:0987 81 0990">0987 81 0990</a>
                                        </p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="text-left"><a href="/ho-tro/q/cac-hinh-thuc-thanh-toan-27">Hình thức Thanh toán</a>
                                        </p>
                                        <p className="text-left"><a href="/ho-tro/q/chinh-sach-doi-tra-khoa-hoc-20">Trả hàng &amp; Hoàn tiền</a>
                                        </p>
                                        <p className="text-left">
                                            <a href="/ho-tro/q/chinh-sach-bao-mat-28">
                                                Chính sách bảo mật
                                </a>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <div className="fn-title">VỀ VUIHOC</div>
                                <p className="text-left"><a href="/gioi-thieu.html">Giới thiệu về Vuihoc</a></p>
                                <p className="text-left"><a href="/lien-he.html"><i className="fa fa-building-o"></i>Liên hệ với Chúng tôi </a>
                                </p>
                                <p className="text-left"><a href="/sitemap.html">Sơ đồ trang web </a></p>
                                <p className="text-left hidden"><a href="/#">Tuyển dụng </a></p>
                                <p className="text-left hidden"><a href="/chinh-sach-bao-mat.html">Chính sách bảo mật</a></p>
                            </Col>
                            <Col md={3}>
                                <div className="fn-title">SÂN CHƠI</div>
                                <p className="text-left"><a href="/tin">Bảng tin trường học</a></p>
                                <p className="text-left"><a href="/do-vui">Thử tài đố vui</a></p>
                                <p className="text-left"><a href="/hoi-dap">Hỏi bài &amp; Chữa bài</a></p>
                            </Col>
                        </Row>
                </Container>
            </Container>
        </>
    )
}

export default CareCustomer;