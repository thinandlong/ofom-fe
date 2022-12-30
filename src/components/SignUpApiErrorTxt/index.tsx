/* eslint-disable @typescript-eslint/no-empty-interface */
import { ApiError } from '@api/types';

interface SignUpApiErrorProps extends Pick<ApiError, 'errorCode'> {}
const SignUpApiErrorTxt = ({ errorCode }: SignUpApiErrorProps) => {
  return (
    <span>
      {errorCode === 'USERNAME_ALREADY_EXISTS_ERROR' &&
        '이미 존재하는 사용자 이름입니다'}
    </span>
  );
};
export default SignUpApiErrorTxt;
