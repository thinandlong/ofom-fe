export interface LoginFormInput {
  username: string;
  password: string;
}

export interface Login {
  expiredDate: string;
  token: string;
  uid: number;
}
