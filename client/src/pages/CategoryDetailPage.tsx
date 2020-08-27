import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

import CategoryProduct from '../components/CategoryDetail/CategoryProduct';
import CategoryHeader from '../components/CategoryDetail/CategoryHeader';

const CategoryDetailBlock = styled.div`
  height: 100vh;
  background-color: ${palette.gray200};
`;

const CategoryDetailPage: React.FC<any> = ({ match }: any) => {
  const categoryId = match.params.query || '1';
  const type = match.params.type || '';
  return (
    <CategoryDetailBlock>
      <CategoryHeader type={type} id={categoryId}></CategoryHeader>
      <CategoryProduct type={type} id={categoryId}></CategoryProduct>
    </CategoryDetailBlock>
  );
};

export default CategoryDetailPage;
