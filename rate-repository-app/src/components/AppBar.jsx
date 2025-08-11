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

        {data?.me ? (
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
      </ScrollView>
    </View>
  );
};

export default AppBar;
