'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const { back } = useRouter();

  return (
    <main className="flex items-center min-h-screen">
      <div className="container flex flex-col items-center px-6 mx-auto">
        <svg
          className="w-12 h-12 mt-8 text-primary-200"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <h1 className="text-6xl font-semibold text-secondary-700">404</h1>
        <p className="text-secondary-700">
          Page not found. Check the address or&nbsp;
          <span
            onClick={() => back()}
            className="text-primary-600 text-base hover:underline cursor-pointer"
          >
            go back
          </span>
          .
        </p>
      </div>
    </main>
  );
}
