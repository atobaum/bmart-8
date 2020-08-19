import React from 'react';
import styled from 'styled-components';

const ProductContentBlock = styled.div`
  margin-top: 0.5rem;
  margin-left: 1rem;
  border: 1px solid black;
  width: 6rem;
  text-align: left;
  flex-shrink: 0;
`;

function ProductContent() {
  return <ProductContentBlock>컨텐츠입니다</ProductContentBlock>;
}

export default ProductContent;
