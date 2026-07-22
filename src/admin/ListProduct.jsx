import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/productSlice";
import { toast } from "react-toastify";


const ListProduct = () => {
  const [show, setShow] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productState);

  const handleClose = () => setShow(false);

  const handleShow = (productId) => {
    setShow(true);
    setDeleteProductId(productId);
  }


  const handleUserDelete = () => {
    dispatch(deleteProduct(deleteProductId));
    toast.success("product deleted successfully!");
    handleClose();
  }

  return (
    <>
      <div className="container">
        <h2>LIST PRODUCTS</h2>

        <div className="d-flex justify-content-end mb-3">
          <Link to="/admin/add-product">
            <Button variant="dark">+ Add Product</Button>
          </Link>
        </div>

        {products.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Photo</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>
                    <img src={product?.productPhoto ?? null} width="50" />
                  </td>
                  <td>{product?.productName ?? ''}</td>

                  <td>{product?.productPrice ?? 0}</td>

                  <td className="text-center  text-primary">
                    <Link to={`/admin/edit-product/${product.id}`}>
                      <MdEdit className="cursor-pointer text-dark" size={23} />
                    </Link>
                  </td>
                  <td className="text-center">
                    <MdDelete className="cursor-pointer text-dark" size={23} onClick={() => handleShow(product.id)} />

                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        ) : (
          <h2>Products not found</h2>
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

export default ListProduct;