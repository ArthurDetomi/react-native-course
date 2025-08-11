import { useApolloClient, useQuery } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";

import { FIND_USER_LOGGED } from "../graphql/queries";

const useSignOut = () => {
  const { data, loading } = useQuery(FIND_USER_LOGGED);

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return { signOut, data, loading };
};

export default useSignOut;
