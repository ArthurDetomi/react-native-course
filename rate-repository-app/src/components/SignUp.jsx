import { useFormik } from "formik";
import { View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import * as yup from "yup";
import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";

import useSignIn from "../hooks/useSignIn";

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

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be at least 5 characters")
    .max(30, "Username must be max 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(30, "Password must be max 30 characters"),
  passwordConfirm: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const [signIn] = useSignIn();

  const [createUser] = useMutation(CREATE_USER, {
    onError: (e) => {
      console.log(e);
    },
  });

  const onSubmit = async (values) => {
    const { username, password } = values;

    const user = {
      username,
      password,
    };

    try {
      await createUser({ variables: { user } });
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        onChangeText={formik.handleChange("username")}
        value={formik.values.username}
        inputContainerStyle={[formik.errors.username && styles.errorBorder]}
        errorMessage={formik.errors.username}
      />

      <Input
        placeholder="Password"
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
        inputContainerStyle={[formik.errors.password && styles.errorBorder]}
        errorMessage={formik.errors.password}
        secureTextEntry
      />

      <Input
        placeholder="Password Confirmation"
        onChangeText={formik.handleChange("passwordConfirm")}
        value={formik.values.passwordConfirm}
        inputContainerStyle={[
          formik.errors.passwordConfirm && styles.errorBorder,
        ]}
        errorMessage={formik.errors.passwordConfirm}
        secureTextEntry
      />

      <Button title="Sign in" onPress={() => formik.handleSubmit()} />
    </View>
  );
};

export default SignUp;
