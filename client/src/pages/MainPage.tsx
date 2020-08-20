import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Product from '../components/main/Product';
const MainPageBlock = styled.div``;

const MainPage: React.FC = () => {
  return (
    <MainPageBlock>
      <Header></Header>
      <Product></Product>
    </MainPageBlock>
  );
};

export default MainPage;
