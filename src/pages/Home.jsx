import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import HomeCarousel from '../components/HomeCarousel';
import { Link } from 'react-router-dom';
import WatchCard from '../components/WatchCard';

function Home({brands,watches}){
  // const { products } = useSelector((state)=> state.productState);
  // console.log(products);
  

  //  const dispatch = useDispatch();

  // const handleAddToCart = (watches) => {
  //   dispatch(addToCart(watches));
  //   toast.success("Added to cart");
  // }

  return(
    <Container>
      <HomeCarousel/>
      <h2 className='text-center mt-4 mb-4'>
        BRAND COLLECTIONS
        </h2>
        
    <Row>
      {brands.map((brand,index)=>(
<Col md={6} lg={4} xl={3} className='mt-4' key={index}>
         <Card className='text-center'>
          <Link to={`/brand/${brand.id}`}>
      <Card.Img variant="top" src={brand?.brandPhoto ?? null} />
   </Link>
    </Card>
        </Col>
      ))}
      </Row>

    <h2 className="text-center mt-4 mb-4">WATCHES</h2>

<Row>
  {watches.map((watch) => (
    <WatchCard key={watch.id} watch={watch} />
  ))}
</Row>
    </Container>
  )
}
export default Home;