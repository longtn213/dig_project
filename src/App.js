import './Base.css';
import './App.css';
import logo from './logo/logo1.png'
import cartIcon from './Icon/cartIcon.svg'
import ImageSlider from "./component/ImageSlider/ImageSlider";
import ads from './advertisement/ads.png'
import ProductSlider from "./component/ProductSlider/ProductSlider";

function App() {
    return (
        <div className="App-Dig">
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
            <div className="navbar-header">
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
                        <div className="product-content">
                            <div className="product-title">
                                <span> Sản phẩm chăm sóc sức khỏe </span>
                            </div>
                            <div className="product-show-all">
                                <button className="btn-product">Xem thêm sản phẩm</button>
                            </div>
                        </div>
                        <div className="product-view">
                            <ProductSlider/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
