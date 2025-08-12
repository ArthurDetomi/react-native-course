import { FlatList, View, StyleSheet, Pressable } from "react-native";

import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

import { useNavigate } from "react-router-native";

import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

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

const OrderSelector = ({ selectedOrder, changeOrder }) => {
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <Picker
        selectedValue={selectedOrder}
        onValueChange={(value) => changeOrder(value)}
      >
        <Picker.Item label="Latest repositories" value="LATEST" />
        <Picker.Item label="Highest rated repositories" value="HIGHEST" />
        <Picker.Item label="Lowest rated repositories" value="LOWEST" />
      </Picker>
    </View>
  );
};

export const RepositoryListContainer = ({
  repositories,
  onPress,
  order,
  changeOrder,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.listBackground}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <OrderSelector selectedOrder={order} changeOrder={changeOrder} />
      )}
      renderItem={({ item }) => (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState("LATEST");

  const { repositories } = useRepositories({ order });

  const changeOrder = (option) => {
    switch (option) {
      case "LATEST":
        setOrder("LATEST");
        break;
      case "HIGHEST":
        setOrder("HIGHEST");
        break;
      case "LOWEST":
        setOrder("LOWEST");
        break;
    }
  };

  const navigate = useNavigate();

  const onPressEachRepository = (repositoryId) => {
    navigate(`/${repositoryId}`);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onPress={onPressEachRepository}
      order={order}
      changeOrder={changeOrder}
    />
  );
};

export default RepositoryList;
