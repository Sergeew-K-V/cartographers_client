import { RegisterForm } from '@/features/auth/register';
import { ImageCustom } from '@/shared/ui';

const RegisterPage = () => {
  return (
    <main className="flex items-center min-h-screen p-6 bg-secondary-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <ImageCustom
              src={'/images/seasons/summer.jpg'}
              alt="Logo"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
