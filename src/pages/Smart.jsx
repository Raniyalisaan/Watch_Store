import { Card, Col, Container, Row } from "react-bootstrap";

const Smart = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">SMART WATCHES</h1>

      <p className="text-center">
        Discover smart watches designed for your active lifestyle.
      </p>

      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Fitness Tracking</Card.Title>
              <Card.Text>
                Track your steps, workouts, heart rate, and daily activities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Smart Notifications</Card.Title>
              <Card.Text>
                Receive calls, messages, and important notifications directly
                on your wrist.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <Card.Title>Modern Design</Card.Title>
              <Card.Text>
                Enjoy stylish designs, useful features, and comfortable
                everyday use.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Smart;