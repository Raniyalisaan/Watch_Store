import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/productSlice";
import { toast } from "react-toastify";


const WatchCard = ({watch}) => {

  const dispatch = useDispatch();

  const handleAddToCart = (watch) => {
    dispatch(addToCart(watch));
    toast.success("Added to cart");
  };

  return (
    <Col md={6} lg={4} xl={3} className="mt-4">
      <Card className="text-center">

        <Link to={`/watches/${watch.id}`}>
          <Card.Img
            variant="top"
            src={watch?.productPhoto ?? null}
          />
        </Link>

        <Card.Body>
          <Card.Title>{watch?.productName ?? ''}</Card.Title>
          <Card.Text>{watch?.productDescription ?? ''}</Card.Text>
          <h6>{watch?.productPrice ?? 0}</h6>
          <h6 className="text-danger">CHECK AVAILABILITY</h6>
          <Button variant="dark" onClick={() => handleAddToCart(watch)}>
            Add to Cart
          </Button>
        </Card.Body>
        
      </Card>
    </Col>
  )
}
export default WatchCard;