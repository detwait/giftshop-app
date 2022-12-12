import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import UserLoginGoogleService from "../../services/user-auth-google.service";

export default function UserLoginGoogle() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      await UserLoginGoogleService.signIn(access_token);
      navigate('/list');
    },
  });

  return (
     <button onClick={() => login()}>
      Sign in with Google
    </button>
  );
}
