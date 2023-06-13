'use client';

import { useState } from 'react';
import { Button, Input } from '@/shared/ui';
import { IUser } from '../types';

const LoginForm = (): JSX.Element => {
  const [user, setUser] = useState<IUser>({ login: '', password: '' });

  const handleChange = (value: string | number, fieldName: string) => {
    setUser({ ...user, [fieldName]: value });
  };

  return (
    <form className="p-10 bg-slate-50 border-black border rounded-lg ">
      <h1 className="font-bold text-2xl mb-3">Login</h1>
      <Input
        labelText={'Your login'}
        placeholder={'Login'}
        name={'login'}
        value={user?.login}
        handleChange={handleChange}
      />
      <Input
        labelText={'Your password'}
        placeholder={'Password'}
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
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
