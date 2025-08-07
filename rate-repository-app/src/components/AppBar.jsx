import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";

import { Link } from "react-router-native";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 15,
    flexDirection: "row",
    gap: 8,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Pressable>
          <Link to="/">
            <Text
              style={{ color: "white" }}
              fontWeight="bold"
              fontSize="subheading"
            >
              Repositories
            </Text>
          </Link>
        </Pressable>

        <Pressable>
          <Link to="/login">
            <Text
              style={{ color: "white" }}
              fontWeight="bold"
              fontSize="subheading"
            >
              Sign in
            </Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
