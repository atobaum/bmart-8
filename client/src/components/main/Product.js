import React from 'react';
import styled from 'styled-components';
import ProductReadyFor from './readyFor/ProductReadyFor';
import ProductFlashDiscount from './discount/ProductFlashDiscount';
import ProductWhatEat from './whatEat/ProductWhatEat';
import ProductNew from './new/ProductNew';
import ProductSellGood from './sellGood/ProductSellGood';

const ProductBlock = styled.div``;

function Product() {
  return (
    <ProductBlock>
      <ProductReadyFor></ProductReadyFor>
      <ProductFlashDiscount></ProductFlashDiscount>
      <ProductWhatEat></ProductWhatEat>
      <ProductNew></ProductNew>
      <ProductSellGood></ProductSellGood>
    </ProductBlock>
  );
}

export default Product;
