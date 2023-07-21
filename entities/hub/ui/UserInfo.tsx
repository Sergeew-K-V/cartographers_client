'use client';

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { IUser, fetchUser } from '@/shared/api';
import { useAuth } from '@/shared/lib';
import { ImageCustom } from '@/shared/ui';

function UserInfo() {
  const { getUserId, getToken, logout } = useAuth();
  const [user, setUser] = useState<IUser>();

  useQuery(
    'getUser',
    () => {
      fetchUser(getUserId(), getToken())
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            logout();
          } else {
            console.log('🚀 ~ file: UserInfo.tsx:21 ~ UserInfo ~ err:', err);
          }
        });
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
        <p className="py-2 text-lg text-gray-700">Nickname: {user?.nickname}</p>
        <div className="flex items-center text-gray-700">
          <ImageCustom
            src="/images/email-icon.svg"
            alt="icon"
            width={100}
            height={100}
            className="h-6 w-6 "
          />
          <p className="px-2 text-sm"> Email: {user?.email}</p>
        </div>
        <h3 className="text-2xl mt-4 font-semibold text-gray-800">
          Game stats
        </h3>
        <div className="flex items-center mt-4 text-gray-700">
          <ImageCustom
            src="/images/rang-icon.svg"
            alt="icon"
            width={100}
            height={100}
            className="h-6 w-6 "
          />
          <p className="px-2 text-sm">Rang: {user?.rang}</p>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <ImageCustom
            src="/images/rate-icon.svg"
            alt="icon"
            width={100}
            height={100}
            className="h-6 w-6 "
          />
          <p className="px-2 text-sm">Rate: {user?.gameStats?.rate}</p>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <ImageCustom
            src="/images/win-icon.svg"
            alt="icon"
            width={100}
            height={100}
            className="h-6 w-6 "
          />
          <p className="px-2 text-sm">Wins: {user?.gameStats?.wins}</p>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <ImageCustom
            src="/images/lose-icon.svg"
            alt="icon"
            width={100}
            height={100}
            className="h-6 w-6 "
          />
          <p className="px-2 text-sm">Loses: {user?.gameStats?.loses}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
