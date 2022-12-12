import { AxiosResponse } from "axios";
import api from "../../services/api";
import { Pageable } from "../../shared/interface/pageable";
import { UserDto } from "../dto/user.dto";

class UserService {
  async getMany(): Promise<Pageable<UserDto>> {
    const response: AxiosResponse = await api.get("/api-user", { params: { page: 1, limit: 100 } });
    return response?.data;
  }
}

export default new UserService();
