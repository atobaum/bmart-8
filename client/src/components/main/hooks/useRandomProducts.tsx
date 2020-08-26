import { useState } from 'react';
import { useQuery } from 'react-apollo';
import getRandomInt from '../../../utils/random';
import { GET_PRODUCT_SIMPLE } from '../main-query';

type ProductInfo = {
  id: number;
  name: string;
  price: number;
  img_url: string;
  discount: number;
};
// For dev
export default function useRandomProducts(take: number): ProductInfo[] {
  const [cursor] = useState(getRandomInt(0, 1000));
  const { data } = useQuery(GET_PRODUCT_SIMPLE, {
    variables: { cursor, take },
  });

  return data && data.products.products;
}
