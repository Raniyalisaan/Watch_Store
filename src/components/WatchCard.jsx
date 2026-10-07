import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/productSlice";
import { toast } from "react-toastify";

const WatchCard = ({ watch }) => {
  const dispatch = useDispatch();

const handleAddToCart = () => {
  console.log("Selected watch:", watch);
  console.log("Selected watch ID:", watch.id);

  const cartProduct = {
    id: watch.id,
    productName: watch.productName ?? watch.name,
    productPrice: Number(watch.productPrice ?? watch.price),
    productDescription: watch.productDescription ?? watch.description,
    productPhoto: watch.productPhoto ?? watch.image,
  };

  if (!cartProduct.id) {
    toast.error("This watch has no valid ID");
    return;
  }

  dispatch(addToCart(cartProduct));
  toast.success("Added to cart");
};

  // Support Django products and React watches
  const image = watch.productPhoto ?? watch.image;
  const name = watch.productName ?? watch.name;
  const description =
    watch.productDescription ?? watch.description;
  const price = watch.productPrice ?? watch.price;

  return (
    <Col md={6} lg={4} xl={3} className="mt-4">
      <Card className="text-center h-100">
        <Link to={`/watches/${watch.id}`}>
          <Card.Img
            variant="top"
            src={image}
            alt={name}
            style={{
              height: "250px",
              objectFit: "contain",
            }}
          />
        </Link>

        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text>{description}</Card.Text>

          <h6>₹{price}</h6>

          <h6 className="text-danger">
            CHECK AVAILABILITY
          </h6>

          <Button
            variant="dark"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WatchCard;