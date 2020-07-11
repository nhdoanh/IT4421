import React from 'react';
import { Row, Container, Col, Collapse } from 'reactstrap';
import '../Primary/css/Khoahoc.css'
import '../../App.css'
import '../../index.css'

class KhoaHocTot extends React.Component {
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

            <div className="study-wrapper" style={{ transform: "none" }}>
                <Container className="breadcrumb_sec course_detail_sec canbe-blur" fluid={true}>
                    <Row className="breadcrumbBar">
                        <Container>
                            <Row>
                                <ol className="breadcrumb">
                                    <li><a href="/"><span><i className="fas fa-home"></i></span></a></li>
                                    <li>
                                        <a href="/toan-lop-1"><span>Toán lớp 1</span></a>
                                    </li>
                                    <li>
                                        <span>Khóa học tốt Toán 1</span>
                                    </li>
                                </ol>
                            </Row>
                        </Container>
                    </Row>

                    <Row className="headingBackground">
                        <Container className="adjust-container-768">
                            <Row>
                                <h1>Khóa học tốt Toán 1</h1>
                            </Row>
                        </Container>
                    </Row>
                </Container>
                <div id="course_detail_vue" className="canbe-blur" style={{ transform: "none" }}>
                    <Container className="course_detail_sec" fluid={true} style={{ transform: "none" }}>
                        <Container className="adjust-container-768 sticky-container" style={{ transform: "none" }}>
                            <Row style={{ transform: "none" }}>
                                <Col className="right leftSidebar col-md-push-8" md={{ size: 4,}} style={{ position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px' }}>
                                    <div className="tray theiaStickySidebar" style={{ paddingTop: '0px', paddingBottom: '1px', position: 'static', transform: 'none', width: '370px' }}>
                                        <div className="thumbnail">
                                            <Row>
                                                <Col md={12} sm={6}>
                                                    <div className="cover">
                                                        <img alt="Khóa học tốt Toán 1" src="https://vuihoc.vn/upload/5c209fe6176b0/2019/05/27/47/4d/1d10ea78394fa7af7041adb601e0eecd.png" className="img-responsive" style={{ width: "100%" }} />
                                                    </div>
                                                </Col>
                                                <Col md={12} sm={6}>
                                                    <div className="content">
                                                        <p className="old-price">
                                                            <span>
                                                                <span className="line-through">

                                                                </span>
                                                                <span>750.000</span>
                                                                <span className="currency">₫</span>
                                                            </span>
                                                        </p>
                                                        <p className="new-price">
                                                            <span>Chỉ còn</span>
                                                            <span className="price">560.000
                                                <span className="currency">₫</span>
                                                            </span>
                                                        </p>
                                                        <p className="remaining">
                                                            <i className="fas fa-clock"></i>
                                                            <span>Chỉ còn nốt 2 ngày</span>
                                                        </p>
                                                        <a onClick="courseAdviceModal.showModal()" className="action-btn">
                                                            <span><i className="fas fa-headphones"></i></span>
                                                            <span>TƯ VẤN THÊM</span>
                                                        </a>
                                                        <a href="/toan-lop-1/khoa-hoc-tot-toan-1-2/dang-ky" className="action-btn">
                                                            <span><i className="fas fa-user-edit"></i></span>
                                                            <span>ĐĂNG KÝ HỌC</span>
                                                        </a>
                                                    </div>
                                                </Col>
                                                <div className="col-xs-12">
                                                    <div className="detail">
                                                        <p><strong>Mục tiêu khóa học</strong></p>
                                                        <ul>
                                                            <li>HIỂU SÂU 100% kiến thức Toán 1</li>
                                                            <li>Phát triển tư duy cả 2 bán cầu não</li>
                                                            <li>Khơi dậy đam mê Toán học từ nhỏ</li>
                                                        </ul>
                                                        <p><strong>Thời gian học</strong></p>
                                                        <ul>
                                                            <li>12 tháng kể từ ngày kích hoạt&nbsp;</li>
                                                        </ul>
                                                        <p><strong>Cấu trúc khóa học </strong></p>
                                                        <ul>
                                                            <li>20 clip hoạt hoạ</li>
                                                            <li>70 clip bài giảng sinh động&nbsp;</li>
                                                            <li>1500 câu hỏi luyện tập</li>
                                                            <li>30 đề thi thử</li>
                                                        </ul>
                                                        <p><strong>Hỗ trợ</strong></p>
                                                        <ul>
                                                            <li>Luôn có thầy cô trợ giảng trợ giúp trong vòng 20 phút&nbsp;</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                        <div className="resize-sensor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', zIndex: '-1', visibility: 'hidden' }}>
                                            <div className="resize-sensor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', zIndex: '-1', visibility: 'hidden' }}>
                                                <div style={{ position: 'absolute', left: '0px', top: '0px', transition: 'all 0s ease 0s', width: '380px', height: '893px' }}></div>
                                            </div>
                                            <div className="resize-sensor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', zIndex: '-1', visibility: 'hidden' }}>
                                                <div style={{ position: 'absolute', left: '0', top: '0', transition: '0s', width: '200%', height: '200%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <div className="sticky-left left col-xs-8 col-md-pull-4">
                                    <div className="banner-img">
                                        <img alt="Banner của Khóa học tốt Toán 1" src="https://vuihoc.vn/upload/5c209fe6176b0/2019/11/05/cd/68/lo-trinh-hoc-tot-toan-1.png" className="img-responsive thumbnail" style={{ borderRadius: '10px', marginBottom: '20px', width: '100%' }} />
                                    </div>
                                    <div className="sticky-bar" style={{ width: '780px', position: 'inherit', top: 'inherit', marginBottom: '0px', boxShadow: 'none' }}>
                                        <div className="input-group search-group">
                                            <a href="#course-info" className="input-group-addon">
                                                THÔNG TIN KHÓA HỌC
                                </a>
                                            <a href="#course-syllabus" className="input-group-addon">CHƯƠNG TRÌNH HỌC</a>
                                            <a className="input-group-addon search"><i className="fas fa-search"></i></a>
                                        </div>
                                        <form className="search-form">
                                            <div className="form-group">
                                                <div className="input-icon">
                                                    <input type="text" name="keyword" placeholder="Tìm kiếm bài học" value="keyword" />
                                                </div>
                                            </div>
                                            <a type="button" className="btn-close">
                                                <i className="fa fa-times"></i>
                                            </a>
                                            <button type="button" className="btn btn-search">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div id="course-info" className="course-info">
                                        <h3 className="title">Thông tin khóa học</h3>
                                        <div className="info">
                                            <div className="course-content">
                                                <p>Khoá học tốt Toán 1&nbsp;sử dụng phương pháp giảng dạy tiên tiến&nbsp;
                                <strong>VSA</strong>
                                                    (Visual -&gt; Self-Practice --&gt; Assesment, tức là&nbsp;
                                 <strong>
                                                        <em>Giảng dạy kèm minh hoạ --&gt; Tự luyện bài --&gt; Đánh giá chấm điểm</em>
                                                    </strong>)
                                                    , giúp các con học Toán bằng cách hiểu bản chất, ghi nhớ kiến thức một cách tự nhiên.
                                 </p>
                                                <p><strong>Lợi ích của khóa học</strong></p>
                                                <ul>
                                                    <li>Giúp các con <strong>HIỂU SÂU, NHỚ LÂU</strong> toàn bộ kiến thức toán 1</li>
                                                    <li>Kích thích phát triển cả 2 bán cầu NÃO TRÁI và NÃO PHẢI, rèn luyện cả óc tưởng tượng lẫn tư duy logic</li>
                                                    <li>Học hiểu bản chất, ghi nhớ tự nhiên</li>
                                                    <li>Khơi dậy niềm đam mê Toán học ngay từ nhỏ</li>
                                                </ul>
                                                <p>&nbsp;<strong>Cấu trúc khoá học</strong></p>
                                                <ul>
                                                    <li>20 clip hoạt hoạ</li>
                                                    <li>70&nbsp;clip bài giảng minh hoạ thực tế, giảng dạy bởi cô Phạm Hồng Nhung</li>
                                                    <li>1500 câu hỏi luyện tập</li>
                                                    <li>30 đề thi thử</li>
                                                </ul>
                                                <p><strong>Thời gian học</strong></p>
                                                <ul>
                                                    <li>Học mọi lúc mọi nơi trong vòng 12 tháng kể từ ngày kích hoạt đăng kí học</li>
                                                    <li>Từ 1.6.2019: phụ huynh đã mua Khoá học tốt toán 1&nbsp;sẽ được kích hoạt thêm Khoá học tốt Toán 2</li>
                                                </ul>
                                                <p><strong>Hỗ trợ</strong></p>
                                                <ul>
                                                    <li>Luôn có thầy cô trợ giảng trợ giúp trong vòng 20 phút&nbsp;</li>
                                                </ul>
                                            </div>
                                            <a href="#">
                                                <span className="showMoreBtn">
                                                    Xem thêm <i className="fas fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div id="course-syllabus" className="course-syllabus">
                                        <h2 className="title">Chương trình học</h2>
                                        <form action="" className="search-box">
                                            <div className="form-field-container">
                                                <i className="fas fa-search"></i>
                                                <input name="keyword" type="text" value="" placeholder="Tìm kiếm bài học" />
                                            </div>
                                        </form>
                                        <div className="syllabus">
                                            <div className="syllabus-box sectionCategoryItem freeItems">
                                                <h3 onClick={this.changeOpen} className="heading">
                                                    Bài giảng miễn phí
                                                    <i className="fas fa-chevron-down"></i>
                                                </h3>
                                                <Collapse isOpen={showLesson}>
                                                    <ul id="freeChapter" className="lesson-list" style={{ height: '15px' }}>
                                                        <li className="completed lesson-item sectionItem">
                                                            <div className="item">
                                                                <div className="connect-line"></div>
                                                                <div className="progress-icon completed">
                                                                    <i className="freeLesson"></i>
                                                                </div>
                                                                <div id="hoclieu_item_lesson_video_673" title="Số 0 trong phép trừ" data-id="673" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-673" className="title sectionTitle lesson_item lesson_item_lesson_video">
                                                                    <p>Số 0 trong phép trừ <i className="far fa-play-circle"></i></p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="completed lesson-item sectionItem">
                                                            <div className="item">
                                                                <div className="connect-line"></div>
                                                                <div className="progress-icon completed">
                                                                    <i className="freeLesson"></i>
                                                                </div>
                                                                <div id="hoclieu_item_lesson_video_695" title="Điểm. Đoạn thẳng" data-id="695" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-695" className="title sectionTitle lesson_item lesson_item_lesson_video">
                                                                    <p>Điểm. Đoạn thẳng <i className="far fa-play-circle"></i></p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </Collapse>
                                            </div>
                                            <div id="section_category_164" className="syllabus-box sectionCategoryItem">
                                                <h3 id="sectionCategory164" className="heading">
                                                    Bài học tuần 1 (04/09 - 10/09)
                                        <i className="fas fa-chevron-down"></i>
                                                </h3>
                                                <ul id="chapter0" aria-expanded="false" className="lesson-list" style={{ height: "15px" }}>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Nhiều hơn, ít hơn (hoạt họa)</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_lesson_video_446" title="Nhiều hơn, ít hơn (hoạt họa)" data-id="446" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-446" className="lesson_item lesson_item_lesson_video">
                                                                    <i className="far fa-play-circle"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_lesson_video_446" title="Nhiều hơn, ít hơn (hoạt họa)" data-id="446" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-446" className="lesson_item lesson_item_lesson_video">
                                                                <i className="far fa-play-circle"></i>
                                                                Bài giảng
                                                </button>
                                                        </div>
                                                    </li>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Nhiều hơn, ít hơn</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_lesson_video_527" title="Nhiều hơn, ít hơn" data-id="527" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-527" className="lesson_item lesson_item_lesson_video">
                                                                    <i className="far fa-play-circle"></i>
                                                                </button>
                                                                <button type="button" id="hoclieu_item_revise_1130" title="Toán 1 - Nhiều hơn, ít hơn" data-id="1130" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/on-tap-1130" className="lesson_item lesson_item_revise">
                                                                    <i className="far fa-edit"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_lesson_video_527" title="Nhiều hơn, ít hơn" data-id="527" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-527" className="lesson_item lesson_item_lesson_video">
                                                                <i className="far fa-play-circle"></i>
                                                                Bài giảng
                                                </button>
                                                            <button type="button" id="hoclieu_item_revise_1130" title="Toán 1 - Nhiều hơn, ít hơn" data-id="1130" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/on-tap-1130" className="lesson_item lesson_item_revise">
                                                                <i className="far fa-edit"></i>
                                                                Luyện tập
                                                </button>
                                                        </div>
                                                    </li>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Hình vuông, hình tròn</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_lesson_video_447" title="Hình vuông, hình tròn" data-id="447" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-447" className="lesson_item lesson_item_lesson_video">
                                                                    <i className="far fa-play-circle"></i>
                                                                </button>
                                                                <button type="button" id="hoclieu_item_revise_1131" title="Toán 1 - Hình vuông, hình tròn" data-id="1131" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/on-tap-1131" className="lesson_item lesson_item_revise">
                                                                    <i className="far fa-edit"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_lesson_video_447" title="Hình vuông, hình tròn" data-id="447" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-447" className="lesson_item lesson_item_lesson_video">
                                                                <i className="far fa-play-circle"></i>
                                                                Bài giảng
                                                </button>
                                                            <button type="button" id="hoclieu_item_revise_1131" title="Toán 1 - Hình vuông, hình tròn" data-id="1131" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/on-tap-1131" className="lesson_item lesson_item_revise">
                                                                <i className="far fa-edit"></i>
                                                                Luyện tập
                                                </button>
                                                        </div>
                                                    </li>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Hình vuông (hoạt họa)</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_lesson_video_495" title="Hình vuông (hoạt họa)" data-id="495" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-495" className="lesson_item lesson_item_lesson_video">
                                                                    <i className="far fa-play-circle"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_lesson_video_495" title="Hình vuông (hoạt họa)" data-id="495" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-495" className="lesson_item lesson_item_lesson_video">
                                                                <i className="far fa-play-circle"></i>
                                                                Bài giảng
                                                </button>
                                                        </div>
                                                    </li>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Hình tròn (hoạt họa)</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_lesson_video_496" title="Hình tròn (hoạt họa)" data-id="496" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-496" className="lesson_item lesson_item_lesson_video">
                                                                    <i className="far fa-play-circle"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_lesson_video_496" title="Hình tròn (hoạt họa)" data-id="496" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-496" className="lesson_item lesson_item_lesson_video">
                                                                <i className="far fa-play-circle"></i>
                                                                Bài giảng
                                                </button>
                                                        </div>
                                                    </li>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Hình tam giác</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_lesson_video_449" title="Hình tam giác" data-id="449" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-449" className="lesson_item lesson_item_lesson_video">
                                                                    <i className="far fa-play-circle"></i>
                                                                </button>
                                                                <button type="button" id="hoclieu_item_revise_1132" title="Toán 1 - Hình tam giác" data-id="1132" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/on-tap-1132" className="lesson_item lesson_item_revise">
                                                                    <i className="far fa-edit"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_lesson_video_449" title="Hình tam giác" data-id="449" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-449" className="lesson_item lesson_item_lesson_video">
                                                                <i className="far fa-play-circle"></i>
                                                                Bài giảng
                                                </button>
                                                            <button type="button" id="hoclieu_item_revise_1132" title="Toán 1 - Hình tam giác" data-id="1132" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/on-tap-1132" className="lesson_item lesson_item_revise">
                                                                <i className="far fa-edit"></i>
                                                                Luyện tập
                                                </button>
                                                        </div>
                                                    </li>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Hình tam giác (hoạt họa)</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_lesson_video_497" title="Hình tam giác (hoạt họa)" data-id="497" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-497" className="lesson_item lesson_item_lesson_video">
                                                                    <i className="far fa-play-circle"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_lesson_video_497" title="Hình tam giác (hoạt họa)" data-id="497" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/video-497" className="lesson_item lesson_item_lesson_video">
                                                                <i className="far fa-play-circle"></i>
                                                                Bài giảng
                                                </button>
                                                        </div>
                                                    </li>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Bài tập luyện tập tuần 1 - Cơ bản</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_practice_276" title="Bài tập luyện tập tuần 1 - Cơ bản" data-id="276" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/luyen-tap-276" className="lesson_item lesson_item_practice">
                                                                    <i className="far fa-edit"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_practice_276" title="Bài tập luyện tập tuần 1 - Cơ bản" data-id="276" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/luyen-tap-276" className="lesson_item lesson_item_practice">
                                                                <i className="far fa-edit"></i>
                                                                Luyện tập
                                                </button>
                                                        </div>
                                                    </li>
                                                    <li className="completed lesson-item sectionItem">
                                                        <div className="item">
                                                            <div className="connect-line"></div>
                                                            <div className="progress-icon incompleted"></div>
                                                            <div className="title sectionTitle">
                                                                <h4>Bài tập luyện tập tuần 1 - Nâng cao</h4>
                                                            </div>
                                                            <div className="actions lesson_item_outer">
                                                                <button type="button" id="hoclieu_item_practice_368" title="Bài tập luyện tập tuần 1 - Nâng cao" data-id="368" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/luyen-tap-368" className="lesson_item lesson_item_practice">
                                                                    <i className="far fa-edit"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="action-links lesson_item_outer">
                                                            <button type="button" id="hoclieu_item_practice_368" title="Bài tập luyện tập tuần 1 - Nâng cao" data-id="368" data-url="/toan-lop-1/khoa-hoc-tot-toan-1-2/luyen-tap-368" className="lesson_item lesson_item_practice">
                                                                <i className="far fa-edit"></i>
                                                                Luyện tập
                                                </button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* </button> */}
                                    </div>
                                    {/* </li>

                                                </ul > */}

                                    {/* </div >

                                                </div >

                                                </div > */}
                                    <div id="sticky-stopper">

                                    </div>
                                </div>

                                {/* </div >

                                                 </div > */}
                                <div className="extra-btn">
                                    <a onClick="courseAdviceModal.showModal()">TƯ VẤN THÊM</a>
                                    <a href="/toan-lop-1/khoa-hoc-tot-toan-1-2/dang-ky">
                                        ĐĂNG KÝ HỌC
                    </a>
                                </div>
                            </Row>

                        </Container>

                        <div className="blackscreen" style={{ display: "none" }}>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default KhoaHocTot;