import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Btn from '../../components/btn';
import './Product.css';

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({});
  const [error, setError] = useState({});
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
        setData(res.data);
      } catch (err) {
        setError(err);
      }
    };
    getProductData();
    return () => {
      controller.abort();
    };
  }, []);
  if (error.length) return <h1>interval server error</h1>;
  if (!data.id) return <h1>loading...</h1>;
  return (
    <div>
      <div className="wrapper">
        <div className="image-container">
          <img className="image" src={data.image} alt="" />
        </div>
        <div className="information">
          <h1 style={{ fontWeight: '200' }}>{data.name}</h1>
          <p style={{ margin: '20px 0px' }}>{data.description}</p>
          <span
            style={{
              fontSize: '40px',
              fontWeight: '100',
            }}
          >
            ${data.price}
          </span>
          <div className="amount-container">
            {quantity > 1 ? (
              <button
                style={{ padding: '0rem .5rem' }}
                type="button"
                className="remove"
                onClick={() => handlerAmount('dec')}
              >
                -
              </button>
            ) : (
              <button
                style={{ padding: '0rem .5rem' }}
                type="button"
                className="remove"
                onClick={() => handlerAmount('dec')}
                disabled
              >
                -
              </button>
            )}
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
          <Btn Name="Add To Cart" />
        </div>
      </div>
    </div>
  );
}
