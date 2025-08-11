import Text from "./Text";

import { StyleSheet, View } from "react-native";

import theme from "../themes";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: "#fff",
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  ratingContainer: {
    alignSelf: "flex-start",
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 1000,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  reviewTextContainer: {
    flexShrink: 1,
    flex: 1,
    gap: 5,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  viewRepoContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexShrink: 1,
    flexGrow: 1,
    padding: 10,
    alignItems: "center",
  },
  deleteRevContainer: {
    backgroundColor: theme.colors.error,
    borderRadius: 5,
    flexShrink: 1,
    flexGrow: 1,
    padding: 10,
    alignItems: "center",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  console.log(review.createdAt);

  return (
    <View>
      <ItemSeparator />
      <View style={styles.container}>
        <View style={styles.reviewContainer}>
          <View style={styles.ratingContainer}>
            <Text color="primary" fontWeight="bold">
              {review.rating}
            </Text>
          </View>
          <View style={styles.reviewTextContainer}>
            <Text fontWeight="bold">{review.user.username}</Text>
            <Text color="textSecondary">
              {review.createdAt.split("T")[0].replaceAll("-", ".")}
            </Text>
            <Text>{review.text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
