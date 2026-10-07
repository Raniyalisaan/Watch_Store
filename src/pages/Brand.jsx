import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Brand = ({ brands = [] }) => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-3">
        OUR BRANDS
      </h1>

      <p className="text-center mb-4">
        Explore watches from our premium international brands.
      </p>

      <Row>
        {brands.length > 0 ? (
          brands.map((brand, index) => (
           <Col
  md={6}
  lg={4}
  xl={3}
  className="mt-4"
  key={brand.id ?? index}
>
  <Card className="text-center shadow-sm overflow-hidden">
    <Link to={`/brand/${brand.id}`}>
      <Card.Img
        variant="top"
        src={brand.brandPhoto}
        alt={brand.brandName || "Brand"}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Link>
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