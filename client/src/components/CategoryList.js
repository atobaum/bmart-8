import React, { useState } from 'react';
import styled from 'styled-components';

const CategoryListBlock = styled.div``;

function CategoryList(props) {
  let categoryLists = [];

  props.CategoryList.forEach((category) => {
    categoryLists.push(<li>{category.name}</li>);
  });
  return <CategoryListBlock>{categoryLists}</CategoryListBlock>;
}

export default CategoryList;
