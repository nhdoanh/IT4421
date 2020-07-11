import React from 'react';
import 'element-theme-default';
import '../../../index.css';
import { Row, Col } from 'reactstrap';

function SearchBar() {
    return (
        <> 
        <div className="clearfix"></div>
        <Row className="searchBar">
            <Col xs={12}>
                <div>
                    <i className="el-icon-search">

                    </i>
                    <ul className="center-block">
                        <li>Tìm bài giảng</li>
                        <li><div className="selectBox">
                            <select id="select_khoi">
                                <option value="">Chọn lớp</option>
                                <option value="1">Lớp 1</option>
                                <option value="2">Lớp 2</option>
                                <option value="3">Lớp 3</option>
                                <option value="4">Lớp 4</option>
                                <option value="5">Lớp 5</option>
                            </select>
                            <i className="el-icon-arrow-down el-icon-right pull-right">

                            </i>
                        </div>
                        </li>
                        <li>
                            <div className="selectBox">
                                <select id="select_mon">
                                    <option value="">Chọn môn</option>
                                </select>
                                <i className="el-icon-arrow-down el-icon-right pull-right">

                                </i>
                            </div>
                        </li>
                        <li>
                            <button className="btn">
                                <span className="el-icon-search">

                                </span>
                                <span className="text">Tìm kiếm</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default SearchBar;