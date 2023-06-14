'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Input, LinkButton } from '@/shared/ui';

const ForgotPasswordPage = (): JSX.Element => {
  const [recoverEmail, setRecoverEmail] = useState<string>('');

  const handleChange = (value: string | number) => {
    setRecoverEmail(value as string);
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-secondary-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <Image
              src={'/images/seasons/summer.jpeg'}
              alt="Logo"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-secondary-700">
                Forgot password
              </h1>
              <Input
                value={recoverEmail}
                id="recoverEmail"
                labelText="Email"
                placeholder="Your email"
                handleChange={handleChange}
                type="password"
              />
              <LinkButton
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary"
                href="/login"
              >
                Recover password
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
