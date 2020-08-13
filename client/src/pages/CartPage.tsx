import React from 'react';
import styled from 'styled-components';
import PriceLabel from '../components/price-label';

const CartPageBlock = styled.div``;

const CartPage: React.FC = () => {
  return (
    <CartPageBlock>
      CartPage
      <PriceLabel discountPercentage={0} price={10000} />
      <PriceLabel discountPercentage={20} price={100000} />
      <PriceLabel discountPercentage={41} price={150000} />
      <PriceLabel discountPercentage={80} price={125123213} />
    </CartPageBlock>
  );
};

export default CartPage;
