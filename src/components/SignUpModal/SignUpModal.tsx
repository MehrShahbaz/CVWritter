import { useCallback } from 'react';
import { useUser } from 'context/userContext';
import { LoginDataType } from 'types/loginTypes';

import LogInForm from 'components/shared/LogInForm/LogInForm';
// import LoginWithGoogleButton from 'components/shared/LoginWithGoogleButton/LoginWithGoogleButton';
import Modal from 'components/shared/Modal/Modal';
import { urls } from 'routes/urls';
import { getUser } from 'services/userService';

import { loginWithEmail } from '../../services/authenticationSerive';

interface SignUpModalProps {
  isOpen: boolean;
  setOpen: (show: boolean) => void;
}

const SignUpModal = ({ isOpen, setOpen }: SignUpModalProps): JSX.Element => {
  const { setUser } = useUser();
  const signUpWithEmail = useCallback(
    async (data: LoginDataType) => {
      const { email, password } = data;

      await loginWithEmail({
        type: 'sign-up',
        email,
        password,
      }).then((res) => {
        getUser(res).then((response) => {
          if (response) {
            setUser(response);
            window.location.href = urls.home;
          }
        });
        setOpen(false);
      });
    },
    [setOpen, setUser]
  );

  return (
    <Modal show={isOpen} setShow={setOpen} heading="Sign Up">
      <div className="max-w-md w-full bg-white rounded-lg">
        <div className="px-2 flex pb-10 gap-4 flex-col">
          <LogInForm handleSubmit={signUpWithEmail} />
          {/* <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or sign up with</span>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-1 gap-3">
            <LoginWithGoogleButton />
          </div> */}
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
