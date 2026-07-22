import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeRole, changeStatus, deleteUser } from "../redux/userSlice";
import { toast } from "react-toastify";


const ListUsers = () => {
  const [show, setShow] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userState);

  const handleClose = () => setShow(false);


  const handleShow = (userId) => {
    setShow(true);
    setDeleteUserId(userId);
  }
  const handleStatusChange = (id) => {
    dispatch(changeStatus(id));
  }

  const handleRoleChange = (id, role) => {
  dispatch(changeRole({ id, role }));
}

  const handleProductDelete = () => {
    dispatch(deleteUser(deleteUserId));
    toast.success("User deleted successfully!");
    handleClose();
  }


  return (
    <>
      <div className="container">
        <h2>LIST USERS</h2>
        {users.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>status</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>

                  <td>{user?.fullname ?? ''}</td>

                  <td>{user?.email ?? ''}</td>


                  <td>
                    <Form.Check
                      checked={user?.status}
                      type="switch"
                      id={`custom-switch-${index}`}
                      label={user?.status ? 'Active' : 'InActive'}
                      onChange={() => handleStatusChange(user?.id)}
                    />
                  </td>

                  <td className="text-center  text-primary">
                    <Form.Select
                      defaultValue={user?.role ?? ''}
                      aria-label="role"
                      onChange={(event) => handleRoleChange(user.id, event.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="seller">Seller</option>
                      <option value="user">User</option>
                    </Form.Select>
                  </td>
                  <td className="text-center">
                    <MdDelete className="cursor-pointer text-dark" size={23} onClick={() => handleShow(user.id)} />

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
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleProductDelete}>
            Delete User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ListUsers;