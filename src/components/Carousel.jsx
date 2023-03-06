import { useState } from 'react';

const Carousel = ({ images }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <img src={images[count]} alt="imagesCarrousel" width="193" height="130" />
      <button onClick={() => setCount(count - 1)}> Left </button>
      <button onClick={() => setCount(count + 1)}> Right </button>
    </div>
  );
};

export default Carousel;
