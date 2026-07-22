import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './Watches.css';
import { useSelector } from "react-redux";

function Watches() {
  const {id} = useParams();

  const { products } =useSelector((state)=> state.productState);
  const watch = products.find((p)=> p._id == id);

  if (!watch) return <h2>Watch not found</h2>;

  return (
    <Container>
      <Row>
        <Col md={4} className="mt-4">
          <Image
            className="w-100"
            src={watch?.productPhoto ?? null}
            alt={watch?.productName}
          />
        </Col>

        <Col md={8} className="mt-4">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{watch?.productName ?? ''}</h2>
            </ListGroup.Item>

            <ListGroup.Item>
              {watch?.productDescription ?? ''}
            </ListGroup.Item>

            <ListGroup.Item>
              ₹{watch?.productPrice ?? 0}
            </ListGroup.Item>

            <ListGroup.Item>
              <Button onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>





  );
}

export default Watches;