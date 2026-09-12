import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/productSlice";
import { toast } from "react-toastify";

const ListProduct = ({ watches = [] }) => {
  const [show, setShow] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);

  const dispatch = useDispatch();

  const { products = [] } = useSelector(
    (state) => state.productState
  );

  const allProducts = [...watches, ...products];

  const handleClose = () => {
    setShow(false);
    setDeleteProductId(null);
  };

  const handleShow = (productId) => {
    setShow(true);
    setDeleteProductId(productId);
  };

  const handleProductDelete = () => {
    if (deleteProductId !== null) {
      dispatch(deleteProduct(deleteProductId));
      toast.success("Product deleted successfully!");
    }

    handleClose();
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">
          LIST PRODUCTS
        </h2>

        <div className="d-flex justify-content-end mb-3">
          <Link to="/admin/add-product">
            <Button variant="dark">
              + Add Product
            </Button>
          </Link>
        </div>

        {allProducts.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Photo</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Product Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {allProducts.map((product, index) => (
                  <tr key={`${product.id}-${index}`}>
                    <td>{index + 1}</td>

                    <td>
                      <img
                        src={product.productPhoto}
                        alt={product.productName || "Product"}
                        width="70"
                        height="70"
                        style={{ objectFit: "contain" }}
                      />
                    </td>

                    <td>
                      {product.productName || ""}
                    </td>

                    <td>
                      {product.productDescription || ""}
                    </td>

                    <td>
                      ₹{product.productPrice ?? 0}
                    </td>

                    <td className="text-center">
                      <Link
                        to={`/admin/edit-product/${product.id}`}
                      >
                        <MdEdit
                          className="cursor-pointer text-dark"
                          size={23}
                        />
                      </Link>
                    </td>

                    <td className="text-center">
                      <MdDelete
                        className="cursor-pointer text-dark"
                        size={23}
                        onClick={() => handleShow(product.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="text-center">
            Products not found
          </h2>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete Product
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete this product?
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            variant="dark"
            onClick={handleProductDelete}
          >
            Delete Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListProduct;