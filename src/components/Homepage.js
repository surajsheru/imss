import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Switch,Route,Link,Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Items,setItem,deleteItem} from '../redux/actions/ImActions'

function Homepage({products,...props}) {
const items={
    id:"",
    name:"",
    imageUrl:"",
    price:"",
    cat:""
}
const[product,setProduct]=useState(items)
useEffect(()=>{
    
props.getItems()

},[])
 console.log(products)
 let arr=Object.entries(products)
    return (
      
        <div className="container text-center">
        <div className="row">
            <div className='col col-12'>
                <h1 className="text-primary"> SHOP ITEMS</h1>
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
  <span className="card-test">price:</span><h4>{value.price}</h4>
    <button className="btn btn-primary">Add To Catr</button>
  </div>
    </div>
          
            )
            
            
       })
      }
 </div>
</div>
        </div>
       
    )
}
const mapStateToProps=(state)=>{
   // console.log(state)
    return{  products:state.Items}
  }
  const mapActionToProps={
      getItems:Items,
        }
  export default connect(mapStateToProps,mapActionToProps)(Homepage)


