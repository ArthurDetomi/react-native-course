import { useFormik } from "formik";
import { View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import * as yup from "yup";

import Text from "./Text";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Input
        placeholder="username"
        onChangeText={formik.handleChange("username")}
        value={formik.values.username}
        inputContainerStyle={[formik.errors.username && styles.errorBorder]}
        errorMessage={formik.errors.username}
      />

      <Input
        placeholder="password"
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
        inputContainerStyle={[formik.errors.password && styles.errorBorder]}
        errorMessage={formik.errors.password}
      />

      <Button title="Sign in" onPress={formik.handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  errorBorder: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default SignIn;
