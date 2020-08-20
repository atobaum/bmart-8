import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const SearchHistoryItem: React.FC<{
  onDelete: () => void;
  date: Date;
  query: string;
}> = ({ onDelete, date, query }) => {
  return (
    <div>
      <div>{query}</div>
      <div>{formatDistanceToNow(date, { locale: ko })} 전</div>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

const SearchPageBlock = styled.div``;

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useQuery(gql`
    query getSearchHistory {
      searchHistory {
        id
        date
        query
      }
    }
  `);

  return (
    <SearchPageBlock>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {loading || error
        ? null
        : data.searchHistory.map(({ id, date, query }: any) => {
            return (
              <SearchHistoryItem
                key={id}
                onDelete={() => console.log('search histroy delete', id)}
                date={new Date(date)}
                query={query}
              />
            );
          })}
    </SearchPageBlock>
  );
};

export default SearchPage;
