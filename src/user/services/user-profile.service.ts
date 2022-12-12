import { AxiosResponse } from "axios";
import api from "../../services/api";
import tokenService from "../../services/token.service";

class UserProfileService {
  async setBirthday(birthdayDate: Date) {
    const response: AxiosResponse = await api.patch("/api-user-profile/birthday", { birthdayDate });

    if (response.data) {
      tokenService.updateAccessToken(response.data.accessToken);
      tokenService.updateRefreshToken(response.data.refreshToken);
    }
  }
}

export default new UserProfileService();
