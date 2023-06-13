import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeConfirmationModal } from "../features/confirmation-modal/confirmationModalSlice";

const DeleteConfirmationModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <aside className="modal-container">
        <div className="modal">
          <h4>Remove all items from your shopping cart?</h4>
          <div className="btn-container">
            <button
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeConfirmationModal());
              }}
            >
              Confirm
            </button>
            <button
              className="btn clear-btn"
              onClick={() => {
                dispatch(closeConfirmationModal());
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DeleteConfirmationModal;
