import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import './orders.css';
import Btn from '../../components/btn';
import CartBag from '../../components/cards/cartBag';

function Orders() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/v1/cart',
    }).then(({ data }) => {
      if (data.Status) {
        setCart(() => data.Data);
        let all = 0;
        data.Data.forEach((x) => {
          all += x.ProductPrice * x.ProductQuantity;
        });
        setTotal(() => all);
      }
    });
  }, []);

  const changeOrderQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    const newmap = cart.map((element) => {
      if (element.OrderID === id) {
        return { ...element, ProductQuantity: quantity };
      }
      return element;
    });
    axios({
      method: 'POST',
      url: '/api/v1/cart/edit',
      data: {
        orderid: id,
        quantity,
      },
    }).then(({ data }) => {
      if (data.Status) {
        setCart(() => newmap);
      }
    });
  };

  const removeOrder = (id) => {
    axios({
      method: 'DELETE',
      url: `/api/v1/cart/delete/${id}`,
    }).then(({ data }) => {
      if (data.Status) {
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success',
        });
        const newmap = cart.filter((element) => element.OrderID !== id);
        setCart(() => newmap);
      } else {
        swal('un expected error', {
          icon: 'error',
        });
      }
    });
  };

  const removeAll = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios({
          method: 'DELETE',
          url: `/api/v1/cart/delete`,
        }).then(({ data }) => {
          if (data.Status) {
            swal('Cart Is Empty', {
              icon: 'success',
            });

            setCart(() => []);
          } else {
            swal('un expected error', {
              icon: 'error',
            });
          }
        });
      }
    });
  };

  useEffect(() => {
    let all = 0;
    cart.forEach((x) => {
      all += x.ProductPrice * x.ProductQuantity;
    });
    setTotal(() => all);
  }, [cart]);

  return (
    <div className="container">
      <div className="Bag">
        <div className="BagHeader">
          <h3 className="BagTitle">
            BAG <span className="BagCount">{cart.length} items</span>
          </h3>
          <button type="button" onClick={removeAll} className="RemoveAll">
            x RemoveAll
          </button>
        </div>
        <hr />
        {cart
          ? cart.map((x) => (
              <div key={x.OrderID}>
                <CartBag
                  order={x}
                  changeQuantity={changeOrderQuantity}
                  removeOrder={removeOrder}
                />
              </div>
            ))
          : null}
        <div className="cartFooter">
          <h1>Total USD ${total}</h1>
          <Btn Name="CHECKOUT" />
        </div>
      </div>
    </div>
  );
}

export default Orders;
