import { useState } from 'react';
import './cartBag.css';
import swal from 'sweetalert';

function CartBag() {
  const [Quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prevState) => (prevState >= 2 ? prevState - 1 : 1));
  };

  const confirmRemoving = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success',
        });
      } else {
        swal('Your imaginary file is safe!');
      }
    });
  };

  const imageURL =
    'https://images.unsplash.com/photo-1660452663887-ae41f96d14f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80';
  return (
    <div>
      <div className="card">
        <img src={imageURL} alt="" className="cardImage" />
        <div>
          <h2 className="cardName">NIKE SHOES BOYFRIEND PAIRS</h2>
          <h3 className="cardPrice">USD $340.00</h3>
          <div className="Quantity">
            <button onClick={increaseQuantity} type="button">
              +
            </button>
            <input type="number" value={Quantity} />
            <button onClick={decreaseQuantity} type="button">
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

      {/* <SweetAlert
        show={this.state.show}
        title="Demo with Cancel"
        text="SweetAlert in React"
        showCancelButton
        onConfirm={() => {
          console.log('confirm'); // eslint-disable-line no-console
          this.setState({ show: false });
        }}
        onCancel={() => {
          console.log('cancel'); // eslint-disable-line no-console
          this.setState({ show: false });
        }}
        onClose={() => console.log('close')} // eslint-disable-line no-console
      /> */}
    </div>
  );
}

export default CartBag;
