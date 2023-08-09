import "./slick.css";
import "./slick-theme.css";
import Slider from "react-slick";
import {ProductData} from './ProductData'

function ProductSlider() {
    const settings = {
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed:500
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    ProductData.map((productItem) => (
                        <div className="product-cover">
                            <div className="product-slider">
                                <div className="product-img">
                                    <img key={productItem.id} src={productItem.img} alt={productItem.img}/>
                                </div>
                                <div className="product-name">
                                    <span>{productItem.nameProduct}</span>
                                </div>

                                <div className="product-price">
                                    <span>{productItem.price}</span>
                                </div>
                                <div className="product-brand">
                                    <div className="product-shoppee">Shopee</div>
                                    <div className="product-lazada">Lazada</div>
                                    <div className="product-tiki">Tiki</div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </Slider>
        </div>
    )
}

export default ProductSlider