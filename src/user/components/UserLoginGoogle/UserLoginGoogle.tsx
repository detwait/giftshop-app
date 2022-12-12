import { useGoogleLogin } from "@react-oauth/google";

import UserLoginGoogleService from "../../services/user-auth-google.service";

function UserLoginGoogle() {
  const login = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      UserLoginGoogleService.signIn(access_token);
    },
  });

  return (
     <button onClick={() => login()}>
      Sign in with Google
    </button>
  );
}

export default UserLoginGoogle;
