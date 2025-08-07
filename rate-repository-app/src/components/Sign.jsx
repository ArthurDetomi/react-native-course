import Text from "./Text";

import { View, TextInput, Pressable } from "react-native";

import { useFormik } from "formik";

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
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-6">Login</Text>

      <TextInput
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />

      <TextInput
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6"
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry
      />

      <Pressable
        onPress={formik.handleSubmit}
        className="bg-blue-500 px-6 py-3 rounded-md"
      >
        <Text className="text-white font-semibold text-center">Entrar</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
