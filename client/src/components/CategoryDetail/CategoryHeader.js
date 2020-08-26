import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ArrowBack from '../ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import ProductHowAbout from '../CategoryDetail/ProductHowAbout'

const CategoryHeaderBlock = styled.div`
  .Hedaer{
    padding-top: 1rem;
    justify-content: space-between;
    display: flex;
    height: 2rem;
    background-color: white;
    margin-bottom:0.1rem;
  }

`;

function CategoryHeader({ type,id }) {
  let GetReadyProductQuery=''
  if(type==='second'){
    GetReadyProductQuery = gql`
      query{
        secondCategory(id:${id}){
          name
        }
      }`;
  }
  else if(type==='third'){
    GetReadyProductQuery = gql`
      query{
        thirdCategory(id:${id}){
          name
        }
      }`;
  }

  return (
    <CategoryHeaderBlock>
      <div className="Hedaer">
        <div className="ArrowBack">
          <ArrowBack></ArrowBack>
        </div>
        <Query query={GetReadyProductQuery}>
          {({ data, loading, error }) => {
            if (loading || error) return '';
            if(type==='third'){
              return <div className="Title">{data.thirdCategory.name}</div>;
            }else if(type==='second'){
              return <div className="Title">{data.secondCategory.name}</div>;
            }
          }}
        </Query>
        <Link to={'/search/'}>
          <SearchIcon className="SearchIcon"></SearchIcon>
        </Link>
      </div>
      <div className="ProductHowAbout">
      {
        type==='second'
        ?<ProductHowAbout className="ProductHowAbout"></ProductHowAbout>
        :''
      }
      </div>
    </CategoryHeaderBlock>
  );
}
export default CategoryHeader;
