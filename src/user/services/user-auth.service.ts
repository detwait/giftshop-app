import jwtDecode from 'jwt-decode';
import TokenService from "../../services/token.service";
import { DecodedToken } from "../../shared/interface/decoded-token";

class UserAuthService {
  isFullProfile(): boolean {
    const accessToken: string = TokenService.getAccessToken()

    if (accessToken) {
      console.log(jwtDecode<DecodedToken>(accessToken));
      const { birthdayDate }: DecodedToken = jwtDecode<DecodedToken>(accessToken);
      if (birthdayDate) {
        return true;
      }
    }

    return false;
  }

  isLoggedIn(): boolean {
    return !!TokenService.getAccessToken();
  }
}

export default new UserAuthService();
