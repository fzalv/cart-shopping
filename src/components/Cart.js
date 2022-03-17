import React from "react";
// import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Plus from 'remixicon-react/AddLineIcon'
import Minus from 'remixicon-react/SubtractLineIcon'
import Sampah from 'remixicon-react/DeleteBin6LineIcon'
import Whishlist from 'remixicon-react/HeartLineIcon'


const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };

  const total = cart.reduce(addition, 0);

  const cardItem2 = (item) => {
    return (
      <div className="card mb-3" key={item.id}>
        <div className="row">
          <div className="col-4">
            <img src={` ../images/${item.image}`} className="img-fluid rounded-start" />
          </div>
          <div className="col-4">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <button className="btn btn-sm" onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                <Sampah /> Remove Item
              </button>
              <button className="btn btn-sm">
                <Whishlist /> Move to Whishlist
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => dispatch({ type: "INCREASE", payload: item })}
                  >
                    <Plus />
                  </button>
                </div>

                <div className="col-4 text-center"><p>{item.quantity}</p></div>

                <div className="col-4">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  >
                    <Minus />
                  </button>
                  <p className="card-text fw-bold mt-5">${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }

  return (
    <div>
      <div className='container py-5'>
        <h1 className="text-center">Shopping Cart</h1>
        <hr />
        <div className="row">
          <div className="col-8">
            {cart.map(cardItem2)}
          </div>

          <div className="col-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">The total amount of :</h5>
                <div className="row">
                  <div className="col-8">
                    <p>Temporary amount</p>
                    <p>Shipping</p>
                  </div>
                  <div className="col-4">
                    <p>${total > 0 && total}</p>
                    <p>Gratis</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-8">
                    <p>The total amount of (including VAT)</p>
                  </div>
                  <div className="col-3">
                    <p>${total > 0 && total}</p>
                  </div>
                </div>
                <a href="#" class="btn btn-primary d-grid">GO TO CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cart;
