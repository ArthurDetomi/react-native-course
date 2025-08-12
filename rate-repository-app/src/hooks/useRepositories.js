import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const getVariables = (order) => {
  let orderBy = "CREATED_AT",
    orderDirection = "ASC";

  switch (order) {
    case "LATEST":
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
      break;
    case "HIGHEST":
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
      break;
    case "LOWEST":
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
      break;
  }

  return { orderBy, orderDirection };
};

const useRepositories = ({ order }) => {
  const variables = getVariables(order);

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      ...variables,
    },
  });

  const response = {
    repositories: data?.repositories,
    loading,
    refetch: (newOrder) => refetch(getVariables(newOrder)),
    error,
  };

  console.log("response = ", response);

  return response;
};

export default useRepositories;
