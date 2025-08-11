import { useParams } from "react-router-native";
import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";

import { FIND_REPOSITORY_BY_ID } from "../graphql/queries";

import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const SingleRepository = () => {
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

  const reviewNodes = data.repository.reviews
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem
          repository={data.repository}
          showOpenInGithubButton={true}
        />
      )}
    />
  );
};

export default SingleRepository;
