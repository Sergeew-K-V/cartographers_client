'use client';

import { FormEvent, useState } from 'react';
import { IUser } from '@/shared/api';
import { Button, Checkbox, Input, LinkButton } from '@/shared/ui';

const LoginForm = (): JSX.Element => {
  const [user, setUser] = useState<IUser>({ email: '', password: '' });

  const handleChange = (value: string | number, fieldName?: string) => {
    fieldName && setUser({ ...user, [fieldName]: value });
  };

  const handleSubmit = (event: FormEvent | React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
  };

  return (
    <form
      className="p-10 bg-white shadow-2xl rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-2xl mb-3">Login</h1>
      <Input
        labelText={'Email'}
        placeholder={'Your email'}
        name={'email'}
        id={'email'}
        value={user?.email}
        handleChange={handleChange}
      />
      <Input
        labelText={'Password'}
        placeholder={'Your password'}
        name={'password'}
        id={'password'}
        type="password"
        value={user?.password}
        handleChange={handleChange}
      />
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <Checkbox
            labelText={'Remember me'}
            className="w-4 h-4 border border-secondary-300 rounded bg-secondary-50 focus:ring-3 focus:ring-primary-300"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between mb-3">
        <LinkButton href="/register">Create account</LinkButton>
        <LinkButton href="/register">Forgot you password?</LinkButton>
      </div>
      <Button onClick={handleSubmit} type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
