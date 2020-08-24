import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useCartState } from '../stores/cart-store';
import CartHeader from '../components/Cart/CartHeader';
import CartItem from '../components/Cart/CartItem';

const CartPageBlock = styled.div``;

const CartPage: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const cart = useCartState();

  return (
    <CartPageBlock>
      <Helmet>
        <title>장바구니 - B 마트</title>
      </Helmet>
      <CartHeader />
      {cart.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onChangeSelect={(checked) => {
            if (checked) setSelected([...selected, item.id]);
            else setSelected(selected.filter((id) => !selected.includes(id)));
          }}
        />
      ))}
    </CartPageBlock>
  );
};

export default CartPage;
