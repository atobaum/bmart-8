import React from 'react';
import styled from 'styled-components';

const FilterBlock = styled.div`
  background-color: white;
  position: relative;
  float: right;
  right: 1rem;
  top: 1rem;
  padding-bottom: 0.5rem;
`;

function Filter({ onChange }) {
  return (
    <FilterBlock>
      <select onChange={onChange}>
        <option value="basic">기본 정렬순</option>
        <option value="new">최근 등록순</option>
        <option value="expensive">금액 높은순</option>
        <option value="cheap">금액 낮은순</option>
        <option value="sale">할인률 높은순</option>
      </select>
    </FilterBlock>
  );
}
export default Filter;
