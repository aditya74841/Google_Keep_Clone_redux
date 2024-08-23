import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../ActionReducer/ActionReducer'

const IndexPage = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const increaseNumber = () => {
    // setNumber((prevNumber) => prevNumber + 1);
    dispatch(increment());
  };

  const decreaseNumber = () => {
    // setNumber((prevNumber) => prevNumber - 1);
    dispatch(decrement());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Number: {count}</h1>
      <button onClick={increaseNumber}>Increase Number</button>
      <button onClick={decreaseNumber}>Decrease Number</button>
    </div>
  );
};

export default IndexPage;
