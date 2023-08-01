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
        name="email"
        labelText="Email"
        handleChange={handleChange}
        type="email"
      />
      <Button className="primary-button" type="submit">
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
