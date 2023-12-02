import { Carousel } from 'react-bootstrap';
function CarouselInMobile({ data }) {
    return (
        <Carousel>
            <Carousel.Item >
                <div className='d-flex justify-content-center'>
                    <div className='outerWrapperCarouselBox w-75 activeSlide p-4 text-white'>
                        <img src={data[0].image} className='outerWrapperCarouselImageInMobileSize' alt="" />
                        {data[0].des}
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex justify-content-center'>
                    <div className='outerWrapperCarouselBox position-relative activeSlide p-4 text-white w-75'>
                        <img src={data[1].image} className='outerWrapperCarouselImageInMobileSize' alt="" />
                        {data[1].des}
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex justify-content-center'>
                    <div className='outerWrapperCarouselBox activeSlide p-4 text-white w-75'>
                        <img src={data[2].image} className='outerWrapperCarouselImageInMobileSize' alt="" />
                        {data[2].des}
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselInMobile;