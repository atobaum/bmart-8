import React from 'react';
import styled from 'styled-components';
import WishButton from '../WishButton';
import imgA from '../../static/icon/icon-backery.png';

const ProductPhotoBlock = styled.div`
  margin-left: 1rem;
  border: 1px solid black;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  position: relative;

  .Thumbnail {
    width: 100%;
    height: 100%;
  }

  .WishButton {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
  }
`;

function ProductPhoto() {
  return (
    <ProductPhotoBlock>
      <img className="Thumbnail" src={imgA}></img>
      <div className="WishButton">
        <WishButton filled={false}></WishButton>
      </div>
    </ProductPhotoBlock>
  );
}

export default ProductPhoto;
