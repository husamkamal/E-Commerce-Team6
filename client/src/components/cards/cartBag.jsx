import PropTypes from 'prop-types';
import './cartBag.css';
import swal from 'sweetalert';

function CartBag({ order, changeQuantity, removeOrder }) {
  const { OrderID, ProductName, ProductImage, ProductPrice, ProductQuantity } =
    order;

  const confirmRemoving = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeOrder(OrderID);
      }
    });
  };

  return (
    <div>
      <div className="card">
        <img src={ProductImage} alt="" className="cardImage" />
        <div>
          <h2 className="cardName">{ProductName}</h2>
          <h3 className="cardPrice">USD ${ProductPrice}</h3>
          <div className="Quantity">
            <button
              onClick={() => changeQuantity(OrderID, ProductQuantity + 1)}
              type="button"
            >
              +
            </button>
            <input type="number" value={ProductQuantity} />
            <button
              onClick={() => changeQuantity(OrderID, ProductQuantity - 1)}
              type="button"
            >
              -
            </button>
          </div>
        </div>
        <button
          onClick={confirmRemoving}
          type="button"
          className="removeFromCart"
        >
          x Remove
        </button>
      </div>
      <hr style={{ marginTop: '10px' }} />
    </div>
  );
}

export default CartBag;

CartBag.propTypes = {
  order: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  changeQuantity: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  removeOrder: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
