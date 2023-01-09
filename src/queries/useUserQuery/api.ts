import { commonInstance } from '@api/index';
import { V1_RESOURCE } from '@api/constants';
import type { UserInfo } from './types';

export const getUserInfoApi = () =>
  commonInstance.get<UserInfo>(`${V1_RESOURCE}/auth/user-infos`);
