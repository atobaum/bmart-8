import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

type UserInfo = {
  email: String;
  name: String;
};

export default function useUser(): UserInfo | null {
  const { data } = useQuery(
    gql`
      query {
        currentUser {
          email
          name
        }
      }
    `,
    {
      fetchPolicy: 'cache-first',
    }
  );
  if (data && data.currentUser) return data.currentUser;
  else return null;
}
