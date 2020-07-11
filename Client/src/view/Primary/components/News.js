import React from 'react';
import 'element-theme-default';
import '../../../index.css';
import '../css/News.css';
import { Container, Row, Col } from 'reactstrap';

function News() {
    return (
        <Container className="news_home bodyItem" fluid={true} style={{ background: 'white url(/theme/vuihoc/imgs/big_cloud-1.png)', backgroundPosition: '0 450px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Container className="hoctap">
                <Row>
                    <div className="head_title">
                        <a href="/tin">
                            <h2>Góc học tập</h2>
                        </a>
                    </div>
                    <Row>
                        <Col className="left" xs={5}>
                            <div className="headline top-news">
                                <img className="img-responsive" src="https://vuihoc.vn/upload/5c209fe6176b0/2019/10/30/ae/ed/toan-lop-4-hai-duong-thang-song-song-1.png" alt="Hướng dẫn học toán lớp 4 hai đường thẳng song song" />
                                <h3 className="title">
                                    <a href="/tin/toan-lop-4-hai-duong-thang-song-song-112.html">Hướng dẫn học toán lớp 4 hai đường thẳng song song</a>
                                </h3>
                                <span className="date">
                                    <i className="fas fa-clock"></i>
                                    30/10/2019 17:05
                                </span>
                                <p className="excerpt">Toán lớp 4 hai đường thẳng song song là một bài học quan trọng giúp phát triển tư duy hình học của trẻ.</p>
                            </div>
                        </Col>
                        <Col className="right" xs={7}>
                                <div className="headline news">
                                    <h3 className="title">
                                        <a href="/tin/toan-lop-4-hai-duong-thang-vuong-goc-111.html">Giúp con học tốt toán lớp 4 hai đường thẳng vuông góc</a>
                                    </h3>
                                    <span className="date">
                                        <i className="fas fa-clock"></i> 30/10/2019 16:55                            </span>
                                    <p className="excerpt">Toán lớp 4 hai đường thẳng vuông góc là một bài học quan trọng nhằm phát triển tư duy hình học của trẻ.</p>
                                </div>
                                <div className="headline news">
                                    <h3 className="title">
                                        <a href="/tin/toan-lop-4-nhan-voi-so-co-hai-chu-so-110.html">Các bước làm bài toán lớp 4 nhân với số có hai chữ số</a>
                                    </h3>
                                    <span className="date">
                                        <i className="fas fa-clock"></i> 26/10/2019 03:33                            </span>
                                    <p className="excerpt">Đối với bài toán lớp 4 nhân với số có hai chữ số, học sinh vẫn còn gặp nhiều khó khăn khi nhớ các bước thực hiện tính toán.</p>
                                </div>
                                <div className="headline news">
                                    <h3 className="title">
                                        <a href="/tin/toan-lop-4-ki-lo-met-vuong-109.html">Giúp con học tốt&nbsp; toán lớp 4 ki lô mét vuông</a>
                                    </h3>
                                    <span className="date">
                                        <i className="fas fa-clock"></i> 24/10/2019 14:05                            </span>
                                    <p className="excerpt">Trong bài học hôm nay, Vuihoc.vn sẽ chia sẻ về toán lớp 4 ki lô mét vuông, cùng tham khảo nhé!</p>
                                </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Container>
    )
}

export default News;