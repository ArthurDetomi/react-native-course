import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import Text from "./Text";
import AppBar from "./AppBar";

import RepositoryList from "./RepositoryList";
import SignIn from "./Sign";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
