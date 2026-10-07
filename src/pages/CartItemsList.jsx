import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrementCartItemQuantity, deletecartItem, incrementCartItemQuantity } from "../redux/productSlice";
import './CartItemsList.css'
import { toast } from "react-toastify";


const CartItemsList = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [deleteCartItemId, setDeleteCartItemId] = useState(null);


  const { cartItems } = useSelector((state) => state.productState);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setDeleteCartItemId(id);
  }

  const handleUserDelete = () => {
    dispatch(deletecartItem(deleteCartItemId));
    toast.success("product deleted successfully!");
    handleClose();
    console.log(deleteCartItemId);
  }

  const handleIncrement = (id) => {
    dispatch(incrementCartItemQuantity(id));
  }

  const handleDecrement = (id) => {
    dispatch(decrementCartItemQuantity(id));
  }

  const findCartItemsTotal = cartItems.reduce((total, item) => {
  const price = Number(item.productPrice ?? item.price ?? 0);
  const quantity = Number(item.quantity ?? 1);

  return total + quantity * price;
}, 0);

  return (
    <>
      <div className="container">
        <h2>CART ITEMS</h2>
        {cartItems.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Photo</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((cartItem, index) => (
                <tr key={cartItem.id}>
                  <td>{index + 1}</td>

                <td>
  <img
    src={cartItem.productPhoto ?? cartItem.image}
    width="50"
    alt={cartItem.productName ?? cartItem.name}
  />
</td>

<td>{cartItem.productName ?? cartItem.name}</td>

<td>₹{cartItem.productPrice ?? cartItem.price}</td>

                  <td className="text-center v-middle">
                    <InputGroup className="mb-3">
                      <Button
                        disabled={cartItem.quantity < 2 ? true : false}
                        variant="outline-danger"
                        onClick={() => handleDecrement(cartItem.id)} >
                        -
                      </Button>

                      <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={cartItem?.quantity ?? 0}
                        className="quantity-field"
                        readOnly
                      />

                      <Button
                        variant="outline-success"
                        onClick={() => handleIncrement(cartItem.id)}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </td>

                  <td className="text-center">
                    <MdDelete size={23} onClick={() => handleShow(cartItem.id)} />
                  </td>
                </tr>
              ))}

              <tr>
                <td className="text-end" colSpan={6}>
                  <h5>Total Price: ₹{findCartItemsTotal}</h5>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h2>Your cart is Empty</h2>
        )}

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleUserDelete}>
            Delete Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CartItemsList;