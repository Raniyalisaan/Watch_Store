import { useEffect, useState } from "react";
import { Container, Table, Spinner, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import api from "../api";

const ListProduct = ({ watches = [] }) => {
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { products = [] } = useSelector(
    (state) => state.productState
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("products/");
        setApiProducts(response.data);
        
      } catch (err) {
        console.error(err);
        setError("Unable to load Django products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const frontendProducts = [
    ...watches,
    ...products,
  ];

  const allProducts = [
    ...apiProducts,
    ...frontendProducts,
  ];

  const uniqueProducts = allProducts.filter(
    (product, index, array) => {
      const name = (
        product.productName || product.name || ""
      ).trim().toLowerCase();

      return (
        index ===
        array.findIndex((item) => {
          const itemName = (
            item.productName || item.name || ""
          ).trim().toLowerCase();

          return itemName === name;
        })
      );
    }
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
        PRODUCT LIST
      </h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading products...</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {uniqueProducts.length > 0 ? (
              uniqueProducts.map((product, index) => (
                <tr key={`${product.id}-${index}`}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={
                        product.productPhoto ||
                        product.image
                      }
                      alt={
                        product.productName ||
                        product.name ||
                        "Product"
                      }
                      width="80"
                      height="80"
                      style={{ objectFit: "contain" }}
                    />
                  </td>

                  <td>
                    {product.productName || product.name}
                  </td>

                  <td>
                    {product.productDescription ||
                      product.description}
                  </td>

                  <td>
                    ₹
                    {product.productPrice ||
                      product.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ListProduct;