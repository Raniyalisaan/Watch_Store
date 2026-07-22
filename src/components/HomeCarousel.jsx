import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src='/carousels/slide-1.png' alt='' className='w-100'/>
      </Carousel.Item>

      <Carousel.Item>
        <Image src='/carousels/slide-2.jpg' alt='' className='w-100'/>
      </Carousel.Item>

      <Carousel.Item>
        <Image src='/carousels/slide-3.jpg' alt='' className='w-100'/>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default HomeCarousel;