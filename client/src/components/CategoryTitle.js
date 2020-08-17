import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const CategoryTitleBlock = styled.div`
  font-size: 1.5em;
  text-align: left;
  div {
    height: 0.1em;
    width: 25%;
    border: solid 0.1em ${palette.baemint};
    background-color: ${palette.baemint};
    top: 1em;
  }
`;

function CategoryTitle(props) {
  return (
    <CategoryTitleBlock>
      {props.title}
      <div />
    </CategoryTitleBlock>
  );
}

export default CategoryTitle;
