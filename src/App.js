import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch,Route,Link,Redirect,withRouter} from 'react-router-dom'
import Homepage from './components/Homepage';
import {Nav ,Navbar,NavDropdown} from 'react-bootstrap'
 import Hats from './components/Hats';
import Sneakers from './components/Sneakers';
import Women from './components/Women';
import Men from './components/Men';
import Bill from './components/Bill'
function App({products,cartitems,...props}) {

  const [modalShow, setModalShow] = React.useState(false);
    const callModal=()=>{
        setModalShow(true)
    
    }
    const hide=()=>{
      cartitems.splice(0);
      setModalShow(false)
      
    }
  return (
    <div className="App">
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">IMSS</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="/hats">HATS</NavDropdown.Item>
        <NavDropdown.Item href="/sneakers">SNEKERS</NavDropdown.Item>
        <NavDropdown.Item href="/women">WOMEN</NavDropdown.Item>
        <NavDropdown.Item href="men">MEN</NavDropdown.Item>
        
      </NavDropdown>

      <Nav.Link ><span>cart items:<b>{cartitems.length}</b></span></Nav.Link>
      <Nav.Link  onClick={()=>{callModal()}}>YOUR CART</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>

         <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route exact path='/hats' component={Hats}/>
       <Route exact path='/sneakers' component={Sneakers}/>
       <Route exact path='/women' component={Women}/>
       <Route exact path='/men' component={Men}/>
     </Switch>
       <div>
       {<Bill  show={modalShow} onHide={() => hide()}></Bill>}       
       </div>
     </div>
  );
}

const mapStateToProps=(state)=>{
  return {
     products:state.Items,
     cartitems:state.Cart
  }

}
const mapActionToProps={
  // getItems:Items,
  // CartIns:CartItem,
  //CartDel:deleteItem
    }
export default connect(mapStateToProps,mapActionToProps)(App)


