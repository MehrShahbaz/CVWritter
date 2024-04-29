import { useCallback, useEffect, useState } from 'react';

import Input from 'components/shared/Input/Input';
import LoadingButton from 'components/shared/LoadingButton/LoadingButton';
import LoginWithGoogleButton from 'components/shared/LoginWithGoogleButton/LoginWithGoogleButton';
import Modal from 'components/shared/Modal/Modal';

import { loginWithEmail } from '../../services/authenticationSerive';

interface SignUpModalProps {
  isOpen: boolean;
  setOpen: (show: boolean) => void;
}

const SignUpModal = ({ isOpen, setOpen }: SignUpModalProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    if (email) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [email, password]);

  const signUpWithEmail = useCallback(async () => {
    await loginWithEmail({
      type: 'sign-up',
      email,
      password,
    }).then(() => {
      setOpen(false);
    });
  }, [email, password, setOpen]);

  return (
    <Modal show={isOpen} setShow={setOpen} heading="Sign Up">
      <div className="max-w-md w-full bg-white rounded-lg">
        <div className="px-4 flex p-4 pb-10 gap-4 flex-col">
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

          <LoadingButton onClick={signUpWithEmail} disabled={isDisableSubmit}>
            Sign Up
          </LoadingButton>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or sign up with</span>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-1 gap-3">
            <LoginWithGoogleButton />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
