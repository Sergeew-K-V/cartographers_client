'use client';

import { FormEvent, useState } from 'react';
import { Button, Input, LinkButton } from '@/shared/ui';

const ForgotPasswordForm = () => {
  const [recoverEmail, setRecoverEmail] = useState<string>('');

  const handleChange = (value: string) => {
    setRecoverEmail(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <h1 className="mb-4 text-xl font-semibold text-secondary-700">
        Forgot password
      </h1>
      <Input
        value={recoverEmail}
        id="recoverEmail"
        labelText="Email"
        placeholder="Your email"
        handleChange={handleChange}
        type="email"
      />
      <Button
        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary"
        type="submit"
      >
        Recover password
      </Button>
      <p className="mt-20 w-28">
        <LinkButton
          className="text-sm font-medium bg-primary-700 w-40 rounded-md text-white px-5 py-2"
          href={'/auth/login'}
        >
          Go to login
        </LinkButton>
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
