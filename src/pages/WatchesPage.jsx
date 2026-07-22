import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux"
import { useMemo, useState } from "react";
import WatchCard from "../components/WatchCard";


const WatchesPage = () => {
  const {products} = useSelector((state)=> state.productState);

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event)=> {
    setSearchTerm(event.target.value);
  }

  const filteredproducts = useMemo(()=>{
    if (!searchTerm.trim()) return watches;

    return watches.filter((pr) => pr.productName.toLowerCase().includes(searchTerm.toLowerCase()));


  }, [watches, searchTerm]);

  // console.log("products------>",products);
  return(
<Container className="mt-4">
   <Row className="align-items-center mb-3">
  <Col>
    <h3>PRODUCTS</h3>
  </Col>

  <Col className="d-flex justify-content-end">
    <Form.Control
      style={{ width: '300px' }}
      type="text"
      id="search"
      placeholder="Search watches..."
      onChange={handleChange}
    />
  </Col>
</Row>

    {filteredproducts.length > 0 ?(
      <Row>
        {filteredproducts.map((watch,i)=>(
          <WatchCard key={i} watch = {watch}/>
        ))}
      </Row>
    ):(
      <Row>
        <Col>
        <h5>Watches not Found</h5>
        </Col>
      </Row>
    )}
</Container>
  )
  
}
export default WatchesPage;