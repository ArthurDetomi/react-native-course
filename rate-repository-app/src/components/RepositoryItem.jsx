import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../themes";

import { Linking } from "react-native";

import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 15,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: theme.fontSizes.subheading,
    marginBottom: 5,
    color: theme.colors.textPrimary,
  },
  description: {
    marginBottom: 5,
    color: theme.colors.textSecondary,
  },
  languageTag: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  languageText: {
    color: "white",
    fontWeight: "bold",
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  buttonSection: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export const formatCount = (value) => {
  return value >= 1000
    ? (value / 1000).toFixed(1).replace(".0", "") + "k"
    : String(value);
};

const RepositoryItem = ({ repository, showOpenInGithubButton = false }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.topSection}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View style={styles.info}>
          <Text style={styles.fullName}>{repository.fullName}</Text>
          <Text style={styles.description}>{repository.description}</Text>
          <View style={styles.languageTag}>
            <Text style={styles.languageText}>{repository.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text fontWeight="bold">
            {formatCount(repository.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{formatCount(repository.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{repository.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{repository.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
      {showOpenInGithubButton && (
        <View style={{ marginTop: 10 }}>
          <Button
            title="Open in GitHub"
            onPress={() => Linking.openURL(repository.url)}
          />
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
