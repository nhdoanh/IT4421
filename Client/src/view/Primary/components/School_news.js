import React from 'react';
import 'element-theme-default';
import '../../../index.css';
import '../css/school_news.css';
import { Container, Row, Col } from 'reactstrap';

function SchoolNews() {
    return (
        <>
        {/* style={height: 150px} */}
        <div className="clearfix"></div>
        <Container className="school_news statistics bodyItem" fluid={true}>
            <Container>
                <Row>
                    <Col className="no-padding-col" xs={3}>
                        <div className="box">
                            <div className="counting">20.000+</div>
                            <div className="count-label">HỌC VIÊN</div>
                        </div>
                    </Col>
                    <Col className="no-padding-col" xs={3}>
                        <div className="box">
                            <div className="counting">2.000+</div>
                            <div className="count-label">BÀI GIẢNG</div>
                        </div>
                    </Col>
                    <Col className="no-padding-col" xs={3}>
                        <div className="box">
                            <div className="counting">60.000+</div>
                            <div className="count-label">BÀI ÔN TẬP</div>
                        </div>
                    </Col>
                    <Col className="no-padding-col" xs={3}>
                        <div className="box" style={{borderRight: "none"}}>
                            <div className="counting">2.000+</div>
                            <div className="count-label">ĐỀ LUYỆN THI</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
    )
}

export default SchoolNews;