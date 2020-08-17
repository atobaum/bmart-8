import React from 'react';
import styled from 'styled-components';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import CategoryContent from '../components/CategoryContent';
import CategoryTitle from '../components/CategoryTitle';

const GetFirstCategory = gql`
  query {
    firstCategories {
      name
      children {
        name
      }
    }
  }
`;

const CategoryPageBlock = styled.div``;
function CategoryPage() {
  return (
    <CategoryPageBlock>
      <Query query={GetFirstCategory}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error...</p>;
          let categoryList = [];
          data.firstCategories.forEach((firstCategory) => {
            categoryList.push(
              <>
                <CategoryTitle>{firstCategory.name}</CategoryTitle>
                <CategoryContent
                  CategoryContent={firstCategory.children}></CategoryContent>
              </>
            );
          });
          return categoryList;
        }}
      </Query>
    </CategoryPageBlock>
  );
}

export default CategoryPage;
