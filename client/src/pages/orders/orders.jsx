import './orders.css';
import Btn from '../../components/btn';
import CartBag from '../../components/cards/cartBag';

function Orders() {
  return (
    <div className="container">
      <div className="Bag">
        <div className="BagHeader">
          <h3 className="BagTitle">
            BAG <span className="BagCount">2 items</span>
          </h3>
          <button type="button" className="RemoveAll">
            x RemoveAll
          </button>
        </div>
        <hr />
        <CartBag />
        <CartBag />
        <CartBag />
        <CartBag />
        <div className="cartFooter">
          <h1>Total USD $490.00</h1>
          <Btn Name="CHECKOUT" />
        </div>
      </div>
    </div>
  );
}

export default Orders;
