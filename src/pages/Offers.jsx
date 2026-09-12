import { Card, Col, Container, Row } from "react-bootstrap";

const Offers = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">LATEST OFFERS</h1>

      <p className="text-center">
        Enjoy exciting offers and discounts on selected watches.
      </p>

      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>10% OFF</Card.Title>
              <Card.Text>
                Get 10% off on selected classic watches.
              </Card.Text>
              <button className="btn btn-dark">Shop Now</button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Special Collection</Card.Title>
              <Card.Text>
                Discover our special collection of stylish and premium
                watches.
              </Card.Text>
              <button className="btn btn-dark">Explore</button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Seasonal Deals</Card.Title>
              <Card.Text>
                Enjoy special prices on selected products for a limited time.
              </Card.Text>
              <button className="btn btn-dark">View Deals</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Offers;