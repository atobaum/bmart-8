import React from 'react';
import styled from 'styled-components';
import CategoryProduct from '../components/CategoryDetail/CategoryProduct';
import palette from '../lib/styles/palette';
import Search from '../components/Search';

const CategoryDetailBlock = styled.div`
  height: 100vh;
  background-color: ${palette.gray200};
`;

const CategoryDetailPage: React.FC<any> = ({ match }: any) => {
  const q = match.params.query || '';

  return (
    <CategoryDetailBlock>
      <Search></Search>
      <CategoryProduct id={q}></CategoryProduct>
    </CategoryDetailBlock>
  );
};

export default CategoryDetailPage;
