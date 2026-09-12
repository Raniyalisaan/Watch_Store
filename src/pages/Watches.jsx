import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import WatchCard from "../components/WatchCard";

const Watches = ({ watches = [] }) => {
  const { products = [] } = useSelector(
    (state) => state.productState
  );

  // Combine previous watches and newly added products
  const allWatches = [...watches, ...products];

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
        ALL WATCHES
      </h2>

      <Row>
        {allWatches.length > 0 ? (
          allWatches.map((watch, index) => (
            <WatchCard
              key={`${watch.id}-${index}`}
              watch={watch}
            />
          ))
        ) : (
          <h4 className="text-center">
            No watches found
          </h4>
        )}
      </Row>
    </Container>
  );
};

export default Watches;