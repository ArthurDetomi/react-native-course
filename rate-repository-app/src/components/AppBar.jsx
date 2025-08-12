import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

import Text from "./Text";
import useSignOut from "../hooks/useSignOut";

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
  const { signOut, data, loading } = useSignOut();

  const isLoggedIn = Boolean(data?.me);

  if (loading) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Text style={{ color: "white" }}>Loading...</Text>
        </ScrollView>
      </View>
    );
  }

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

        {isLoggedIn && (
          <Pressable>
            <Link to="/createReview">
              <Text
                style={{ color: "white" }}
                fontWeight="bold"
                fontSize="subheading"
              >
                Create a review
              </Text>
            </Link>
          </Pressable>
        )}

        {isLoggedIn ? (
          <Pressable onPress={() => signOut()}>
            <Text
              style={{ color: "white" }}
              fontWeight="bold"
              fontSize="subheading"
            >
              Sign out
            </Text>
          </Pressable>
        ) : (
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
        )}

        {!isLoggedIn && (
          <Pressable>
            <Link to="/signup">
              <Text
                style={{ color: "white" }}
                fontWeight="bold"
                fontSize="subheading"
              >
                Sign up
              </Text>
            </Link>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
