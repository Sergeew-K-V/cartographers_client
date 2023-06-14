// 'use client';

// import { useRouter } from 'next/navigation';

// const Home = () => {
//   const router = useRouter();
//   router.push('/login');
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24"></main>
//   );
// };

// export default Home;

import { redirect } from 'next/navigation';

const Home = () => {
  redirect('/login');
};

export default Home;
