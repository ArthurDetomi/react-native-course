import { useMutation } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";

import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
  const authStorage = useAuthStorage();

  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    return await mutate({ variables: { credentials } });
  };

  return [signIn, result];
};

export default useSignIn;
