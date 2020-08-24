import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import GoBackButton from '../GoBackButton';

const CartHeaderBlock = styled.div`
  display: flex;
`;

type CartHeaderProps = {};
const CartHeader: React.FC<CartHeaderProps> = () => {
  const history = useHistory();
  return (
    <CartHeaderBlock>
      <GoBackButton />
      <div>장바구니</div>
    </CartHeaderBlock>
  );
};
export default CartHeader;
