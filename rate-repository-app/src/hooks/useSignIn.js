import { useApolloClient, useMutation } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";

import { useNavigate } from "react-router-native";

import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    try {
      const { data } = await mutate({ variables: { credentials } });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      await apolloClient.resetStore();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return [signIn, result];
};

export default useSignIn;
