import { Card, Col, Container, Row } from "react-bootstrap";

const Stores = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">OUR STORES</h1>

      <p className="text-center">
        Visit our stores and experience our watch collection in person.
      </p>

      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Calicut Store</Card.Title>
              <Card.Text>
                Explore our latest watches with assistance from our staff.
              </Card.Text>
              <p>Open: 10:00 AM – 8:00 PM</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Kochi Store</Card.Title>
              <Card.Text>
                Find premium watches and stylish collections for every
                occasion.
              </Card.Text>
              <p>Open: 10:00 AM – 8:00 PM</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Kannur Store</Card.Title>
              <Card.Text>
                Get help choosing the perfect watch for yourself or your
                loved ones.
              </Card.Text>
              <p>Open: 10:00 AM – 8:00 PM</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Stores;