import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from 'components/_shared/Input/Input';
import LoadingButton from 'components/_shared/LoadingButton/Loadingbutton';
import LoginWithGoogleButton from 'components/_shared/LoginWithGoogleButton/LoginWithGoogleButton';
import ToastBox from 'components/_shared/ToastBox/ToastBox';
import SignUpModal from 'components/SignUpModal/SignUpModal';

import { loginWithEmail } from '../../redux/slices/authSlice';
import { AppDispatch } from '../../redux/store';

const LoginPage = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisableSubmit, setDisableSubmit] = useState(true);
  const [isShowRegistration, setshowRegistration] = useState(false);

  useEffect(() => {
    if (email && password.length >= 6) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [email, password]);

  const signInWithEmail = useCallback(async () => {
    await dispatch(
      loginWithEmail({
        type: 'login',
        email,
        password,
      })
    );
  }, [dispatch, email, password]);

  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
        </div>

        <div className="max-w-xl w-full rounded overflow-hidden shadow-lg py-2 px-4">
          <div className="flex gap-4 mb-5 flex-col">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
              type="text"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              name="password"
              type="password"
            />
            <LoadingButton onClick={signInWithEmail} disabled={isDisableSubmit}>
              Sign In
            </LoadingButton>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or login with</span>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-3">
              <LoginWithGoogleButton />
            </div>
            <div className="mt-6">
              <div className="flex justify-center">
                <div className="relative flex justify-center text-sm">
                  <div className="font-small text-black-400">Don&apos;t have an account?</div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <button
                    onClick={() => setshowRegistration(true)}
                    className="ml-2 cursor-pointer font-medium text-violet-600 hover:text-violet-400"
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
      <ToastBox />
    </div>
  );
};

export default LoginPage;
