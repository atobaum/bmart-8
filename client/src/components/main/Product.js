import React from 'react';
import styled from 'styled-components';
import ProductReadyFor from './ProductReadyFor';

const ProductBlock = styled.div``;

function Product() {
  return (
    <ProductBlock>
      <ProductReadyFor></ProductReadyFor>
    </ProductBlock>
  );
}

export default Product;
