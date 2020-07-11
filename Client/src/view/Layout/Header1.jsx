import React from 'react';
import 'element-theme-default';
import '../../App.css';
import '../../index.css';
import './css/Header.css';
import { Container,} from 'reactstrap';
import { Dialog, Button, Form, Input, Select, DatePicker, Layout } from 'element-react';

class Header1 extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            dialog_signin: false,
            dialog_signup: false,
            show_pass: false,
            form_signin: {
                signin: '',
                password: ''
            },
            form_signup: {
                name: '',
                email: '',
                phone: '',
                password: '',
                check_pass: '',
                sex: '',
                birthday: '',
                address: ''
            },
            sex: [
                {
                    value: 'none',
                    label: 'Không chọn'
                },
                {
                    value: 'male',
                    label: 'Nam'
                },
                {
                    value: 'female',
                    label: 'Nữ'
                }
            ]
        };
    }

    onChangeSignin(key, value) {
        this.setState({
            form_signin: Object.assign({}, this.state.form_signin, { [key]: value })
        });
    }

    onChangeSignup(key, value) {
        this.setState({
            form_signup: Object.assign({}, this.state.form_signup, { [key]: value })
        });
    }

    toggleshow_pass() {
        this.state.show_pass = !this.state.show_pass
        this.forceUpdate()
    }

    checkAccount() {
        this.refs.form_signin.validate((valid) => {
            if (valid) {
                // call api
            }
        })
    }

    createAccount() {
        this.refs.form_signup.validate((valid) => {
            if (valid) {
                // call api
            }
        })
    }

    clearDialogSignin() {
        this.setState({dialog_signin: false})
        this.refs.form_signin.resetFields()
    }

    clearDialogSignup() {
        this.setState({dialog_signup: false})
        this.refs.form_signup.resetFields()
    }

    toSignup() {
        this.setState({dialog_signin: false, dialog_signup: true})
        this.clearDialogSignin()
    }

    toSignin() {
        this.setState({dialog_signup: false, dialog_signin: true})
        this.clearDialogSignup()
    }

    render() {
        return (
            <div>
                <nav id="navbar_vue" className="navbar navbar-default">
                    <Container>
                        <div className="navbar-top">
                            <ul className="nav nav-tabs">
                                <li data-cap="1" className="nav nav_cap nav-item nav-link active">
                                    <a href="/tieu-hoc">Tiểu học</a>
                                </li>
                                <li data-cap="2" className="nav nav_cap nav-item nav-link ">
                                    <a href="/thcs">THCS</a>
                                </li>
                            </ul>
                            <ul className="nav nav-tabs nav-tabs-xs hidden-sm hidden-md hidden-lg">
                                <li className="activate">
                                    <a href="/tai-khoan/khoa-hoc" title="Khóa học của tôi" className="btn activate-course">
                                        <i className="fab fa-leanpub"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul className="nav navbar-right">
                                <li className="hotline">
                                    <i className="el-icon-phone"></i>
                                    <a href="tel:0987 81 0990">0987 81 0990</a>
                                </li>
                                <li className="activate">
                                    <a href="/tai-khoan/khoa-hoc" className="btn activate-course">
                                        <i className="fab fa-leanpub"></i> Khóa học
                                của tôi</a>
                                </li>
                                
                                <li className="login_outer">
                                    <div className="login">
                                        <a id="btnSignin" title="Đăng nhập" onClick={() => this.setState({dialog_signin: true})}>
                                            <span>Đăng nhập</span>
                                        </a>
                                        <a id="btnSignup" title="Đăng ký" onClick={() => this.setState({dialog_signup: true})}>
                                            <span>Đăng ký</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Container>
                    <div className="tab-content">
                        <Container>
                            <div role="tabpanel" id="home" className="tab-pane active">
                                <div className="navbar-header">
                                    <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" className="navbar-toggle collapsed">
                                        <span className="sr-only">Toggle navigation</span>
                                        <div className="barbarbar">
                                            <i className="fas fa-bars"></i>
                                        </div>
                                        <div className="crossSign">
                                            <i className="fas fa-times"></i>
                                        </div>
                                    </button>
                                    <h1>
                                        <a href="/" className="navbar-brand vuihoc-brand">
                                            <img alt="Vuihoc.vn" src="/theme/vuihoc/imgs/vuihoc-logo-white.png" className="img-responsive logo" />
                                        </a>
                                    </h1>
                                </div>
                                <div id="navbar" className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav pull-right">
                                        <li className="dropdown">
                                            <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                <span>
                                                    <i className="fas fa-graduation-cap icon"></i> Lớp học</span>
                                                
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="#">Lớp 1
                                                    <i className="fas fa-angle-right pull-right"></i>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li role="presentation">
                                                            <a href="/toan-lop-1">Toán</a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a href="/tieng-viet-lop-1">Tiếng Việt</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu">
                                                    <a href="#">Lớp 2
                                                    <i className="fas fa-angle-right pull-right"></i>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li role="presentation">
                                                            <a href="/toan-lop-2">Toán</a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a href="/tieng-viet-lop-2">Tiếng Việt</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu">
                                                    <a href="#">Lớp 3
                                                        <i className="fas fa-angle-right pull-right"></i>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li role="presentation">
                                                            <a href="/toan-lop-3">Toán</a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a href="/tieng-viet-lop-3">Tiếng Việt</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu">
                                                    <a href="#">Lớp 4
                                                        <i className="fas fa-angle-right pull-right"></i>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li role="presentation">
                                                            <a href="/toan-lop-4">Toán</a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a href="/tieng-viet-lop-4">Tiếng Việt</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu">
                                                    <a href="#">Lớp 5
                                                            <i className="fas fa-angle-right pull-right"></i>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li role="presentation">
                                                            <a href="/toan-lop-5">Toán</a>
                                                        </li>
                                                        <li role="presentation">
                                                            <a href="/tieng-viet-lop-5">Tiếng Việt</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="hidden">
                                            <a href="../navbar/">
                                                <i className="fas fa-user-graduate icon"></i>
                                                Luyện thi</a>
                                        </li>
                                        <li className="hidden">
                                            <a href="../navbar-static-top/">
                                                <i className="fas fa-user-graduate icon"></i>
                                                Đấu trường</a>
                                        </li>
                                        <li className="hidden">
                                            <a href="../navbar-static-top/">
                                                <i className="fas fa-user-graduate icon">

                                                </i> CLB/Diễn đàn</a>
                                        </li>
                                        <li>
                                            <a href="/tin">
                                                <i className="fab fa-leanpub"></i>
                                                Góc học tập</a>
                                        </li>
                                        <li>
                                            <a href="/lien-he">
                                                <i className="fas fa-envelope icon"></i>
                                                Liên hệ</a>
                                        </li>
                                        <li className="search-box">
                                            <a role="button">
                                                <i className="el-icon-search"></i>
                                            </a>
                                            <form method="GET" action="/tim-kiem" className="search-form">
                                                <input type="text" name="key" placeholder="Tìm kiếm gì đó ..." />
                                                <button type="submit">
                                                    <i className="el-icon-search"></i>
                                                </button>
                                            </form>
                                        </li>
                                        <li className="buyAccount hidden">
                                            <a href="/kich-hoat-khoa-hoc" className="btn activate-course">Kích hoạt khóa học</a>
                                        </li>
                                        <li className="mb-hotline">
                                            <a href="telto:0987 81 0990">
                                                Hotline: 0987 81 0990
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Container>
                    </div>
                </nav >

                <Dialog
                    title="ĐĂNG NHẬP"
                    size="tiny"
                    onCancel={() => this.clearDialogSignin()}
                    visible={this.state.dialog_signin}
                    closeOnClickModal={ false }
                    closeOnPressEscape={ false }
                    lockScroll={ false }>
                    <Dialog.Body>
                        <Form model={this.state.form_signin} labelPosition="top" ref="form_signin">
                            <Form.Item 
                                    prop="signin" 
                                    rules={[{required: true, message: 'Vui lòng nhập email hoặc SĐT', trigger: 'blur'}]}>
                                <Input
                                        placeholder="Nhập email hoặc SĐT"
                                        value={this.state.form_signin.signin} 
                                        onChange={this.onChangeSignin.bind(this, 'signin')}></Input>
                            </Form.Item>
                            <Form.Item 
                                    prop="password"
                                    rules={[{required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur'}]}>
                                <Input
                                        placeholder="Nhập mật khẩu"
                                        type={this.state.show_pass ? 'text' : 'password'} 
                                        value={this.state.form_signin.password} 
                                        onChange={this.onChangeSignin.bind(this, 'password')}
                                        icon={this.state.show_pass ? 'fas fa-eye-slash' : 'fas fa-eye'}
                                        onIconClick={() => this.toggleshow_pass()}></Input>
                            </Form.Item>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-button">
                        <Button className="button-sign" onClick={() => this.checkAccount()}>ĐĂNG NHẬP</Button>
                    </Dialog.Footer>
                    <Dialog.Footer className="dialog-footer">
                        <h6>Bạn chưa có tài khoản? <u onClick={() => this.toSignup()}>Đăng ký</u> gấp</h6>
                    </Dialog.Footer>
                </Dialog>

                <Dialog
                    title="ĐĂNG KÝ"
                    onCancel={() => this.clearDialogSignup()}
                    visible={this.state.dialog_signup}
                    closeOnClickModal={ false }
                    closeOnPressEscape={ false }
                    lockScroll={ false }>
                    <Dialog.Body>
                        <Form model={this.state.form_signup} labelPosition="top" ref="form_signup">
                            <Layout.Col span="12">
                                <Form.Item 
                                        prop="name" 
                                        rules={[{required: true, message: 'Vui lòng nhập email', trigger: 'blur'}]}>
                                    <Input
                                            placeholder="Nhập họ và tên"
                                            value={this.state.form_signup.name} 
                                            onChange={this.onChangeSignup.bind(this, 'name')}></Input>
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="12">
                                <Form.Item 
                                    prop="email" 
                                    rules={[{required: true, message: 'Vui lòng nhập email', trigger: 'blur'},
                                            {type: 'email', message: 'Vui lòng nhập đúng định dạng email', trigger: ['change', 'blur']}]}>
                                    <Input
                                            placeholder="Nhập email"
                                            value={this.state.form_signup.email} 
                                            onChange={this.onChangeSignup.bind(this, 'signin')}></Input>
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="12">
                                <Form.Item 
                                    prop="password"
                                    rules={[{required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur'},
                                            {validator: (rule, value, callback) => {
                                                if (value === '') {
                                                    callback(new Error('Vui lòng nhập mật khẩu'));
                                                } else {
                                                    if (this.state.form_signup.check_pass !== '') {
                                                        this.refs.form_signup.validateField('checkPass');
                                                    }
                                                    callback();
                                                }
                                            }}]}>
                                    <Input
                                            placeholder="Nhập mật khẩu"
                                            type={this.state.show_pass ? 'text' : 'password'} 
                                            value={this.state.form_signup.password} 
                                            onChange={this.onChangeSignup.bind(this, 'password')}
                                            icon={this.state.show_pass ? 'fas fa-eye-slash' : 'fas fa-eye'}
                                            onIconClick={() => this.toggleshow_pass()}></Input>
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="12">
                                <Form.Item 
                                    prop="check_pass"
                                    rules={[{required: true, message: 'Vui lòng nhập lại mật khẩu', trigger: 'blur'},
                                            {validator: (rule, value, callback) => {
                                                if (value === '') {
                                                    callback(new Error('Vui lòng nhập lại mật khẩu'));
                                                } else if (value !== this.state.form_signup.password) {
                                                    callback(new Error('Hai mật khẩu không giống nhau'));
                                                } else {
                                                    callback();
                                                }
                                            }}]}>
                                    <Input
                                            placeholder="Nhập lại mật khẩu"
                                            type={this.state.show_pass ? 'text' : 'password'} 
                                            value={this.state.form_signup.check_pass} 
                                            onChange={this.onChangeSignup.bind(this, 'check_pass')}
                                            icon={this.state.show_pass ? 'fas fa-eye-slash' : 'fas fa-eye'}
                                            onIconClick={() => this.toggleshow_pass()}></Input>
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="12">
                                <Form.Item 
                                    prop="phone" 
                                    rules={[{required: true, message: 'Vui lòng nhập SĐT', trigger: 'blur'},
                                            {pattern: /^(\+84|0)(8[689]|3\d|5\d|7\d|8\d|9\d)\d{7}$/, message: 'Vui lòng nhập đúng định dạng SĐT', trigger: ['change', 'blur']}]}>
                                    <Input
                                            placeholder="Nhập số điện thoại"
                                            value={this.state.form_signup.phone} 
                                            onChange={this.onChangeSignup.bind(this, 'phone')}></Input>
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="12">
                                <Form.Item prop="sex">
                                    <Select 
                                            value={this.state.form_signup.sex}
                                            placeholder="Chọn giới tính">
                                        {
                                            this.state.sex.map(item => {
                                                return <Select.Option key={item.value} label={item.label} value={item.value} />
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="12">
                                <Form.Item prop="birthday">
                                    <DatePicker
                                        value={this.state.form_signup.birthday}
                                        placeholder="Chọn ngày sinh"
                                        format="dd-MM-yyyy"
                                        onChange={this.onChangeSignup.bind(this, 'birthday')}
                                    />
                                </Form.Item>
                            </Layout.Col>
                            <Layout.Col span="12">
                                <Form.Item prop="address">
                                    <Input
                                            placeholder="Nhập địa chỉ"
                                            value={this.state.form_signup.address} 
                                            onChange={this.onChangeSignup.bind(this, 'address')}></Input>
                                </Form.Item>
                            </Layout.Col>
                        </Form>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-button">
                        <Button className="button-sign" onClick={() => this.createAccount()}>ĐĂNG KÝ</Button>
                    </Dialog.Footer>
                    <Dialog.Footer className="dialog-footer">
                        <h6>Bạn đã có tài khoản? <u onClick={() => this.toSignin()}>Đăng nhập</u> thôi</h6>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}

export default Header1;