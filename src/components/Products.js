import React from 'react'
import { Data } from './Data'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from 'remixicon-react/ShoppingCartFillIcon'

const Products = () => {

  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const cardItem = (item) => {
    item.quantity = 1
    return (
      <div className="card my-4 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <p className="lead">${item.price}</p>
          <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "ADD", payload: item })}>
            Add to Cart
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
          <div className="col-12 text-center">
            <Link to='/cart'>
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row justify-content-around">
          {Data.map(cardItem)}
        </div>
      </div>
    </div >
  )
}

export default Products