'use client';

import { useState } from 'react';
import { Input } from '@/shared/ui';
import { IUser } from '../types';

const LoginForm = (): JSX.Element => {
  const [user, setUser] = useState<IUser>({ login: '', password: '' });

  const handleChange = (fieldName: string, value: string | number) => {
    setUser({ ...user, [fieldName]: value });
  };

  return (
    <form className="p-10 bg-slate-50 border-black border rounded-lg ">
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
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
