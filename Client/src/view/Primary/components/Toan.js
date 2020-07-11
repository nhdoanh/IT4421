import React from 'react';
import 'element-theme-default';
import { Carousel, Card } from 'element-react';
import '../css/Toan.css';
import '../../../App.css';
import { Container, Row, Col } from 'reactstrap';
import Axios from 'axios';

let course1 = [
  {
    img: 'https://vuihoc.vn/upload/5c209fe6176b0/2019/08/13/db/5e/7d9fb2726b32166edf89d9af6905befb.jpg',
    name:  'Khoá học tốt Toán 4',
    teacher: 'Cô Phạm Hồng Nhung',
    info: 'Gồm 76 bài giảng bám sát SGK kèm nhiều MINH HOẠ THỰC TẾ, 30 bài giảng ôn tập hè, 3000 câu hỏi luyện tập và 100 đề thi thử.',
    price: '560.000'
  },
  {
    img: 'https://vuihoc.vn/upload/5c209fe6176b0/2019/08/13/db/5e/7d9fb2726b32166edf89d9af6905befb.jpg',
    name:  'Khoá học tốt Toán 4',
    teacher: 'Cô Phạm Hồng Nhung',
    info: 'Gồm 76 bài giảng bám sát SGK kèm nhiều MINH HOẠ THỰC TẾ, 30 bài giảng ôn tập hè, 3000 câu hỏi luyện tập và 100 đề thi thử.',
    price: '560.000'
  },
  {
    img: 'https://vuihoc.vn/upload/5c209fe6176b0/2019/08/13/db/5e/7d9fb2726b32166edf89d9af6905befb.jpg',
    name:  'Khoá học tốt Toán 4',
    teacher: 'Cô Phạm Hồng Nhung',
    info: 'Gồm 76 bài giảng bám sát SGK kèm nhiều MINH HOẠ THỰC TẾ, 30 bài giảng ôn tập hè, 3000 câu hỏi luyện tập và 100 đề thi thử.',
    price: '560.000'
  }
]

let course2 = [
  {
    img: 'https://vuihoc.vn/upload/5c209fe6176b0/2019/06/13/8b/52/7408d7686df34f245bf3349824d91dfa.jpg',
    name:  'Khoá học tốt Toán 4',
    teacher: 'Thầy Nguyễn Phú Thọ',
    info: 'Gồm 76 bài giảng bám sát SGK kèm nhiều MINH HOẠ THỰC TẾ, 30 bài giảng ôn tập hè, 3000 câu hỏi luyện tập và 100 đề thi thử.',
    price: '560.000'
  },
  {
    img: 'https://vuihoc.vn/upload/5c209fe6176b0/2019/08/13/db/5e/7d9fb2726b32166edf89d9af6905befb.jpg',
    name:  'Khoá học tốt Toán 4',
    teacher: 'Thầy Nguyễn Phú Thọ',
    info: 'Gồm 76 bài giảng bám sát SGK kèm nhiều MINH HOẠ THỰC TẾ, 30 bài giảng ôn tập hè, 3000 câu hỏi luyện tập và 100 đề thi thử.',
    price: '560.000'
  },
  {
    img: 'https://vuihoc.vn/upload/5c209fe6176b0/2019/06/13/8b/52/7408d7686df34f245bf3349824d91dfa.jpg',
    name:  'Khoá học tốt Toán 4',
    teacher: 'Thầy Nguyễn Phú Thọ',
    info: 'Gồm 76 bài giảng bám sát SGK kèm nhiều MINH HOẠ THỰC TẾ, 30 bài giảng ôn tập hè, 3000 câu hỏi luyện tập và 100 đề thi thử.',
    price: '560.000'
  }
]

let course = [course1, course2]

class Toan extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        math: [],
      }
      
  }

   componentDidMount() {
      Axios.get("http://localhost:8080/")
        .then(res => {
          const subject = [];
          res.data.JsonData.map(item => {
            if (item.subject === 1) {
              subject.push(item);
            }
          })
          this.setState({math: subject})
        })
        .catch(err => console.log(err));      
  }
  
  render() {
    const math = this.state.math;
  return (
    <>
      <Container className="notable_courses bodyItem" fluid={true}>
        <Container>
          <Row>
              <Col className="courses_sec tab-pane" xs={12}>
                <div className="head_title">
                  <h2>KHÓA TOÁN TIỂU HỌC <span className="hidden-xs">NỔI BẬT</span></h2>
                </div>
                <Row className="org_row">
                  <Col className="hidden-xs" style={{ paddingRight: "0" }} md={3}>
                    <div className="group" style={{ background: 'transparent url(/theme/vuihoc/imgs/home_revision/Banner_Toan_cap_1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                  </Col>
                  <Col md={9}>
                    <Carousel indicatorPosition="none" style={{height: '100%'}}>
                      {
                        math.map((item, index) => {
                          return (
                            <Carousel.Item key={index}>                            
                                  <Col md={4} style={{padding: '5px', height: '100%'}}>
                                    <Card style={{height: '100%'}} bodyStyle= {{padding: '0'}}>
                                      <img src={item.img} style={{width: '100%', height: '30%'}} />
                                      <div className="content">
                                        <h3><a href="/course/id">{item.name}</a></h3>
                                        <div className="teacher_info">
                                          <i className="fas fa-chalkboard-teacher"></i>
                                          GV: {item.teacher}
                                        </div>
                                        <p>{item.info}</p>
                                      </div>
                                      <div className="bottom">
                                        <span className="price">
                                          {item.price}₫
                                        </span>
                                        <span className="more-info">
                                          <a href="/course/id">Xem thêm</a>
                                        </span>
                                      </div>
                                    </Card>
                                  </Col>
                                )
                              })}
                            </Carousel.Item>
                          )
                        })
                      }
                    </Carousel>
                  </Col>
                </Row>
              </Col>
            </Row>
        </Container>
      </Container>
    </>
  )
}
}

export default Toan;