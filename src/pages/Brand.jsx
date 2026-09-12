import { Card, Col, Container, Row } from "react-bootstrap";

const Brand = ({ watches = [] }) => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-3">
        OUR BRANDS
      </h1>

      <p className="text-center mb-4">
        Explore watches from our premium international brands.
      </p>

      <Row>
        {watches.length > 0 ? (
          watches.map((watch) => (
            <Col
              md={6}
              lg={4}
              xl={3}
              className="mb-4"
              key={watch.id}
            >
              <Card className="h-100 text-center shadow-sm">
                <Card.Img
                  variant="top"
                  src={watch.productPhoto}
                  alt={watch.productName}
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    padding: "15px",
                  }}
                />

                <Card.Body>
                  <Card.Title>
                    {watch.productName}
                  </Card.Title>

                  <Card.Text>
                    {watch.productDescription}
                  </Card.Text>

                  <h5>
                    ₹{watch.productPrice}
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h4 className="text-center">
            Brands not found
          </h4>
        )}
      </Row>
    </Container>
  );
};

export default Brand;