'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { IUser } from '@/shared/api';
import { useAlert } from '@/shared/lib';
import { Button, Checkbox, Input, LinkButton, Loader } from '@/shared/ui';

const RegisterForm = () => {
  const { push } = useRouter();
  const [registerUser, setRegisterUser] = useState<IUser>({
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
      return axios.post(
        (process.env.NEXT_PUBLIC_SERVER_URL as string) + '/register',
        { ...registerUser, password }
      );
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
          placeholder={'Your nickname'}
          name={'nickname'}
          id="nickname"
          value={registerUser.nickname}
          handleChange={handleChange}
        />
        <Input
          labelText={'Email'}
          placeholder={'Your email'}
          name={'email'}
          id="email"
          type="email"
          value={registerUser.email}
          handleChange={handleChange}
        />
        <Input
          labelText={'Password'}
          placeholder={'Your password'}
          name={'password'}
          id={'password'}
          type="password"
          value={password}
          handleChange={setPassword}
        />
        <Input
          id="confirmPassword"
          labelText={'Confirm password'}
          placeholder={'Confirm password'}
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
