
import React,{useState} from 'react'
import{Modal,Button,Container,Row,Col} from 'react-bootstrap'
function Bill(props) {
         let sum=0;
       console.log(props.item) 
     let arr=Object.values(props.item)
     console.log(arr)
    return (
      
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         MODIFY THE PRODUCT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>{}</h1>
        <Container fluid>
  <Row>
    <Col className="text-center">
    

<table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          
        {    arr.map((x)=><tr key={x.name}>

        <td scope="row"><img src={x.imageUrl} alt={x.name}></img></td>
            <td>{x.name}</td>
            <td>1</td>
            <td><button>DELETE</button></td>
            {console.log(sum=sum+parseInt (x.price))}
        </tr>)
       
         }
        
          <tr><td rowSpan='3'>
   <h1>TOTAL BILL:</h1><h1>{sum}</h1>
          </td></tr>
                    
        </tbody>
      </table>
  
    </Col>
    <Col> </Col>
  </Row>
</Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}


export default  Bill
