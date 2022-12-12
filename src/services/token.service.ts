class TokenService {
  getAccessToken(): string {
    return localStorage.getItem("accessToken") || '';
  }

  updateAccessToken(token: string): void {
    localStorage.setItem("accessToken", token);
  }

  getRefreshToken(): string {
    return localStorage.getItem("refreshToken") || '';
  }

  updateRefreshToken(token: string): void {
    localStorage.setItem("refreshToken", token);
  }
}

export default new TokenService();