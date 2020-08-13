import React, { useState, Fragment } from 'react';
import styled, { css } from 'styled-components';

const Cart = styled.div`
  .button {
    height: 50px;
    width: 50px;
    border: solid 1px black;
    cursor: grab;
  }
  display: flex;
`;

const Count = styled.div`
  height: 50px;
  width: 50px;
  color: black;
  border: solid 1px black;
`;

function ShoppingCart() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    if (number == 0) return;
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <Cart>
      <div className="button" onClick={onDecrease}>-</div>
      <Count>{number}</Count>
      <div className="button" onClick={onIncrease}>+</div>
    </Cart>
  );
}

export default ShoppingCart;
