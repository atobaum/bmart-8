import { GET_PRODUCT_SIMPLE } from '../main-query';
import getRandomInt from '../../../utils/random';
import { useQuery } from 'react-apollo';
import { useState } from 'react';

// For dev
export default function useRandomProducts(take: number) {
  const [cursor] = useState(getRandomInt(0, 1000));
  const { data, loading, error } = useQuery(GET_PRODUCT_SIMPLE, {
    variables: { cursor, take },
  });

  return data && data.products.products;
}
