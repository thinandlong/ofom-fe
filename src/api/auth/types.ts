export interface LoginFormInput {
  username: string;
  password: string;
}

export interface LoginResponse {
  expiredDate: string;
  token: string;
  uid: number;
}
export interface SignUpFormInput {
  username: string;
  password: string;
  nickname: string;
}

export interface SignUpResponse {
  socialType: string;
  username: string;
}
