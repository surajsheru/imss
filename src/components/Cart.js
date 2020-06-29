import React,{useEffect,useState} from 'react'
import {CartItem,deleteItem,CartDisplay} from '../redux/actions/ImActions'
import {connect} from 'react-redux'

function Cart(props) {

    useEffect(()=>{

    })
    // let cit=Object.entries(props.location.aboutProps)
    // console.log(cit)
    
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
        <a className="nav-link" href="/"> GOBACK<span className="sr-only">(current)</span></a>
      </li>
    </ul>
    
  </div>
</nav>

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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
}
const mapStateToProps=(state)=>{
   // console.log(state)
    return{  
        products:state.Items
        // cartitems:state.Cart
         }
      }
  const mapActionToProps={
        CartDel:deleteItem,
        CartDisp:CartDisplay
        }

export default connect(mapStateToProps,mapActionToProps)(Cart)
