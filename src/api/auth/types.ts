export interface LoginFormInput {
  username: string;
  password: string;
}

export interface LoginResponse {
  expiredDate: string;
  token: string;
  uid: number;
}
