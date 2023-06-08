import commonInstance from '@api/commonInstance';
import { V1_RESOURCE } from '@api/constants';
import type { SignUp, SignUpFormInput } from './types';

export const signUpApi = async (data: SignUpFormInput) =>
  commonInstance.post<SignUp>(`${V1_RESOURCE}/users`, data);
