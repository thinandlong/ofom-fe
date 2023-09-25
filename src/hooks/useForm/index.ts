'use client';

import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import { ErrorType, UseForm } from './types';

/**
 *
 * @param initialState form에 전달해야하는 객체의 초기값을 입력합니다.
 * @param ErrorType initialState가 key가되고, 해당하는 키에 대한 에러 상태를 나타냅니다.
 * @param validate initialState의 키를 인자로 받아 ErrorType<T>를 return해야합니다.
 */
const useForm = <T extends object>({
  initialState,
  validate,
  onSubmit,
}: UseForm<T>) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<ErrorType<typeof initialState>>(() =>
    Object.fromEntries(
      Object.entries(initialState).map(([key]) => [[key], null]),
    ),
  );
  const [hasFormError, setHasFormError] = useState(false);

  const propertyLen = useMemo(
    () => Object.keys(initialState).length,
    [initialState],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newErrors = validate(values);
      const validPropertyLen = Object.values(newErrors).filter(
        (v) => v === null,
      ).length;

      const isValid = propertyLen === validPropertyLen;

      setHasFormError(!isValid);
      setErrors(newErrors);
      if (isValid) await onSubmit();
    },
    [values, validate, onSubmit, propertyLen],
  );

  return {
    values,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    hasFormError,
  };
};

export default useForm;
