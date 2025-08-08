import { useMutation } from "@apollo/client";

import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    return await mutate({ variables: { credentials } });
  };

  return [signIn, result];
};

export default useSignIn;
