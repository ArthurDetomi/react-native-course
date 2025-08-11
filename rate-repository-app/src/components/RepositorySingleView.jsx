import { useParams } from "react-router-native";

import { FIND_REPOSITORY_BY_ID } from "../graphql/queries";

import { useQuery } from "@apollo/client";

import RepositoryItem from "./RepositoryItem";

const RepositorySingleView = () => {
  let { id } = useParams();

  const { data, loading } = useQuery(FIND_REPOSITORY_BY_ID, {
    variables: {
      id: id,
    },
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return null;
  }

  return (
    <RepositoryItem
      repository={data.repository}
      showOpenInGithubButton={true}
    />
  );
};

export default RepositorySingleView;
