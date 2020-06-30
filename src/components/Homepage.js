import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Switch,Route,Link,Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {items as order} from '../redux/reducers/ImReducer'
import {Items,CartItem,deleteItem} from '../redux/actions/ImActions'
import Cart from './Cart'
import Bill from './Bill'

function Homepage({products,...props}) {
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
  cit.splice(0);
  setModalShow(false)
  
}
const[product,setProduct]=useState(items)
useEffect(()=>{
    
props.getItems()

},[])
//console.log()
 console.log(products)
 let prod=Object.entries(products)
 let parr=Object.values(prod[0][1])
let cit=order.orders;
//  console.log(cit)
//  console.log(parr)
let arr=Object.entries(parr)
//  let proarr=Object.entries(arr[0].items)
//  console.log(proarr)
    return (
      
        <div className="container text-center">

<nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand" href="/">IMSS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse">
  
    <ul className="nav justify-content-center ">
      <li className="nav-item active">
        <a className="nav-link" href="/"> SHOP<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        {/* <Link className="nav-link" to='/cart'>CART</Link> */}
      </li>
    </ul>
    
  </div>
</nav>

        <div className="row">
            <div className='col col-12'>
                <h1 className="text-primary"> SHOP ITEMS</h1>
                <span>cart items:<b>{cit.length}</b></span>
                <button type="button" className="btn btn-primary" onClick={()=>{callModal()}}>GOTO BILL</button>
            </div>
        </div>
        <div className="container">
  <div className="row">
      { 
       arr.map(([key,value])=>{
            
            return (
     
    <div key={key} className="card" style={{width:"16rem"}}>
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
 
</div>
{<Bill  item={cit} show={modalShow} onHide={() => hide()}></Bill>}
       </div>
       
    )

}
const mapStateToProps=(state)=>{
   // console.log(state)
    return{  products:state.Items
             //cartitems:state.Cart
    }
  }
  const mapActionToProps={
      getItems:Items,
      CartIns:CartItem,
      CartDel:deleteItem
        }
  export default connect(mapStateToProps,mapActionToProps)(Homepage)


