import { AxiosResponse } from "axios";
import { redirect } from "react-router-dom";
import api from "../../services/api";
import TokenService from "../../services/token.service";

class UserAuthGoogleService {
  async signIn(access_token: string) {
    const response: AxiosResponse = await api.post("/api-user-auth-google", {
      access_token
    });

    if (response.data) {
      TokenService.updateAccessToken(response.data.accessToken);
      TokenService.updateRefreshToken(response.data.refreshToken);
    }

    throw redirect("/");
  }
}

export default new UserAuthGoogleService();
