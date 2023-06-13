import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openConfirmationModal } from "../features/confirmation-modal/confirmationModalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  console.log("cartItems", cartItems);

  return (
    <>
      {amount < 1 && (
        <>
          <section className="cart">
            <header>
              <h2>Your Bag</h2>
              <h4 className="empty-cart"> is currently empty </h4>
            </header>
          </section>
        </>
      )}
      {amount > 1 && (
        <>
          <section className="cart">
            <header>
              <h2>Your Bag</h2>
            </header>
            <div>
              {cartItems.map((cart, key) => {
                return <CartItem key={key.id} {...cart} />;
              })}
            </div>
            <footer>
              <hr />
              <div className="cart-total">
                <h4>
                  total<span>${total.toFixed(2)}</span>
                </h4>
              </div>
              <button
                className="btn clear-btn"
                onClick={() => {
                  dispatch(openConfirmationModal());
                }}
              >
                Clear Cart
              </button>
            </footer>
          </section>
        </>
      )}
    </>
  );
};

export default CartContainer;
