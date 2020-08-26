import { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import getRandomInt from '../../../utils/random';

type ProductInfo = {
  id: number;
  name: string;
  price: number;
  img_url: string;
  discount: number;
};

const GET_PRODUCT_SIMPLE = gql`
  query getProductsSimple($take: Int!, $cursor: Int) {
    products(take: $take, cursor: $cursor) {
      products {
        id
        name
        price
        img_url
        discount
      }
    }
  }
`;

// For dev
export default function useRandomProducts(take: number): ProductInfo[] {
  const [cursor] = useState(getRandomInt(0, 1000));
  const { data } = useQuery(GET_PRODUCT_SIMPLE, {
    variables: { cursor, take },
  });

  return data && data.products.products;
}
