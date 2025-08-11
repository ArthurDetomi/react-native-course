import { FlatList, View, StyleSheet, Pressable } from "react-native";

import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
  },
  listBackground: {
    backgroundColor: "#e1e4e8",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onPress }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.listBackground}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const navigate = useNavigate();

  const onPressEachRepository = (repositoryId) => {
    navigate(`/${repositoryId}`);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onPress={onPressEachRepository}
    />
  );
};

export default RepositoryList;
