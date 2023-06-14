'use client';

import { FormEvent, useState } from 'react';
import { IUser } from '@/shared/api';
import { Button, Input } from '@/shared/ui';

const LoginForm = (): JSX.Element => {
  const [user, setUser] = useState<IUser>({ email: '', password: '' });

  const handleChange = (value: string | number, fieldName: string) => {
    setUser({ ...user, [fieldName]: value });
  };

  const handleSubmit = (event: FormEvent | React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
  };

  return (
    <form
      className="p-10 bg-secondary-50 border-secondary-500 border rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-2xl mb-3">Login</h1>
      <Input
        labelText={'Email'}
        placeholder={'Your email'}
        name={'email'}
        value={user?.email}
        handleChange={handleChange}
      />
      <Input
        labelText={'Password'}
        placeholder={'Your password'}
        name={'password'}
        type="password"
        value={user?.password}
        handleChange={handleChange}
      />
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-secondary-300 rounded bg-secondary-50 focus:ring-3 focus:ring-primary-300"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-secondary-900 "
        >
          Remember me
        </label>
      </div>
      <Button onClick={handleSubmit} type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
