import './ImageSlider.css'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import {ImageData} from "./ImageData";

function ImageSlider() {
    return(
        <MDBCarousel showControls >
            {
                ImageData.map((imageItem) =>(
                    <MDBCarouselItem
                        className='img-slider'
                        itemId={imageItem.id}
                        src={imageItem.img}
                        alt='...'
                    />
                ))
            }
        </MDBCarousel>
    )
}
export default ImageSlider