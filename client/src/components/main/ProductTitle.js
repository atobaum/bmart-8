import React from 'react';
import styled from 'styled-components';

const ProductTitleBlock = styled.div`
  margin: 1rem;
  background-color: white;
  text-align: left;
  font-weight: bold;
`;

function ProductTitle() {
  return (
    <ProductTitleBlock>
      <div className="title">ㅇㅇㅇ님을 위해 준비한 상품</div>
    </ProductTitleBlock>
  );
}

export default ProductTitle;
