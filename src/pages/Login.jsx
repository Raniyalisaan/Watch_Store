import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../redux/userSlice";


const Login = () => {
  const [validated, setValidated] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch();
  const handleChange = (event) => {

    setLoginData((prev) => {

      const updateData = { ...prev, [event.target.name]: event.target.value }

      return updateData;
    });

  }

  const handleLogin = (event) => {
    const form = event.currentTarget;
event.preventDefault();

    if (form.checkValidity() === false) {
      
      event.stopPropagation();
      setValidated(true);

      const newErrors = {};

      form.querySelectorAll(':invalid').forEach((input) => {

        setErrors((prev) => {
          const updateErrors = { ...prev, [input.name]: input.validationMessage }
          return updateErrors;
        })

      });
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];

const user = users.find((user)=> user.email === loginData.email);

if (!user){
  toast.error("User not found!");
  return;
}
if(user.password !== loginData.password){
  toast.error("Invalid credentials!");
  return;
}

if(!user.status){
  toast.error("User is inActive");
  return;
}

dispatch(userLogin(user));

toast.success("User logged successfully!");
navigate("/");
  }



  return (

    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={4}>
          <Row>
            <Col className="mb-2">
              <h4 className="text-center">USER LOGIN</h4>
            </Col>

          </Row>
          <Row>
            <Col >
              <Form noValidate validated={validated} onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    Email address
                  </Form.Label>

                  <Form.Control type="email"
                    placeholder="Enter email"
                    name="email"
                    onKeyUp={handleChange}
                    required />

                  <Form.Control.Feedback type="invalid">
                    {errors?.email}
                  </Form.Control.Feedback>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    Password
                  </Form.Label>

                  <Form.Control type="password"
                    placeholder="Password"
                    name="password"
                    onKeyUp={handleChange}
                    required />
                  <Form.Control.Feedback type="invalid">
                    {errors?.password}
                  </Form.Control.Feedback>

                </Form.Group>
                <div className="d-grid">
                  <Button type="submit">Login</Button>
                </div>
              </Form>
            </Col>

            <div className="mt-3 text-center">
              If you don't have an account, <Link to={'/register'}>
              Register Now</Link>
               </div>
          </Row>
        </Col>
      </Row>

    </Container>
  )
}
export default Login;