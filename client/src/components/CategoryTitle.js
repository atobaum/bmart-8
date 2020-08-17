import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const CategoryTitleBlock = styled.div`
  /* position: absolute; */
  font-size: 1.5em;
  div {
    height: 0.1em;
    width: 100%;
    border: solid 0.1em ${palette.baemint};
    background-color: ${palette.baemint};
    top: 1em;
  }
`;

function CategoryTitle(props) {
  return (
    <CategoryTitleBlock>
      {props.children}
      <div />
    </CategoryTitleBlock>
  );
}

export default CategoryTitle;
