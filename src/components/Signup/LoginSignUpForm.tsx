import { useCallback, useState } from 'react';
import { useUser } from 'context/userContext';
import { LoginDataType } from 'types/loginTypes';

import LogInForm from 'components/shared/LogInForm/LogInForm';
import SignUpModal from 'components/SignUpModal/SignUpModal';
import { urls } from 'routes/urls';
import { loginWithEmail } from 'services/authenticationSerive';
import { getUser } from 'services/userService';

const LoginPage = (): JSX.Element => {
  const { setUser } = useUser();
  const [isShowRegistration, setshowRegistration] = useState(false);
  const signInWithEmail = useCallback(
    async (data: LoginDataType) => {
      const { email, password } = data;

      await loginWithEmail({
        type: 'login',
        email,
        password,
      }).then((res): void => {
        getUser(res).then((response) => {
          if (response) {
            setUser(response);
            window.location.href = urls.home;
          }
        });
      });
    },
    [setUser]
  );

  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
        </div>

        <div className="max-w-xl w-full rounded overflow-hidden shadow-lg py-2 px-4">
          <div className="flex gap-4 mb-5 mt-5 flex-col">
            <LogInForm handleSubmit={signInWithEmail} />
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or login with</span>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-3">
              <LoginWithGoogleButton />
            </div> */}
            <div className="mt-6">
              <div className="flex justify-center">
                <div className="relative flex justify-center text-sm">
                  <div className="font-small text-black-400">Don&apos;t have an account?</div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <button
                    onClick={() => setshowRegistration(true)}
                    className="ml-2 cursor-pointer font-medium text-green-500 hover:text-green-700"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <SignUpModal isOpen={isShowRegistration} setOpen={setshowRegistration} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
