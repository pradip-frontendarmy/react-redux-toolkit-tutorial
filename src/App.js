import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import DeleteConfirmationModal from "./modals/DeleteConfirmationModal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpenConfirmationModal } = useSelector(
    (store) => store.confirmationModal
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <>
      {isLoading && (
        <>
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        </>
      )}
      <main>
        {isOpenConfirmationModal && <DeleteConfirmationModal />}
        <Navbar />
        <CartContainer />
      </main>
    </>
  );
}
export default App;
