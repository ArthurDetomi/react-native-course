import Text from "./Text";

import { useFormik } from "formik";

import { View, StyleSheet } from "react-native";

import { Button, Input } from "react-native-elements";

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        onChangeText={formik.handleChange("username")}
        value={formik.values.username}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Password"
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
        secureTextEntry
        containerStyle={styles.inputContainer}
      />
      <Button
        title="Sign in"
        onPress={formik.handleSubmit}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  inputContainer: {
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
  },
});

export default SignIn;
