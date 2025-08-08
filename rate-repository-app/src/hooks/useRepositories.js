import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data?.repositories, loading, refetch: refetch, error };
};

export default useRepositories;
