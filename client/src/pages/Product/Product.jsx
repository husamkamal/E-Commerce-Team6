import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  // const [data, setData] = useState({});
  const { productId } = useParams();
  const handlerAmount = (type) => {
    // eslint-disable-next-line no-unused-expressions
    type === 'dec'
      ? setQuantity((prevState) => prevState - 1)
      : setQuantity((prevState) => prevState + 1);
  };
  useEffect(() => {
    const controller = new AbortController();
    const getProductData = async () => {
      try {
        const res = await axios.get(`/api/v1/product/${productId}`, {
          signal: controller.signal,
        });
        console.log(res, 1);
      } catch (error) {
        console.log(error, 1);
      }
    };
    getProductData();
    return () => {
      controller.abort();
    };
  });
  return (
    <div>
      <div className="wrapper">
        <div className="image-container">
          <img
            className="image"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="information">
          <h1 style={{ fontWeight: '200' }}>product Title</h1>
          <p style={{ margin: '20px 0px' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, illum id. Atque odio saepe, vitae quasi repellat
            reprehenderit doloremque nobis hic excepturi enim magnam molestias
            porro. Culpa perferendis modi iure.
          </p>
          <span
            style={{
              fontSize: '40px',
              fontWeight: '100',
            }}
          >
            $30
          </span>
          <div className="amount-container">
            <button
              style={{ padding: '0rem .5rem' }}
              type="button"
              className="remove"
              onClick={() => handlerAmount('dec')}
            >
              -
            </button>
            <span className="amount">{quantity}</span>
            <button
              style={{ padding: '0rem .5rem' }}
              type="button"
              className="add"
              onClick={() => handlerAmount('inc')}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
