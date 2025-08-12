import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import Text from "./Text";
import AppBar from "./AppBar";

import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import SingleRepository from "./SingleRepository";
import ReviewForm from "./ReviewForm";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#E1E5E7",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/createReview" element={<ReviewForm />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </View>
  );
};

export default Main;
