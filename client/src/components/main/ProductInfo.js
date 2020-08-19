import React from 'react';
import styled from 'styled-components';
import ProductPhoto from './ProductPhoto';
import ProductContent from './ProductContent';

const ProductInfoBlock = styled.div``;

function ProductInfo() {
  return (
    <ProductInfoBlock>
      <ProductPhoto></ProductPhoto>
      <ProductContent></ProductContent>
    </ProductInfoBlock>
  );
}

export default ProductInfo;
