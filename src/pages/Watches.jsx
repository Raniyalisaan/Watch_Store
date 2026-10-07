
import {
  Container,
  Row,
  Spinner,
  Alert,
  Button,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import WatchCard from "../components/WatchCard";
import api from "../api";

const Watches = ({ watches = [] }) => {
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("products/");

      // Handle normal and paginated API responses
      const djangoProducts = Array.isArray(response.data)
        ? response.data
        : response.data.results || [];

      setApiProducts(djangoProducts);
    } catch (err) {
      console.error("API error:", err);
      console.log("Error message:", err.message);
      console.log("Response:", err.response);

      setError("Unable to load Django products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Django products first, then frontend watches
  const allProducts = [
    ...apiProducts,
    ...watches,
  ];

  // Remove duplicate products by name
  const allWatches = allProducts.filter(
    (watch, index, array) => {
      const name = (
        watch.productName || watch.name || ""
      )
        .trim()
        .toLowerCase();

      return (
        index ===
        array.findIndex((item) => {
          const itemName = (
            item.productName || item.name || ""
          )
            .trim()
            .toLowerCase();

          return itemName === name;
        })
      );
    }
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
        ALL WATCHES
      </h2>

      <div className="text-center mb-4">
        <Button
          variant="dark"
          onClick={fetchProducts}
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh Products"}
        </Button>
      </div>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading products...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      {!loading && !error && (
        <Row>
          {allWatches.length > 0 ? (
            allWatches.map((watch, index) => (
              <WatchCard
                key={`${watch.id || watch.productName || watch.name}-${index}`}
                watch={watch}
              />
            ))
          ) : (
            <h4 className="text-center">
              No watches found
            </h4>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Watches;