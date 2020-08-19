import React from 'react';
import styled from 'styled-components';
import ProductTitle from './ProductTitle';
import ProductInfo from './ProductInfo';

const ProductBlock = styled.div`
  .ProductInfo {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function Product() {
  return (
    <ProductBlock>
      <ProductTitle></ProductTitle>
      <div className="ProductInfo">
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
      </div>
    </ProductBlock>
  );
}

export default Product;
