import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/userSlice";
import { FaShoppingCart } from "react-icons/fa";


function Header(){
    const { isAuthenticated,user } = useSelector((state) => state.userState);
  const { cartItems } = useSelector((state) => state.productState) || [];
  const dispatch = useDispatch();

  const handleLogout = () => {

    dispatch(userLogout());

  }
  return(
 <Navbar expand="lg" className="header-bg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src="/logo.jpg" alt="logo" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
             <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/watches">WATCHES</Nav.Link>
            <Nav.Link as={Link} to="/smart">SMART</Nav.Link>
            <Nav.Link as={Link} to="/brand">BRAND</Nav.Link>
            <Nav.Link as={Link} to="/stores">STORES</Nav.Link>
            <Nav.Link as={Link} to="/offer">OFFERS</Nav.Link>
            
          </Nav>

           <Nav className="ms-auto">
           <Nav.Link as={Link} to="/cartitemslist" className="position-relative">
              <span className="cart-count">
                {cartItems?.length ?? 0}
              </span>
              <FaShoppingCart size={20} className="cart-icon" />
            </Nav.Link>
            {isAuthenticated ? (
              <NavDropdown title={user?.fullname?.[0].toUpperCase()} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} to="/admin/list-product">
                  List Products
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/list-users">
                  List Users
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/login" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>

            )}
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;