import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
const MainPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPage: React.FC = () => {
  return (
    <MainPageBlock>
      <Header></Header>
      <Carousel></Carousel>
    </MainPageBlock>
  );
};

export default MainPage;
