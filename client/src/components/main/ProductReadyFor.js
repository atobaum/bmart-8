import React from 'react';
import styled from 'styled-components';
import ProductTitle from './ProductTitle';
import ProductInfo from './ProductInfo';

const ProductReadyForBlock = styled.div`
  .ProductTitle {
    margin: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
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

function ProductReadyFor() {
  return (
    <ProductReadyForBlock>
      <div className="ProductTitle">
        ㅇㅇㅇ님을 위해 준비한 상품
        <ProductTitle></ProductTitle>
      </div>
      <div className="ProductInfo">
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
      </div>
    </ProductReadyForBlock>
  );
}

export default ProductReadyFor;
