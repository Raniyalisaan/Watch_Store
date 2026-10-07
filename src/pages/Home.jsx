import { Card, Col, Container, Row } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import { Link } from "react-router-dom";
import WatchCard from "../components/WatchCard";

function Home({ brands = [], watches = [] }) {
  return (
    <Container>
      <HomeCarousel />

      <h2 className="text-center mt-4 mb-4">
        BRAND COLLECTIONS
      </h2>

      <Row>
        {brands.map((brand, index) => (
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
        ))}
      </Row>

      <h2 className="text-center mt-4 mb-4">
        WATCHES
      </h2>

      <Row>
        {watches.map((watch, index) => (
          <WatchCard
            key={watch.id ?? index}
            watch={watch}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Home;