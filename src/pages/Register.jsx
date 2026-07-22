import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userRegister } from "../redux/userSlice";

const Register = () => {

  const { Formik } = formik;
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const schema = yup.object().shape({
    fullname: yup.string().required("Please enter fullname").min(2, "Fullname should contain min 2 charecters")
    .max(30, "Fullname shouldn't exeeded upto 30 charecters"),
    email: yup.string().required("Please enter email").email("Please enter a valid email"),
    password: yup.string().required("Please enter Password"),
  });

  const handleRegister = (values)=>{
 values.id = Date.now();
 values.role = 'user';
 values.status = true;

 dispatch(userRegister(values));
  
 
  toast.success("User registered successfully!!");
   navigate("/login");
}

  return(
 <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={4}>
          <Row>
            <Col className="mb-2">
              <h4 className="text-center">USER REGISTER</h4>
            </Col>

          </Row>
          <Row>
            <Col >
              <Formik
                validationSchema={schema}
                onSubmit={handleRegister}
                initialValues={{
                  fullname: '',
                  email: '',
                  password: ''
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (  //values = {} object
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupFullname">
                      <Form.Label>  Fullname </Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Enter fullname"
                        name="fullname"
                        onChange={handleChange}
                        value={values.fullname}
                        isValid={touched.fullname && !errors?.fullname}
                        isInvalid={touched.fullname && !!errors?.fullname}
                        />

                      <Form.Control.Feedback type="invalid">
                        {errors?.fullname}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>
                        Email address
                      </Form.Label>

                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        isValid={touched.email && !errors?.email}
                        isInvalid={touched.email && !!errors?.email}/>

                      <Form.Control.Feedback type="invalid">
                        {errors?.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>
                        Password
                      </Form.Label>

                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={handleChange}
                        value={values.password} 
                         isValid={touched.password && !errors?.password}
                        isInvalid={touched.password && !!errors?.password}/>

                      <Form.Control.Feedback type="invalid">
                        {errors?.password}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <div className="d-grid">
                      <Button type="submit">Register</Button>
                    </div>
                  </Form>
                )}

              </Formik>
            </Col>


          </Row>
        </Col>
      </Row>

    </Container>
  )
}
export default Register;