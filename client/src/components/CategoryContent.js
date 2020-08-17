import React, { useState } from 'react';
import styled from 'styled-components';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import palette from '../lib/styles/palette';

const CategoryContentBlock = styled.div`
  .second,
  .third {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    cursor: pointer;
  }

  .second {
    font-weight: bold;
  }

  .third {
    background-color: ${palette.gray100};
  }

  .second > div,
  .third > div {
    width: 50%;
  }
`;

function CategoryContent(props) {
  const [selected, setSelected] = useState(false);
  const [showThird, setShowThird] = useState(false);

  function toggleThirdCategory(index) {
    if (showThird && selected === index) {
      setShowThird(false);
    } else {
      setShowThird(true);
    }
    setSelected(index);
  }

  function getThirdQuery(index) {
    return gql`
    query {
      secondCategory(id: ${props.data[index].id}) {
        name
        children {
          id
          name
        }
      }
    }`;
  }

  return (
    <CategoryContentBlock>
      <div className="second">
        <div
          onClick={() => {
            toggleThirdCategory(0);
          }}>
          {props.data[0].name}
        </div>
        {props.data[1] ? (
          <div
            onClick={() => {
              toggleThirdCategory(1);
            }}>
            {props.data[1].name}
          </div>
        ) : null}
      </div>
      {showThird === true ? (
        <div className="third">
          <Query query={getThirdQuery(selected)}>
            {({ data, loading, error }) => {
              let childList = [];
              if (loading) return '';
              if (error) return '';
              data.secondCategory.children.forEach((data) => {
                childList.push(<div>{data.name}</div>);
              });
              return childList;
            }}
          </Query>
        </div>
      ) : null}
    </CategoryContentBlock>
  );
}

export default CategoryContent;
