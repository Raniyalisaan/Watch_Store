import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();
  const handleRedirection = ()=> {
    navigate("/");
  }
  return(
    <Container>
<Row>
  <Col className="vh-100 d-flex justify-content-center align-items-center">
  <Card>
      <Card.Header className="display-4 fw-bold text-danger">
        404 - Forbidden
      </Card.Header>
      <Card.Body>
        <Card.Title>You don't have permission to access this page.</Card.Title>
        <Card.Text>
          Please contact administrator for more support.
        </Card.Text>
        <Button variant="primary" onClick={handleRedirection}>Back To Home</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
    </Container>
  )
}
export default Forbidden;