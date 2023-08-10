import './Base.css';
import './App.css';
import logo from './logo/logo2.png'
import blog from './blog/blog.png'
import cartIcon from './Icon/cartIcon.svg'
import ImageSlider from "./component/ImageSlider/ImageSlider";
import ads from './advertisement/ads.png'
import ProductSlider from "./component/ProductSlider/ProductSlider";

function App() {
    return (
        <div className="App-Dig">
            <div className="container">
                <div className="header">
                    <div className="header-right">
                        <img className="logo" src={logo} alt={logo}/>
                    </div>
                    <div className="header-left">
                        <div className="login">
                            <span>Đăng nhập</span>
                        </div>
                        <div className="cart">
                            <img className="cart-icon" src={cartIcon} alt={cartIcon}/>
                            <span className="cart-text">Giỏ hàng</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-header">
                <div className="container">
                    <div className="navbar-content">
                        <div className="navbar-text">
                            <span>Thực phẩm chức năng</span>
                        </div>
                        <div className="navbar-text">
                            <span>Sản phẩm thuốc</span>
                        </div>
                        <div className="navbar-text">
                            <span>Chăm sóc da</span>
                        </div>
                        <div className="navbar-text">
                            <span>Thực phẩm sinh lý</span>
                        </div>
                        <div className="navbar-text">
                            <span>Thực phẩm bổ sung</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="container">
                    <div className="slider">
                        <div className="slider-content">
                            <ImageSlider/>
                        </div>
                    </div>
                    <div className="advertisement">
                        <img className='ads-img' src={ads} alt={ads}/>
                    </div>
                    <div className="product">
                        <div className="content">
                            <div className="title">
                                <span> Sản phẩm chăm sóc sức khỏe </span>
                            </div>
                            <div className="btn-show-all">
                                <button className="btn">Xem thêm sản phẩm</button>
                            </div>
                        </div>
                        <div className="product-view">
                            <ProductSlider/>
                        </div>
                        <div className="content">
                            <div className="title">
                                <span> Sản phẩm chăm sóc mắt </span>
                            </div>
                            <div className="btn-show-all">
                                <button className="btn">Xem thêm sản phẩm</button>
                            </div>
                        </div>
                        <div className="product-view">
                            <ProductSlider/>
                        </div>
                        <div className="content">
                            <div className="title">
                                <span> Sản phẩm chăm sóc sinh lý </span>
                            </div>
                            <div className="btn-show-all">
                                <button className="btn">Xem thêm sản phẩm</button>
                            </div>
                        </div>
                        <div className="product-view">
                            <ProductSlider/>
                        </div>
                        <div className="content">
                            <div className="title">
                                <span> Sản phẩm chăm sóc da</span>
                            </div>
                            <div className="btn-show-all">
                                <button className="btn">Xem thêm sản phẩm</button>
                            </div>
                        </div>
                        <div className="product-view">
                            <ProductSlider/>
                        </div>
                        <div className="content">
                            <div className="title">
                                <span> Sản phẩm chăm sóc cơ bắp</span>
                            </div>
                            <div className="btn-show-all">
                                <button className="btn">Xem thêm sản phẩm</button>
                            </div>
                        </div>
                        <div className="product-view">
                            <ProductSlider/>
                        </div>
                    </div>
                    <div className="advertisement">
                        <img className='ads-img' src={ads} alt={ads}/>
                    </div>
                    <div className="introduction">
                        <div className="row">
                            <div className="col-xl-9">
                                <div className="content">
                                    <div className="title">
                                        <span> Video </span>
                                    </div>
                                </div>
                                <div className="intro-video">
                                    <div className="video-content">
                                        <div className="video-header">
                                            <div className="video-header_title">
                                                <div className="header-title header-title_active">Chăm sóc da mặt</div>
                                                <div className="header-title" >Thực phẩm chức năng</div>
                                            </div>
                                            <div className="btn-show-all">
                                                <button className="btn">Xem thêm</button>
                                            </div>
                                        </div>
                                        <div className="video-body">
                                            <div className="body-content">
                                                <div className="content-img">
                                                    <img src={blog} alt={blog} />
                                                </div>
                                                <div className='content-text'>
                                                    <div className='content-text_title'>
                                                        <div className="line1-category">Chăm sóc</div>
                                                        <div className="line1-date">Ngày 10/8/2023</div>
                                                    </div>
                                                    <div className='content-text_heading'>
                                                        <div className="heading">Quy trình chăm sóc da mặt chuẩn sách giáo khoa</div>
                                                    </div>
                                                    <div className='content-text_detail'>
                                                        <div className="detail">Đánh bay các vấn đề về mụn, sẹo, vết thâm, nám, tàn nhang,.........</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-decoration"></div>
                                            <div className="body-content">
                                                <div className="content-img">
                                                    <img src={blog} alt={blog} />
                                                </div>
                                                <div className='content-text'>
                                                    <div className='content-text_title'>
                                                        <div className="line1-category">Chăm sóc</div>
                                                        <div className="line1-date">Ngày 10/8/2023</div>
                                                    </div>
                                                    <div className='content-text_heading'>
                                                        <div className="heading">Quy trình chăm sóc da mặt chuẩn sách giáo khoa</div>
                                                    </div>
                                                    <div className='content-text_detail'>
                                                        <div className="detail">Đánh bay các vấn đề về mụn, sẹo, vết thâm, nám, tàn nhang,.........</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-decoration"></div>
                                            <div className="body-content">
                                                <div className="content-img">
                                                    <img src={blog} alt={blog} />
                                                </div>
                                                <div className='content-text'>
                                                    <div className='content-text_title'>
                                                        <div className="line1-category">Chăm sóc</div>
                                                        <div className="line1-date">Ngày 10/8/2023</div>
                                                    </div>
                                                    <div className='content-text_heading'>
                                                        <div className="heading">Quy trình chăm sóc da mặt chuẩn sách giáo khoa</div>
                                                    </div>
                                                    <div className='content-text_detail'>
                                                        <div className="detail">Đánh bay các vấn đề về mụn, sẹo, vết thâm, nám, tàn nhang,.........</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <span> Blog </span>
                                    </div>
                                </div>
                                <div className="intro-video">
                                    <div className="video-content">
                                        <div className="video-header">
                                            <div className="video-header_title">
                                                <div className="header-title header-title_active">Chăm sóc da mặt</div>
                                                <div className="header-title" >Thực phẩm chức năng</div>
                                            </div>
                                            <div className="btn-show-all">
                                                <button className="btn">Xem thêm</button>
                                            </div>
                                        </div>
                                        <div className="video-body">
                                            <div className="body-content">
                                                <div className="content-img">
                                                    <img src={blog} alt={blog} />
                                                </div>
                                                <div className='content-text'>
                                                    <div className='content-text_title'>
                                                        <div className="line1-category">Chăm sóc</div>
                                                        <div className="line1-date">Ngày 10/8/2023</div>
                                                    </div>
                                                    <div className='content-text_heading'>
                                                        <div className="heading">Quy trình chăm sóc da mặt chuẩn sách giáo khoa</div>
                                                    </div>
                                                    <div className='content-text_detail'>
                                                        <div className="detail">Đánh bay các vấn đề về mụn, sẹo, vết thâm, nám, tàn nhang,.........</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-decoration"></div>
                                            <div className="body-content">
                                                <div className="content-img">
                                                    <img src={blog} alt={blog} />
                                                </div>
                                                <div className='content-text'>
                                                    <div className='content-text_title'>
                                                        <div className="line1-category">Chăm sóc</div>
                                                        <div className="line1-date">Ngày 10/8/2023</div>
                                                    </div>
                                                    <div className='content-text_heading'>
                                                        <div className="heading">Quy trình chăm sóc da mặt chuẩn sách giáo khoa</div>
                                                    </div>
                                                    <div className='content-text_detail'>
                                                        <div className="detail">Đánh bay các vấn đề về mụn, sẹo, vết thâm, nám, tàn nhang,.........</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-decoration"></div>
                                            <div className="body-content">
                                                <div className="content-img">
                                                    <img src={blog} alt={blog} />
                                                </div>
                                                <div className='content-text'>
                                                    <div className='content-text_title'>
                                                        <div className="line1-category">Chăm sóc</div>
                                                        <div className="line1-date">Ngày 10/8/2023</div>
                                                    </div>
                                                    <div className='content-text_heading'>
                                                        <div className="heading">Quy trình chăm sóc da mặt chuẩn sách giáo khoa</div>
                                                    </div>
                                                    <div className='content-text_detail'>
                                                        <div className="detail">Đánh bay các vấn đề về mụn, sẹo, vết thâm, nám, tàn nhang,.........</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="content">
                                    <div className="title">
                                        <span> Category </span>
                                    </div>
                                </div>
                                <div className='category-body'></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="footer-left">
                                <div className='row'>
                                    <div className="col-sm ">
                                        <div className="footer-heading">Product</div>
                                        <div className="footer-title">
                                            Employee database
                                        </div>
                                        <div className="footer-title">
                                            Payroll
                                        </div>
                                        <div className="footer-title">
                                            Absences
                                        </div>
                                        <div className="footer-title">
                                            Time tracking
                                        </div>
                                        <div className="footer-title">
                                            Shift planner
                                        </div>
                                        <div className="footer-title">
                                            Recruiting
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="footer-heading">Information</div>
                                        <div className="footer-title">
                                            FAQ
                                        </div>
                                        <div className="footer-title">
                                            Blog
                                        </div>
                                        <div className="footer-title">
                                            Support
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="footer-heading">Company</div>
                                        <div className="footer-title">
                                            About us
                                        </div>
                                        <div className="footer-title">
                                            Careers
                                        </div>
                                        <div className="footer-title">
                                            Contact us
                                        </div>
                                        <div className="footer-title">
                                            Lift Media
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="footer-right">
                                <div className="footer-content">
                                    <div className="footer-heading">Subscribe</div>
                                    <input type="text" placeholder="Enter Your Email" className="footer-subscribe"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
