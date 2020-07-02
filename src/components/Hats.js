
import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Switch,Route,Link,Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Nav ,Navbar,NavDropdown} from 'react-bootstrap'
import {Items,CartItem,deleteItem} from '../redux/actions/ImActions'
import Bill from './Bill'


function Hats({products,cartitems,...props}) {
    const items={
        id:"",
        name:"",
        imageUrl:"",
        price:"",
        cat:""
    }
    
    const [modalShow, setModalShow] = React.useState(false);
    const callModal=()=>{
        setModalShow(true)
    
    }
    const hide=()=>{
      cartitems.splice(0);
      setModalShow(false)
      
    }
    const[product,setProduct]=useState(items)
    useEffect(()=>{
       // console.log(props)
    props.getItems()
    
    },[])
    
     console.log(products)
     let prod=Object.values(products)
     //products=Object.entries(products)
     console.log(prod)
     let arr=Object.values(prod)
     console.log(arr.length )
     console.log(cartitems.length )
     console.log(cartitems )
    let hats=arr.filter(item=>item.cat==='hats')
    
    return (
      
        <div className="container text-center">
      <div className="row">
            <div className='col col-8'>
                <h1 className="text-primary text-center"> SHOP ITEMS</h1>
                {/* <span>cart items:<b>{cartitems.length}</b></span> */}
              </div>
              {/* <div className="col col-sm-4">  <button type="button" className="btn btn-primary" onClick={()=>{callModal()}}>GOTO BILL</button>
            </div> */}
        </div>
       <div className="row">
       { 
       hats.map((value)=>{
            
            return (
     
    <div key={value.id} className="card" style={{width:"16rem"}}>
    <img className="card-img-top" width="100px" height="180px" src={value.imageUrl} alt={value.name}/>
    <div className="card-body">
  <span className="card-title">Product Name:</span><h4>{value.name}</h4>
  <span className="card-test">price:</span><h4>${value.price}</h4>
    <button className="btn btn-primary" onClick={()=>{props.CartIns(value)}}>Add To Catr</button>
  </div>
    </div>
          
            )
            
            
       })
      }
 </div>
 {<Bill  show={modalShow} onHide={() => hide()}></Bill>}       
 </div>
 
    )
}
 
const mapStateToProps=(state)=>{
      return {
         products:state.Items,
         cartitems:state.Cart
      }
    
  }
  const mapActionToProps={
      getItems:Items,
      CartIns:CartItem,
      //CartDel:deleteItem
        }
  export default connect(mapStateToProps,mapActionToProps)(Hats)


