import jwtDecode from 'jwt-decode';
import tokenService from "../../services/token.service";
import { DecodedToken } from "../../shared/interface/decoded-token";

class UserAuthService {
  isFullProfile(): boolean {
    const accessToken: string = tokenService.getAccessToken()

    if (accessToken) {
      const { birthdayDate }: DecodedToken = jwtDecode<DecodedToken>(accessToken);
      if (birthdayDate) {
        return true;
      }
    }

    return false;
  }

  isLoggedIn(): boolean {
    return !!tokenService.getAccessToken();
  }
}

export default new UserAuthService();
