import React from 'react';
import styled from 'styled-components';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import CategoryList from '../components/CategoryList';

const GET_CATEGORY = gql`
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
      <Query query={GET_CATEGORY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error...</p>;
          let categoryList = [];
          data.firstCategories.forEach((firstCategory) => {
            categoryList.push(
              <>
                <div>{firstCategory.name}</div>
                <CategoryList
                  CategoryList={firstCategory.children}></CategoryList>
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
