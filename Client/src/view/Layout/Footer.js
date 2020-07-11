import React from 'react';
import 'element-theme-default';
import './css/Footer.css';
import '../../App.css';
import '../../index.css';


function Footer() {
    return (

       <footer id="layout_footer" className="container-fluid homeFooter" style={{ backgroundPosition: '0 bottom', backgroundRepeat: 'no-repeat', backgroundSize: '100%', minHeight: '465px' }}>
        {/* // < div > */}
        <div className="container">
            <div className="row fix-margin-right--30">
                <div className="col-sm-6 left">
                    <div className="fn-title">
                        <img alt="Logo vuihoc.vn" className="img-responsive footer-logo" src="/public/vuihoc_logo_final.png" />
                    </div>
                    <p>
                        Vuihoc.vn là một trải nghiệm học tập tuyệt vời,
                         cung cấp những khoá học online chất lượng cao cho học sinh tiểu học, THCS và THPT.
                          Với sự hợp tác chuyên môn của các giáo viên hàng đầu cùng phương pháp học tập cá nhân hoá và sự hỗ trợ của công nghệ giúp các em luôn hào hứng trong việc học tập,
                           nắm chắc được vấn đề từ đó hiểu sâu nhớ lâu và học thật tốt chương trình trên lớp cũng như đạt kết quả cao trong các kỳ thi.
                            {/* <br>
                             <br>Công ty Cổ phần giáo dục và công nghệ Hùng Vương 
                             <br> Đại diện: Ông Đỗ Ngọc Lâm 
                             <br> Địa chỉ: số 9, ngõ 622/23 Minh Khai, phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội 
                            <br> MST: 0108569031 do Sở KH và ĐT TP. Hà Nội cấp ngày 03/01/2019   */}
                    </p>
                </div>
                <div className="col-sm-6 right">
                    <div className="head_title">
                        <div className="fn-title">KẾT NỐI</div>
                    </div>
                    <div className="fb-page fb_iframe_widget" data-href="https://www.facebook.com/vuihocvietnam" data-width="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=499437356800411&amp;container_width=470&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fvuihocvietnam&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;width=500">
                        <span style={{verticalAlign: 'bottom', width: '470px', height: '180px'}}>
                            <iframe name="f19024fb938ad68" width="500px" height="1000px" title="fb:page Facebook Social Plugin" frameBorder="0" allowtransparency="true" allowFullScreen={true} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&amp;app_id=499437356800411&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df34556c118fef9c%26domain%3Dvuihoc.vn%26origin%3Dhttps%253A%252F%252Fvuihoc.vn%252Ff10e66339c371a8%26relation%3Dparent.parent&amp;container_width=470&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fvuihocvietnam&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;width=500" style={{border: 'none', visibility: 'visible', width: '470px', height: '180px'}} __idm_frm__="623" className="">

                            </iframe>
                        </span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="bct">
                    <a rel="nofollow" href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=53406">
                            <img src="../../public/bct.png" alt="Đã thông báo bộ công thương" />
                    </a>
                </div>
                {/* <br> */}
            </div>
        </div>
    {/* // </div> */}
</footer>

    )
}

export default Footer;