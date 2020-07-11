import React from 'react';
import { Row, Container, Col, Collapse } from 'reactstrap';
import './GocHocTap.css'
import '../../App.css'
import '../../index.css'

class GocHocTap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLesson: true,
        }
    }

    changeOpen = () => {
        const { showLesson } = this.state;
        this.setState({ showLesson: !showLesson });
    };

    render() {
        const { showLesson } = this.state;
        return (
            <Container class="news_article_sec" fluid={true}>
                <Container class="adjust-container-768">
                    <Row class="content-sheet">
                        <Col class="left" xs="8">
                            <div class="article">
                                <h1 class="title">Góc học tập</h1>
                                <div class="infor">
                                    <span>
                                        <span class="date"><i class="fas fa-clock"></i> 26/11/2019</span>
                                        <span class="seen"><i class="fas fa-flag"></i> 92</span>
                                    </span>
                                </div>
                                <hr />
                                <div id="blogPostContainer" class="blog_post_container">
                                    <Row>
                                        <Col md="6">
                                            <div class="blog_post trans_200">
                                                <div class="blog_post_images">
                                                    <img alt="Nội dung trọng tâm toán lớp 4 bảng đơn vị đo khối lượng" class="thumbnail" style={{ width: "100%" }} src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/26/8a/e4/toan-lop-4-bang-do-vi-do-khoi-luong.png" />
                                                </div>
                                                <div class="blog_post_body">
                                                    <div class="blog_post_title">
                                                        <h2>
                                                            <a href="/tin/toan-lop-4-bang-don-vi-do-khoi-luong-126">
                                                                Nội dung trọng tâm toán lớp 4 bảng đơn vị đo khối lượng                        </a>
                                                        </h2>
                                                    </div>
                                                    <div class="infor">
                                                        <span>
                                                            <span class="name">Lê Thị Vân</span> --
                        <span class="date"><i class="fas fa-clock"></i> 08:00 01/01/1970</span>
                                                            <span class="seen"><i class="fas fa-eye"></i> 10</span>
                                                        </span>
                                                    </div>
                                                    <p class="excerpt">
                                                        Toán lớp 4 bảng đơn vị đo độ dài là bài toán quan trọng, học sinh cần nắm được cách đổi các đơn vị&nbsp; đo khối lượng cùng các bài toán liên quan.</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div class="blog_post trans_200">
                                                <div class="blog_post_images">
                                                    <img alt="Bộ đề cương ôn tập toán lớp 4 học kỳ 2 năm học 2019 - 2020" class="thumbnail" style={{ width: "100%" }} src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/25/02/53/toan-lop-4-on-tap-hoc-ki-2.png" />
                                                </div>
                                                <div class="blog_post_body">
                                                    <div class="blog_post_title">
                                                        <h2>
                                                            <a href="/tin/de-cuong-on-tap-toan-lop-4-hoc-ky-2-125">
                                                                Bộ đề cương ôn tập toán lớp 4 học kỳ 2 năm học 2019 - 2020                        </a>
                                                        </h2>
                                                    </div>
                                                    <div class="infor">
                                                        <span>
                                                            <span class="name">Lê Thị Vân</span> --
                        <span class="date"><i class="fas fa-clock"></i> 05:13 25/11/2019</span>
                                                            <span class="seen"><i class="fas fa-eye"></i> 40</span>
                                                        </span>
                                                    </div>
                                                    <p class="excerpt">
                                                        Đề cương ôn tập toán lớp 4 học kỳ 2 sẽ giúp các em ôn tập lại các dạng toán trọng tâm cũng như các bài tập, luyện đề để đạt được kết quả tốt trong kỳ thi kết thúc học kỳ.</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <div class="clearfix"></div>
                                        <Col md="6">
                                            <div class="blog_post trans_200">
                                                <div class="blog_post_images">
                                                    <img alt="10 đề thi học kì 1 toán lớp 4 năm học 2019 - 2020" class="thumbnail" style={{ width: "100%" }} src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/21/8a/76/e-thi-hoc-ki-1-lop-4-mon-toan.png" />
                                                </div>
                                                <div class="blog_post_body">
                                                    <div class="blog_post_title">
                                                        <h2>
                                                            <a href="/tin/de-thi-hoc-ki-1-lop-4-mon-toan-124">
                                                                10 đề thi học kì 1 toán lớp 4 năm học 2019 - 2020                        </a>
                                                        </h2>
                                                    </div>
                                                    <div class="infor">
                                                        <span>
                                                            <span class="name">Lê Thị Vân</span> --
                        <span class="date"><i class="fas fa-clock"></i> 16:55 21/11/2019</span>
                                                            <span class="seen"><i class="fas fa-eye"></i> 230</span>
                                                        </span>
                                                    </div>
                                                    <p class="excerpt">
                                                        Nội dung chính của đề thi học kì 1 lớp 4 môn toán. Là các bài toán về số tự nhiên, trung bình cộng, các đơn vị đo đại lượng, độ dài.</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div class="blog_post trans_200">
                                                <div class="blog_post_images">
                                                    <img alt="Tổng hợp bài toán lớp 4 đặt tính rồi tính" class="thumbnail" style={{ width: "100%" }} src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/19/51/de/toan-lop-4-dat-tinh-roi-tinh-1.png" />
                                                </div>
                                                <div class="blog_post_body">
                                                    <div class="blog_post_title">
                                                        <h2>
                                                            <a href="/tin/toan-lop-4-dat-tinh-roi-tinh-123">
                                                                Tổng hợp bài toán lớp 4 đặt tính rồi tính                        </a>
                                                        </h2>
                                                    </div>
                                                    <div class="infor">
                                                        <span>
                                                            <span class="name">Lê Thị Vân</span> --
                        <span class="date"><i class="fas fa-clock"></i> 16:00 21/11/2019</span>
                                                            <span class="seen"><i class="fas fa-eye"></i> 163</span>
                                                        </span>
                                                    </div>
                                                    <p class="excerpt">
                                                        Toán lớp 4 đặt tính rồi tính là dạng bài tập tính toán của các phép tính nhân, chia, cộng, trừ. Cùng vuihoc.vn học bài toán này nhé!</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <div class="clearfix"></div>
                                        <Col md="6">
                                            <div class="blog_post trans_200">
                                                <div class="blog_post_images">
                                                    <img alt="Hệ thống kiến thức toán lớp 4 hình học" class="thumbnail" style={{ width: "100%" }} src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/15/7d/5f/toan-lop-4-hinh-hoc-1.png" />
                                                </div>
                                                <div class="blog_post_body">
                                                    <div class="blog_post_title">
                                                        <h2>
                                                            <a href="/tin/toan-lop-4-hinh-hoc-122">
                                                                Hệ thống kiến thức toán lớp 4 hình học                        </a>
                                                        </h2>
                                                    </div>
                                                    <div class="infor">
                                                        <span>
                                                            <span class="name">Nguyễn Thu Hương</span> --
                        <span class="date"><i class="fas fa-clock"></i> 14:56 16/11/2019</span>
                                                            <span class="seen"><i class="fas fa-eye"></i> 108</span>
                                                        </span>
                                                    </div>
                                                    <p class="excerpt">
                                                        Toán lớp 4 hình học là phần kiến thức quan trọng trong chương trình học của trẻ.</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div class="blog_post trans_200">
                                                <div class="blog_post_images">
                                                    <img alt="Học bài tốt bài toán lớp 4 chia cho số có 2 chữ số" class="thumbnail" style={{ width: "100%" }} src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/15/52/6e/toan-lop-4-chia-cho-so-co-2-chu-so-8.png" />
                                                </div>
                                                <div class="blog_post_body">
                                                    <div class="blog_post_title">
                                                        <h2>
                                                            <a href="/tin/toan-lop-4-chia-cho-so-co-2-chu-so-121">
                                                                Học bài tốt bài toán lớp 4 chia cho số có 2 chữ số                        </a>
                                                        </h2>
                                                    </div>
                                                    <div class="infor">
                                                        <span>
                                                            <span class="name">Lê Thị Vân</span> --
                        <span class="date"><i class="fas fa-clock"></i> 08:00 01/01/1970</span>
                                                            <span class="seen"><i class="fas fa-eye"></i> 160</span>
                                                        </span>
                                                    </div>
                                                    <p class="excerpt">
                                                        Toán lớp 4 chia cho số có 2 chữ số học sinh tiếp tục được làm quen với phép tính chia và các bài tập vận dụng của phép chia.</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <div class="clearfix"></div>
                                        <Col md="6">
                                            <div class="blog_post trans_200">
                                                <div class="blog_post_images">
                                                    <img alt="Khám phá toán Singapore - mô hình toán tư duy số 1 thế giới!" class="thumbnail" style={{ width: "100%" }} src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/14/c9/1d/toan-singapore-1.png" />
                                                </div>
                                                <div class="blog_post_body">
                                                    <div class="blog_post_title">
                                                        <h2>
                                                            <a href="/tin/toan-singapore-120">
                                                                Khám phá toán Singapore - mô hình toán tư duy số 1 thế giới!                        </a>
                                                        </h2>
                                                    </div>
                                                    <div class="infor">
                                                        <span>
                                                            <span class="name">Nguyễn Thu Hương</span> --
                        <span class="date"><i class="fas fa-clock"></i> 08:00 01/01/1970</span>
                                                            <span class="seen"><i class="fas fa-eye"></i> 120</span>
                                                        </span>
                                                    </div>
                                                    <p class="excerpt">
                                                        Bài viết dưới đây sẽ chia sẻ các thông tin liên quan đến toán Singapore và lý giải tại sao trẻ nên được học toán bằng phương pháp này.</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div class="blog_post trans_200">
                                                <div class="blog_post_images">
                                                    <img alt="Hệ thống kiến thức toán lớp 4 ôn tâp về đại lượng" class="thumbnail" style={{ width: "100%" }} src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/13/5f/a9/toan-lop-4-tim-x-1.png" />
                                                </div>
                                                <div class="blog_post_body">
                                                    <div class="blog_post_title">
                                                        <h2>
                                                            <a href="/tin/toan-lop-4-on-tap-ve-dai-luong-119">
                                                                Hệ thống kiến thức toán lớp 4 ôn tâp về đại lượng                        </a>
                                                        </h2>
                                                    </div>
                                                    <div class="infor">
                                                        <span>
                                                            <span class="name">Lê Thị Vân</span> --
                        <span class="date"><i class="fas fa-clock"></i> 14:11 13/11/2019</span>
                                                            <span class="seen"><i class="fas fa-eye"></i> 141</span>
                                                        </span>
                                                    </div>
                                                    <p class="excerpt">
                                                        Toán lớp 4 ôn tập về đại lượng là bài học hệ thống kiến thức cần nhớ và các dạng bài tập thường gặp giúp học sinh củng cố kiến thức.</p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <div class="clearfix"></div>

                                    </Row>
                                </div>

                                <ul class="pagination pagination_js pagination-large">
                                    <li class="page-item active">
                                        <a class="page-link" value="1" href="javascript:void(0)">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" value="2" href="/tin?page=2">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" value="3" href="/tin?page=3">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link disabled" disabled="">...</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" value="2" href="/tin?page=3">Trang sau</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col class="right" xs="4">
                            <div class="news-box">
                                <div class="box-title">Bài khác</div>
                                <ul class="nav nav-tabs">
                                    <li class="active">
                                        <a data-toggle="tab" href="#most-view" aria-expanded="true">Nhiều lượt xem</a>
                                    </li>
                                    <li class="">
                                        <a data-toggle="tab" href="#last-new" aria-expanded="false">Bài mới nhất</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="most-view" class="tab-pane fade active in">
                                        <ul class="news-list">
                                            <li class="top-news">
                                                <img class="img-responsive" alt="Nội dung trọng tâm toán lớp 4 bảng đơn vị đo khối lượng" src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/26/8a/e4/toan-lop-4-bang-do-vi-do-khoi-luong.png" />
                                                <div class="article-title">
                                                    <a href="/tintoan-lop-4-bang-don-vi-do-khoi-luong-126">Nội dung trọng tâm toán lớp 4 bảng đơn vị đo khối lượng</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tinde-cuong-on-tap-toan-lop-4-hoc-ky-2-125">Bộ đề cương ôn tập toán lớp 4 học kỳ 2 năm học 2019 - 2020</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tinde-thi-hoc-ki-1-lop-4-mon-toan-124">10 đề thi học kì 1 toán lớp 4 năm học 2019 - 2020</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tintoan-lop-4-dat-tinh-roi-tinh-123">Tổng hợp bài toán lớp 4 đặt tính rồi tính</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tintoan-lop-4-hinh-hoc-122">Hệ thống kiến thức toán lớp 4 hình học</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tintoan-lop-4-chia-cho-so-co-2-chu-so-121">Học bài tốt bài toán lớp 4 chia cho số có 2 chữ số</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tintoan-singapore-120">Khám phá toán Singapore - mô hình toán tư duy số 1 thế giới!</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tintoan-lop-4-on-tap-ve-dai-luong-119">Hệ thống kiến thức toán lớp 4 ôn tâp về đại lượng</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="last-new" class="tab-pane fade">
                                        <ul class="news-list">
                                            <li class="top-news">
                                                <img class="img-responsive" alt="Bài học toán lớp 4 tính giá trị của biểu thức" src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/09/5b/1e/toan-lop-4-tinh-gia-tri-cua-bieu-thuc.png" />                                        <div class="article-title">
                                                    <a href="/tin/toan-lop-4-tinh-gia-tri-bieu-thuc-118.html">Bài học toán lớp 4 tính giá trị của biểu thức</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tin/toan-lop-4-hang-va-lop-117.html">Nội dung kiến thức toán lớp 4 hàng và lớp</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tin/toan-lop-4-ti-le-ban-do-116.html">Phương pháp giải các dạng toán lớp 4 tỉ lệ bản đồ</a>
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="article-title">
                                                    <a href="/tin/toan-lop-4-day-so-tu-nhien-115.html">Giới thiệu bài toán lớp 4 dãy số tự nhiên</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="banner">
                                <img alt="Banner tin tức" class="img-responsive" src="/assets/imgs/news/banner.png" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

        )
    }
}

export default GocHocTap;