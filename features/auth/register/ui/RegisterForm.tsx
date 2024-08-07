'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { IUser } from '@/shared/api';
import { useAlert } from '@/shared/lib';
import { Button, Checkbox, Input, LinkButton, Loader } from '@/shared/ui';
import { fetchRegister } from '../api';

const RegisterForm = () => {
  const { push } = useRouter();
  const [registerUser, setRegisterUser] = useState<
    Omit<IUser, 'id' | 'rang' | 'gameStats'>
  >({
    email: '',
    nickname: '',
  });
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { setAlert } = useAlert();

  const handleChange = (value: string, fieldName?: string) => {
    if (fieldName) {
      setRegisterUser({ ...registerUser, [fieldName]: value });
    } else {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent | undefined) => {
    event?.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ text: 'Password mismatch', type: 'danger' });
      return;
    }
    registerMutation.mutate();
  };

  const registerMutation = useMutation({
    mutationFn: () => {
      return fetchRegister(registerUser, password);
    },
    onSuccess: (response) => {
      setAlert({
        type: 'success',
        text: response.data,
      });
      push('/auth/login');
    },
    onError: ({ response }) => {
      setAlert({
        type: 'danger',
        text: response.data,
      });
    },
  });

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <h1 className="mb-4 text-xl font-semibold text-secondary-700">
          Create account
        </h1>
        <Input
          labelText={'Nickname'}
          name={'nickname'}
          id="nickname"
          value={registerUser.nickname}
          handleChange={handleChange}
        />
        <Input
          labelText={'Email'}
          name={'email'}
          id="email"
          type="email"
          value={registerUser.email}
          handleChange={handleChange}
        />
        <Input
          labelText={'Password'}
          name={'password'}
          id={'password'}
          type="password"
          value={password}
          handleChange={setPassword}
        />
        <Input
          id="confirmPassword"
          labelText={'Confirm password'}
          value={confirmPassword}
          type="password"
          handleChange={handleChange}
        />
        <div className="flex mb-4 text-sm">
          <Checkbox labelText="I agree to the privacy policy" />
        </div>
        <Button className="primary-button" onClick={handleSubmit}>
          Create account
        </Button>
        <hr className="my-8" />
        <p className="mt-4">
          <LinkButton
            className="text-sm font-medium text-primary-600 hover:underline"
            href="/auth/login"
          >
            Already have an account? Login
          </LinkButton>
        </p>
      </form>
      {registerMutation.isLoading && <Loader />}
    </>
  );
};

export default RegisterForm;
